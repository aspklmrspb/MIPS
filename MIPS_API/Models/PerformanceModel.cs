namespace MIPS_API.Models
{
    public class PerformanceTinsRequest
    {
        public int cmsyear { get; set; }
        public int userid { get; set; }
        public string? username { get; set; }
        public string? npi { get; set; }
        public string? tin { get;set; }
        public string? userrole { get; set; }
    }
    public class TinMeasureDataResponse
    {
        public string MesNum { get; set; }
        public string MesTitle { get; set; }
        public string NQSDomain { get; set; }
        public int? Initial_Patient_Population { get; set; }
        public int? Reporting_Denominator { get; set; }
        public int? Reporting_Numerator { get; set; }
        public int Perf_Denom { get; set; }
        public decimal? Performance_Numerator { get; set; }
        public int? Denom_Exclusions { get; set; }
        public int? Denom_Exception { get; set; }
        public int? Performance_NotMet { get; set; }
        public int? Performance_Met { get; set; }
        public int? Inverse_Measure { get; set; }
        public string Reporting_Rate { get; set; }
        public string Performance_Rate { get; set; }
        public string SelectedForCmsSubmission { get; set; }
        public string NPI { get; set; }
        public string physicianName { get; set; }
        public string MeasuresScore { get; set; }
        public bool? isPhysianGroupMeasure { get; set; }
        public string examTin { get; set; }
        public int cmsyear { get; set; }
        public string CmsMessage { get; set; }
        public bool? _IsGproTin { get; set; }
        public int? displayorder { get; set; }
        public string domainDescription { get; set; }
        public string Decile_Val { get; set; }
        public int? Stratum_Id { get; set; }
        public string stratum_name { get; set; }
        public string LastName { get; set; }
        public string FirstName { get; set; }
        public string PriorityName { get; set; }
        public DateTime? Createdon { get; set; }
    }

}
