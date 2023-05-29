using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MIPS_API.BL;
using MIPS_API.Models;
using nrdr13.acr.org.SSOService;
using System.Data;

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
    }
}
