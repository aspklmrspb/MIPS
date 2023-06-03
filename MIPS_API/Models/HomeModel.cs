namespace MIPS_API.Models
{
    public class GetFacilityTinsModel
    {
        public string UserName { get; set; }
    }

    public class FacilityTinsResult
    {
        public string tin { get; set; }
        public bool isgpro { get; set; }
        public string status { get; set; }
    }

    public class TinNPIResult
    {
        public string physician_npi { get; set; }
        //public int userid { get; set; }
        public string user_name { get; set; }
        public string first_name { get; set; }
        public string last_name { get; set; }
        public string records { get; set; }
        public string registered { get; set; }
    }

    public class CmsDashboardRequest
    {
        public string UserRole { get; set; }
        public string UserName { get; set; }
        public bool IsGpro { get; set; }
        public int CMSYear { get; set; }
    }

    public class IsYearCondititon
    {
        public bool isSubmittoCMS { get; set; }
        public bool isActiveYear { get; set; }
    }

    public class PhysicianNPIsandAttestedResultGrid
    {
        public int CMSYear { get; set; }
        public int AttestedCount { get; set; }
        public int PhysicianNPIsCount { get; set; }
    }

    public class PhysicianRegDetailsGridRequest
    {
        public int categoryid { get; set; }
        public string searchtext { get; set; }
    }
}
