namespace MIPS_API.Models
{
    public class GproTinStatus
    {
        public string Tin { get; set; }
        public string Npi { get; set; }
        public string QM_Submission_Status { get; set; }
        public string IA_Submission_Status { get; set; }
        public string PI_Submission_Status { get; set; }
        public string QM_Score { get; set; }
        public string IA_Score { get; set; }

    }
    public class CMSSubmitTinCount
    {
        public int GproTinCount { get; set; }
        public int NonGproTinCount { get; set; }
        public int SubmittedGproTins { get; set; }
        public int TotalGproTins { get; set; }
        public int SubmittedNonGproTins { get; set; }
        public int TotalNonGproTins { get; set; }
        public int Role { get; set; }
        public bool IsSubmitToCMS { get; set; }
        public List<GproTinStatus> dataList { get; set; }
        public bool IsGPRO { get; set; }
    }
}
