using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualBasic;
using MIPS_API.BL;
using MIPS_API.Helpers;
using MIPS_API.Models;
using nrdr13.acr.org.SSOService;
using System.Collections.Generic;
using System.Data;
using System.Dynamic;
using System.Net.Mail;
using Constants = MIPS_API.Helpers.Constants;

namespace MIPS_API.Controllers
{
    
    [Route("[controller]")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        private readonly IConfiguration configuration;
        private readonly ILogger<HomeController> logger;
        private readonly string connectionString;

        public HomeController(IConfiguration appConfiguration, ILogger<HomeController> logger, SSOServiceSoap sSOServiceSoap)
        {
            this.configuration = appConfiguration;
            this.logger = logger;
            this.connectionString = appConfiguration.GetConnectionString("ExamAPIConnection");
        }


        [HttpGet]
        [Route("GetFacilityTINs")]
        public async Task<IActionResult> GetFacilityManagedTinsAsync(string UserName)
        {
            string _userName = UserName;
            var data = await HomeBL.GetFacilityTinsAsync(UserName, connectionString);

            if (data == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(data.AsEnumerable().Select(Y => new FacilityTinsResult()
                {
                    tin = Y.Field<string>("TIN"),
                    isgpro = Y.Field<bool>("IS_GPRO"),
                    status = Y.Field<bool>("IS_GPRO") ? "( GPRO )" : ""
                }).ToArray());
            }
        }

        [HttpGet]
        [Route("PhysicianRecordCounts")]
        public async Task<ActionResult> GetTinRelatedNPIs(string TIN,string UserName)
        {
            var data = await HomeBL.GetTinRelatedNPIsAsync(TIN, UserName, connectionString);
            if (data == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(data.AsEnumerable().Select(Y => new TinNPIResult()
                {
                    physician_npi = Y.Field<string>("npi"),
                    first_name = Y.Field<string>("FirstName"),
                    last_name = Y.Field<string>("LastName"),
                    user_name = Y.Field<string>("UserName"),
                    records = Y.Field<string>("Records"),
                    registered = Y.Field<string>("Registered"),
                }).ToArray());
            }
        }

        [HttpPost]
        [Route("CmsDashboardDetails")]
        public async Task<ActionResult> GetCmsSubmisisonDashBoardDetails(CmsDashboardRequest request)
        {
            int Role = 0;
            dynamic model = new ExpandoObject();
            try
            {
                if (request.UserRole.ToLower() == Constants.ACRinAdmin.ToLower())
                {
                    Role = 3;
                }
                else if (request.UserRole.ToLower() == Constants.FacilityAdmin.ToLower()
               || (request.UserRole.ToLower() == Constants.RegistryAdmin.ToLower()
               || request.UserRole.ToLower() == Constants.FacilityUser.ToLower()

               || request.UserRole.ToLower() == Constants.SuperCorporateAdmin.ToLower()
               || request.UserRole.ToLower() == Constants.CorporateAdmin.ToLower()
               || request.UserRole.ToLower() == Constants.ServiceUser.ToLower()))

                {
                    Role = 1;
                }

                var isyearstatus = CommonBL.CheckCMSYearStatus(request.CMSYear, connectionString);


                var data = CommonBL.CMSSubmittedTinsCount(request.CMSYear, request.UserName, Role, connectionString);
                data.issubmittocms = isyearstatus != null ? isyearstatus.isSubmittoCMS : false;
                data.role = Role;
                data.isgpro = request.IsGpro != null ? (bool)request.IsGpro : true;
                data.datalist = CommonBL.GproTinsCMSSubmittedDetails(request.CMSYear, data.isgpro, Role, request.UserName, connectionString);

                model.data = data;
                model.SelectedYear = request.CMSYear;
                model.isActiveYear = isyearstatus.isActiveYear;
                model.ISCMSSubmissionActive = isyearstatus.isSubmittoCMS != null ? (bool)isyearstatus.isSubmittoCMS : false;

                return Ok(model);
            }
            catch (Exception Ex)
            {

            }
            return BadRequest();
        }

        [HttpGet]
        [Route("GetPhysicianNPIsandAttestedCount")]
        public async Task<ActionResult> GetPhysicianNPIsandAttestedCountForAdminGrid()
        {
            List<int[]> data = await HomeBL.GetPhysicianNPIsandAttestedCount(connectionString);
            if(data != null)
            {
                return Ok(data.ToArray());
            }
            else
            {
                return BadRequest();
            }

        }

        [HttpPost]
        [Route("GetPhysicianDetailswithRegistrationStatus")]
        public async Task<ActionResult> GetPhysicianDetailswithRegistrationStatus(PhysicianRegDetailsGridRequest request)
        {
            DataTable data = await HomeBL.GetPhysicianDetailswithRegistrationStatus(request.categoryid, request.searchtext, connectionString);

            if (data != null)
            {
                return Ok(data.AsEnumerable().Select( Y=> new string[5]{
                    Y.Field<string>("FirstName"),
                    Y.Field<string>("LastName"),
                    Y.Field<string>("UserName"),
                    Y.Field<string>("EMail_Address"),
                    Y.Field<string>("Status")
                }).ToArray());
            }
            else
            {
                return BadRequest();
            }
        }
    }
}
