using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualBasic;
using MIPS_API.BL;
using MIPS_API.Helpers;
using MIPS_API.Models;
using nrdr13.acr.org.SSOService;
using System.Data;
using System.Dynamic;
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
                    TIN = Y.Field<string>("TIN"),
                    IS_GPRO = Y.Field<bool>("IS_GPRO"),
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
                    Physician_NPI = Y.Field<string>("npi"),
                    First_Name = Y.Field<string>("FirstName"),
                    Last_Name = Y.Field<string>("LastName"),
                    User_Name = Y.Field<string>("UserName"),
                    Records = Y.Field<string>("Records"),
                    Registered = Y.Field<string>("Registered"),
                    //userid = Y.Field<int>("UserId")
                }).ToArray());
            }
        }

        [HttpPost]
        [Route("CmsDashboardDetails")]
        public async Task<ActionResult> GetCmsSubmisisonDashBoardDetails(CmsDashboardRequest request)
        {
            int Role = 0;
            string Npi = string.Empty;
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
                data.IsSubmitToCMS = isyearstatus != null ? isyearstatus.isSubmittoCMS : false;
                data.Role = Role;
                data.IsGPRO = request.IsGpro != null ? (bool)request.IsGpro : true;
                data.dataList = CommonBL.GproTinsCMSSubmittedDetails(request.CMSYear, data.IsGPRO, Role, request.UserName, connectionString);

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
    }
}
