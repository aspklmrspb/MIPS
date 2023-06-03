namespace MIPS_API.Models
{
    public class GproTinStatus
    {
        public string tin { get; set; }
        public string npi { get; set; }
        public string qm_submission_status { get; set; }
        public string ia_submission_status { get; set; }
        public string pi_submission_status { get; set; }
        public string qm_score { get; set; }
        public string ia_score { get; set; }

    }
    public class CMSSubmitTinCount
    {
        public int gprotincount { get; set; }
        public int nongprotincount { get; set; }
        public int submittedgprotins { get; set; }
        public int totalgprotins { get; set; }
        public int submittednongprotins { get; set; }
        public int totalnongprotins { get; set; }
        public int role { get; set; }
        public bool issubmittocms { get; set; }
        public List<GproTinStatus> datalist { get; set; }
        public bool isgpro { get; set; }
    }
}
