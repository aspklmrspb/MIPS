﻿namespace MIPS_API.Models
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
        public int CategoryId { get; set; }
        public string SearchText { get; set; }
    }
}
