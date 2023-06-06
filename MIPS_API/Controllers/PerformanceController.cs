using Azure.Core;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MIPS_API.BL;
using MIPS_API.Helpers;
using MIPS_API.Models;
using nrdr13.acr.org.SSOService;
using System.Data;
using System.Dynamic;

namespace MIPS_API.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class PerformanceController : ControllerBase
    {
        private readonly IConfiguration configuration;
        private readonly ILogger<PerformanceController> logger;
        private readonly string connectionString;

        public PerformanceController(IConfiguration appConfiguration, ILogger<PerformanceController> logger, SSOServiceSoap sSOServiceSoap)
        {
            this.configuration = appConfiguration;
            this.logger = logger;
            this.connectionString = appConfiguration.GetConnectionString("ExamAPIConnection");
        }

        [HttpGet]
        [Route("GetFacilityTINs")]
        public async Task<ActionResult> GetPerformanceTins(string UserName, string UserRole, string npi, int CMSYear)
        {
            DataTable data = new DataTable();
            dynamic model = new ExpandoObject();
            CMSYear = CMSYear != 0 ? CMSYear : CommonBL.GetActiveCMSYear(connectionString);
            try
            {
                if (UserRole.ToLower() == Constants.FacilityAdmin.ToLower()
               || (UserRole.ToLower() == Constants.RegistryAdmin.ToLower()
               || UserRole.ToLower() == Constants.FacilityUser.ToLower()

               || UserRole.ToLower() == Constants.SuperCorporateAdmin.ToLower()
               || UserRole.ToLower() == Constants.CorporateAdmin.ToLower()
               || UserRole.ToLower() == Constants.ServiceUser.ToLower())
               )
                {
                    data = await CommonBL.GetFacilityTinsAsync(UserName, connectionString);

                    model.facilitytins = data.AsEnumerable().Select(Y => new FacilityTinsResult()
                    {
                        tin = Y.Field<string>("TIN"),
                        isgpro = Y.Field<bool>("IS_GPRO"),
                        status = Y.Field<bool>("IS_GPRO") ? "( GPRO )" : ""
                    }).ToArray();
                }
                else
                {
                    if (UserRole.ToLower() == Constants.ACRinAdmin.ToLower())
                    {
                        data = await CommonBL.GetFacililtyTinsforAcrinAdmin(String.Empty, connectionString);
                    }
                    else
                    {
                        data = await CommonBL.GetFacililtyTinsforAcrinAdmin(npi, connectionString);
                    }

                    model.facilitytins = data.AsEnumerable().Select(Y => new FacilityTinsResult()
                    {
                        tin = Y.Field<string>("Tin"),
                        isgpro = CommonBL.GetTinGproStatus(Y.Field<string>("Tin"), connectionString),
                    }).ToArray();

                }
            }
            catch (Exception Ex)
            {

            }
           
            model.selectedyear = CMSYear;
            model.cmsyearlist = CommonBL.GetCMSYear(connectionString);
            
            return Ok(model);
        }

        [HttpPost]
        [Route("PerformanceReportTinData")]
        public async Task<ActionResult> PerformanceReportTinData(PerformanceTinsRequest request)
        {
            dynamic model = new ExpandoObject();
            try
            {
                var Tindata = await PerformanceReportBL.getFacilityPerformanceData(request.tin, request.cmsyear, connectionString);
                var NpiData = await PerformanceReportBL.getPhysicianPerformanceData(request.tin, request.npi, request.cmsyear, connectionString);
                model.PTinData = Tindata.Where(X => X.MeasuresScore == "P").ToArray();
                model.CTinData = Tindata.Where(X => X.MeasuresScore == "C").ToArray();
                model.NPIData = NpiData;
            }
            catch (Exception Ex)
            {

            }
            return Ok(model);
        }

    }
}
