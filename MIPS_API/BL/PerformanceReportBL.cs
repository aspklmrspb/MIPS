using MIPS_API.Models;
using System.Data;
using System.Data.SqlClient;

namespace MIPS_API.BL
{
    public class PerformanceReportBL
    {
        public static async Task<List<TinMeasureDataResponse>> getFacilityPerformanceData(string? TIN,int CMSYear,string ConnectionString, bool Is90days = false, bool? GPRO = null)
        {
            DataTable dt =  new DataTable();
            List<TinMeasureDataResponse> resultData = new List<TinMeasureDataResponse>();

            try
            {
                using (SqlConnection connection = new SqlConnection(ConnectionString))
                {
                    connection.Open();

                    // Create the SqlCommand to execute the stored procedure
                    using (SqlCommand command = new SqlCommand("SPgetFacilityPerformanceData", connection))
                    {
                        command.CommandType = CommandType.StoredProcedure;
                        command.Parameters.AddWithValue("@TIN", TIN);
                        command.Parameters.AddWithValue("@CMSYear", CMSYear);
                        command.Parameters.AddWithValue("@Is90days", Is90days);
                        command.Parameters.AddWithValue("@GPRO", GPRO);


                        SqlDataAdapter adapter = new SqlDataAdapter(command);

                        adapter.Fill(dt);
                        resultData = dt.AsEnumerable().Select(Y => new TinMeasureDataResponse()
                        {
                            examTin = Y.Field<string>("Exam_TIN"),
                            cmsyear = Y.Field<int?>("CMSYear").GetValueOrDefault(),
                            MesNum = Y.Field<string>("Measure_num"),
                            MeasuresScore = Y.Field<string>("Measure_Scoring"),
                            MesTitle = Y.Field<string>("Measure_Title"),
                            Initial_Patient_Population = Y.Field<int?>("Init_Patient_Population").GetValueOrDefault(),
                            Denom_Exception = Y.Field<int?>("Denominator_Exceptions").GetValueOrDefault(),
                            Denom_Exclusions = Y.Field<int?>("Denominator_Exclusions").GetValueOrDefault(),
                            Perf_Denom = Y.Field<int?>("Performance_Denominator").GetValueOrDefault(),
                            Performance_Numerator = Y.Field<decimal>("Performance_Numerator"),
                            Reporting_Denominator = Y.Field<int>("Reporting_Denominator"),
                            Reporting_Numerator = Y.Field<int?>("Reporting_Numerator").GetValueOrDefault(),
                            Performance_NotMet = Y.Field<int?>("Performance_Not_Met").GetValueOrDefault(),
                            Performance_Rate = Y.Field<decimal>("Performance_Rate") + "%",

                            Reporting_Rate = Y.Field<decimal>("Reporting_Rate") + "%",
                            SelectedForCmsSubmission = Y.Field<string>("SelectedForCmsSubmission"),
                            CmsMessage = Y.Field<string>("CMS_Message"),
                            _IsGproTin = Y.Field<bool?>("GPRO").GetValueOrDefault(),
                            displayorder = Y.Field<int?>("DisplayOrder").GetValueOrDefault(),
                            domainDescription = Y.Field<string>("NQS_Domain_Desc"),

                            isPhysianGroupMeasure = Y.Field<bool>("PhysGroupMeasure"),
                            Decile_Val = Y.Field<string>("Decile_Val"),
                            Stratum_Id = Y.Field<int?>("Stratum_Id").GetValueOrDefault(),
                            stratum_name = Y.Field<string>("Stratum_Name"),
                            PriorityName = Y.Field<string>("Priority_Name"),

                        }).ToList();

                    }
                }
            }
            catch(Exception Ex)
            {

            }
            return resultData;
        }

        public static async Task<List<TinMeasureDataResponse>> getPhysicianPerformanceData(string TIN,string NPI, int CMSYear, string ConnectionString, bool Is90days = false, bool? GPRO = null)
        {
            DataTable dt = new DataTable();
            List<TinMeasureDataResponse> resultData = new List<TinMeasureDataResponse>();

            try
            {
                using (SqlConnection connection = new SqlConnection(ConnectionString))
                {
                    connection.Open();

                    // Create the SqlCommand to execute the stored procedure
                    using (SqlCommand command = new SqlCommand("SPgetPhysicianPerformanceData", connection))
                    {
                        command.CommandType = CommandType.StoredProcedure;
                        command.Parameters.AddWithValue("@TIN", TIN);
                        command.Parameters.AddWithValue("@NPI", "");
                        command.Parameters.AddWithValue("@CMSYear", CMSYear);
                        command.Parameters.AddWithValue("@Is90days", Is90days);
                        command.Parameters.AddWithValue("@GPRO", GPRO);

                        SqlDataAdapter adapter = new SqlDataAdapter(command);

                        adapter.Fill(dt);
                        resultData = dt.AsEnumerable().Select(Y => new TinMeasureDataResponse()
                        {
                            NPI = Y.Field<string>("Physician_NPI"),
                            physicianName = Y.Field<string>("PhysicianName"),
                            cmsyear = Y.Field<int?>("CMS_Submission_Year").GetValueOrDefault(),
                            examTin = Y.Field<string>("Exam_TIN"),
                            MesNum = Y.Field<string>("Measure_num"),
                            MeasuresScore = Y.Field<string>("Measure_Scoring"),
                            Initial_Patient_Population = Y.Field<int?>("Init_Patient_Population").GetValueOrDefault(),
                            Denom_Exception = Y.Field<int?>("Denominator_Exceptions").GetValueOrDefault(),
                            Denom_Exclusions = Y.Field<int?>("Denominator_Exclusions").GetValueOrDefault(),
                            Perf_Denom = Y.Field<int?>("Performance_Denominator").GetValueOrDefault(),
                            Performance_Numerator = Y.Field<decimal>("Performance_Numerator"),
                            Reporting_Denominator = Y.Field<int?>("Reporting_Denominator").GetValueOrDefault(),
                            Reporting_Numerator = Y.Field<int?>("Reporting_Numerator").GetValueOrDefault(),
                            Performance_NotMet = Y.Field<int?>("Performance_Not_Met").GetValueOrDefault(),
                            Performance_Rate = Y.Field<decimal>("Performance_Rate") + "%",
                            Reporting_Rate = Y.Field<decimal>("Reporting_Rate") + "%",
                            SelectedForCmsSubmission = Y.Field<string>("SelectedForCmsSubmission"),
                            isPhysianGroupMeasure = Y.Field<bool>("PhysGroupMeasure"),
                            Decile_Val = Y.Field<string>("Decile_Val"),
                            Stratum_Id = Y.Field<int?>("Stratum_Id").GetValueOrDefault(),
                            stratum_name = Y.Field<string>("Stratum_Name"),
                            displayorder = Y.Field<int?>("DisplayOrder").GetValueOrDefault(),

                        }).ToList();

                    }
                }
            }
            catch (Exception Ex)
            {

            }
            return resultData;
        }
        public static List<string> getRegistryPerformanceData()
        {
            return null;
        }
    }
}
