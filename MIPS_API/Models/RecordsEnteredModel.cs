namespace MIPS_API.Models
{
    public class RecordsEnteredModel
    {
        public class ExamRecordsGridRequest
        {
            public string UserRole { get; set; }
            public string UserName { get; set; }
            public bool IsGpro { get; set; }
            public int CMSYear { get; set; }
        }
        public class ExamRecordGridRespose
        {

        }
    }
}
