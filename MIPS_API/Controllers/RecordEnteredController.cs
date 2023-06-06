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
    public class RecordEnteredController : ControllerBase
    {
        private readonly IConfiguration configuration;
        private readonly ILogger<RecordEnteredController> logger;
        private readonly string connectionString;

        public RecordEnteredController(IConfiguration appConfiguration, ILogger<RecordEnteredController> logger, SSOServiceSoap sSOServiceSoap)
        {
            this.configuration = appConfiguration;
            this.logger = logger;
            this.connectionString = appConfiguration.GetConnectionString("ExamAPIConnection");
        }

        [HttpPost]
        [Route("CMSRecordsEnteredData")]
        public async Task<ActionResult> GetCMSRecordEnteredDetails(ExamRecordsGridRequest request)
        {
            bool IsFacilityRole = true;
            dynamic model = new ExpandoObject();
            request.cmsyear = request.cmsyear != 0 ? request.cmsyear : CommonBL.GetActiveCMSYear(connectionString);
            if (request.userrole.ToLower() == Constants.ACRinAdmin.ToLower())
            {
                IsFacilityRole = false;
            }
            if (request.userrole.ToLower() != Constants.PhysicianUser.ToLower())
            {
                if (!string.IsNullOrEmpty(request.npi))
                {
                    request.npi = CommonBL.checkNPIValidity(request.npi);
                    request.UserId = CommonBL.getUserIdfromNPI(request.npi, connectionString);
                }
                else
                {
                    return BadRequest();
                }
            }
            var data = await RecordsEnteredBL.GetRecordsEnteredData(request, connectionString, IsFacilityRole);

            model.griddata = data.AsEnumerable().Select(Y => new String[]{
                Y.Field<int>("Exam_Id").ToString(),
                Y.Field<string>("Exam_TIN"),
                Y.Field<string>("Measure_num"),
                Y.Field<string>("Patient_ID"),
                Y.Field<decimal>("Patient_Age").ToString(),
                Y.Field<string>("Patient_Gender"),
                Y.Field<string>("Exam_Unique_ID"),
                Y.Field<DateTime>("Exam_Date").ToString(),
                Y.Field<string>("Denominator_proc_code"),
                Y.Field<string>("Numerator_Code"),
                Y.Field<string>("Status_Desc"),
                Y.Field<DateTime>("Created_Date").ToString(),
                Y.Field<string>("DataSource"),
                Y.Field<int>("CMS_Submission_Year").ToString(),
                ""

            }).ToArray();
            model.selectedyear = request.cmsyear;
            model.cmsyears = CommonBL.GetCMSYear(connectionString);
            return Ok(model);
        }
    }
}
