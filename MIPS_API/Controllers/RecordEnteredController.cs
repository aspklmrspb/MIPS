using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MIPS_API.BL;
using MIPS_API.Models;
using System.Dynamic;
using static MIPS_API.Models.RecordsEnteredModel;

namespace MIPS_API.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class RecordEnteredController : ControllerBase
    {
        [HttpPost]
        [Route("CMSRecordsEnteredData")]
        public async Task<ActionResult> GetCMSRecordEnteredDetails(ExamRecordsGridRequest request)
        {
            return Ok();
        }
    }
}
