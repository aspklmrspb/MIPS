namespace MIPS_API.Models
{
    public class RecordsEnteredModel
    {
        public class ExamRecordsGridRequest
        {
            public string userrole { get; set; }
            public string username { get; set; }
            public int cmsyear { get; set; }
            public int page { get; set; }
            public int rowcount { get; set; }
            public string sortcolumn { get; set; }
            public string sortdirection { get; set; }
            public string searchtext { get; set; }
            public string tin { get; set; }
            public string npi { get; set; }
            public string measure { get; set; }
            public int patientage { get; set; }
            public string examuniqueid { get; set; }
            public string patientid { get; set; }
            public string patientsex { get; set; }
            public string cptcode { get; set; }
            public DateTime? startdate { get; set; }
            public DateTime? enddate { get; set; }
        }
        public class ExamRecordGridRespose
        {

        }
    }
}
