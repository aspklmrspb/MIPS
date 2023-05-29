namespace MIPS_API.Models
{
    public class GetFacilityTinsModel
    {
        public string UserName { get; set; }
    }

    public class FacilityTinsResult
    {
        public string TIN { get; set; }
        public bool IS_GPRO { get; set; }
        public string status { get; set; }
    }

    public class TinNPIResult
    {
        public string Physician_NPI { get; set; }
        //public int userid { get; set; }
        public string User_Name { get; set; }
        public string First_Name { get; set; }
        public string Last_Name { get; set; }
        public string Records { get; set; }
        public string Registered { get; set; }
    }
}
