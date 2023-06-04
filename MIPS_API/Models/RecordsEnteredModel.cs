using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;
using System.Text.Encodings.Web;

namespace MIPS_API.Models
{
    public class RecordsEnteredModel
    {
        public class ExamRecordsGridRequest
        {
            public string? userrole { get; set; }
            public string? username { get; set; }
            public int cmsyear { get; set; }
            public int page { get; set; }
            public int rowcount { get; set; }
            public string? sortcolumn { get; set; }
            public string? sortdirection { get; set; }
            public string? searchtext { get; set; }
            public string? tin { get; set; }
            public string? npi { get; set; }
            public string? measure { get; set; }
            public int patientage { get; set; }
            public string? examuniqueid { get; set; }
            public string? patientid { get; set; }
            public string? patientsex { get; set; }
            public string? cptcode { get; set; }
            public DateTime? startdate { get; set; }
            public DateTime? enddate { get; set; }
            public int UserId { get; set; }
        }

        public class ExamRecordGridRespose
        {
            public int exammesid { get; set; }
            public string tin { get; set; }
            public int mesid { get; set; }
            public string mesnum { get; set; }
            public string patientid { get; set; }
            public int? patientage { get; set; }
            public string gender { get; set; }
            public string uniqueexamid { get; set; }
            public DateTime? examdata { get; set; }
            public string cptcode { get; set; }
            public string numeratorcode { get; set; }
            public string statusdesc { get; set; }
            public string npi { get; set; }
            public DateTime? createdate { get; set; }
            public int? cmsYear { get; set; }
            public bool? isEncrypt { get; set; }
        }

    }
}
