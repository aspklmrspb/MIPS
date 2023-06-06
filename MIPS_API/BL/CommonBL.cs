using Microsoft.Extensions.Logging;
using MIPS_API.Models;
using System.Data;
using System.Data.SqlClient;
using System.Diagnostics;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory;

namespace MIPS_API.BL
{
    public static class CommonBL
    {
        public static async Task<DataTable> GetFacilityTinsAsync(string UserName, string ConnectionString)
        {
            DataTable dataTable = new DataTable();
            try
            {
                // Create and configure the SqlConnection
                using (SqlConnection connection = new SqlConnection(ConnectionString))
                {
                    connection.Open();

                    // Create the SqlCommand to execute the stored procedure
                    using (SqlCommand command = new SqlCommand("sp_getFacilityTIN_GPRO", connection))
                    {
                        command.CommandType = CommandType.StoredProcedure;
                        command.Parameters.AddWithValue("@FacilityUserName", UserName);

                        SqlDataAdapter adapter = new SqlDataAdapter(command);

                        adapter.Fill(dataTable);
                    }
                }
            }
            catch (Exception ex)
            {
                // Handle any errors
            }
            return dataTable;
        }
        public static IsYearCondititon CheckCMSYearStatus(int CMSYear, string connectionString)
        {

            var isYearCondititon = new IsYearCondititon();
            try
            {

                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();

                    string query = "SELECT COUNT(*) FROM tbl_Lookup_Active_Submission_Year WHERE IsActive = 1 AND Submission_Year = @Year";
                    string query2 = "SELECT COUNT(*) FROM tbl_Lookup_Active_Submission_Year WHERE IsActive = 1 AND Submission_Year = @Year AND IsSubmittoCMS= 1";

                    SqlCommand command = new SqlCommand(query, connection);
                    command.Parameters.AddWithValue("@Year", CMSYear);

                    SqlCommand command2 = new SqlCommand(query2, connection);
                    command2.Parameters.AddWithValue("@Year", CMSYear); // Replace with your actual condition value

                    isYearCondititon.isActiveYear = (int)command.ExecuteScalar() > 0;
                    isYearCondititon.isSubmittoCMS = (int)command2.ExecuteScalar() > 0;

                }
            }
            catch (Exception ex)
            {
            }
            return isYearCondititon;
        }
        public static CMSSubmitTinCount CMSSubmittedTinsCount(int? CMSYear, string UserName, int Role, string ConnectionString)
        {
            var count = new List<int>();
            var data = new CMSSubmitTinCount();
            try
            {
                DataTable dataTable = new DataTable();
                // Create and configure the SqlConnection
                using (SqlConnection connection = new SqlConnection(ConnectionString))
                {
                    connection.Open();

                    // Create the SqlCommand to execute the stored procedure
                    using (SqlCommand command = new SqlCommand("SPGetSubmittoCMSTinsCount", connection))
                    {
                        command.CommandType = CommandType.StoredProcedure;
                        command.Parameters.AddWithValue("@CMSYear", CMSYear);
                        command.Parameters.AddWithValue("@FaciliyUserName", UserName);
                        command.Parameters.AddWithValue("@UserRole", Role);
                        command.Parameters.AddWithValue("@NPI", string.Empty);

                        SqlDataAdapter adapter = new SqlDataAdapter(command);

                        adapter.Fill(dataTable);
                    }
                }
                ///TotalGproTins	CMSSubmittedGproTins	TotalNonGproTins	CMSSubmittedNonGproTins

                data = dataTable.AsEnumerable().Select(Y => new CMSSubmitTinCount()
                {
                    submittednongprotins = Y.Field<int>("CMSSubmittedNonGproTins"),
                    submittedgprotins = Y.Field<int>("CMSSubmittedGproTins"),
                    totalgprotins = Y.Field<int>("TotalGproTins"),
                    totalnongprotins = Y.Field<int>("TotalNonGproTins"),
                }).FirstOrDefault();

                data.gprotincount = data.totalgprotins - data.submittedgprotins;
                data.nongprotincount = data.totalnongprotins - data.submittednongprotins;
            }
            catch (Exception ex)
            {
            }
            return data;
        }
        public static List<GproTinStatus> GproTinsCMSSubmittedDetails(int? CMSYear, bool isGpro, int Role, string UserName, string ConnectionString)
        {
            var count = new List<int>();
            var data = new List<GproTinStatus>();
            DataTable dataTable = new DataTable();
            try
            {
                // Create and configure the SqlConnection
                using (SqlConnection connection = new SqlConnection(ConnectionString))
                {
                    connection.Open();

                    // Create the SqlCommand to execute the stored procedure
                    using (SqlCommand command = new SqlCommand("SPGetGPROCMSSubmittedTins", connection))
                    {
                        command.CommandType = CommandType.StoredProcedure;
                        command.Parameters.AddWithValue("@CMSYear", CMSYear);
                        command.Parameters.AddWithValue("@FaciliyUserName", UserName);
                        command.Parameters.AddWithValue("@UserRole", Role);
                        command.Parameters.AddWithValue("@NPI", string.Empty);

                        SqlDataAdapter adapter = new SqlDataAdapter(command);

                        adapter.Fill(dataTable);
                    }
                }
                if (isGpro)
                {
                    data = dataTable.AsEnumerable().Select(Y => new GproTinStatus() {
                        tin = Y.Field<string>("TIN"),
                        qm_score = Y.Field<decimal?>("QM_Score") != null ? Math.Round(Y.Field<decimal>("QM_Score"), 2).ToString() : "0.00",
                        qm_submission_status = Y.Field<string>("IsQMSubmitted"),
                        ia_score = Y.Field<decimal?>("IA_Score") != null ? Math.Round(Y.Field<decimal>("IA_Score"), 2).ToString() : "0.00",
                        ia_submission_status = Y.Field<string>("IsIASubmitted")
                    }).ToList();
                }
                else
                {
                    data = dataTable.AsEnumerable().Select(Y => new GproTinStatus()
                    {
                        tin = Y.Field<string>("TIN"),
                        qm_submission_status = Y.Field<string>("IsQMSubmitted").ToString() != "Yes" ? "No,Please review your current measure selections." : "Yes" ,
                        ia_submission_status = Y.Field<string>("IsIASubmitted").ToString() != "Yes" ? "No,Please review your current measure selections." : "Yes"
                    }).ToList();
                }
            }
            catch (Exception ex)
            {
            }
            return data;
        }
        public static List<int> GetCMSYear(string connectionString)
        {
            List<int> CMSYears = new List<int>();
            var dataTable = new DataTable();
            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();

                    string query = "select distinct Submission_Year from tbl_Lookup_Active_Submission_Year";

                    SqlCommand command = new SqlCommand(query, connection);

                    SqlDataAdapter adapter = new SqlDataAdapter(command);

                    adapter.Fill(dataTable);
                }
                CMSYears = dataTable.AsEnumerable().Select(Y => Y.Field<int>("Submission_Year")).ToList();
            }
            catch (Exception Ex)
            {

            }
            return CMSYears;
        }
        public static int GetActiveCMSYear(string connectionString)
        {
            int CMSYear = 0;
            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();

                    string query = "select top 1 Submission_Year from tbl_Lookup_Active_Submission_Year where IsActive = 1";
                    SqlCommand command = new SqlCommand(query, connection);
                    CMSYear = (int)command.ExecuteScalar();

                }
            }
            catch (Exception Ex)
            {

            }
            return CMSYear;
        }
        public static string checkNPIValidity(string NPI)
        {
            string num = "";
            if (NPI.Length == 10)
            {
                for (int i = 0; i < 10; i++)
                {
                    num = num + NPI[i];
                }
            }
            return num;
        }
        public static int getUserIdfromNPI(string NPI, string connectionString)
        {
            int UserId = 0;
            try
            {

                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();

                    string query = "select TOP 1 UserID from tbl_Users where NPI = @NPI";
                    SqlCommand command = new SqlCommand(query, connection);
                    command.Parameters.AddWithValue("@NPI", NPI);

                    UserId = (int)command.ExecuteScalar();

                }
            }
            catch (Exception ex)
            {
            }

            return UserId;
        }
        public static async Task<DataTable> GetFacililtyTinsforAcrinAdmin(string npi, string ConnectionString)
        {
            DataTable dt = new DataTable();
            try
            {
                // Create and configure the SqlConnection
                using (SqlConnection connection = new SqlConnection(ConnectionString))
                {
                    connection.Open();

                    // Create the SqlCommand to execute the stored procedure
                    using (SqlCommand command = new SqlCommand("SPGetNpisofTin_VW", connection))
                    {
                        command.Parameters.AddWithValue("@NPI", npi);

                        SqlDataAdapter adapter = new SqlDataAdapter(command);

                        adapter.Fill(dt);
                    }
                }
            }
            catch (Exception ex)
            {
            }

            return dt;
        }
        public static bool GetTinGproStatus(string TIN, string ConnectionString)
        {
            bool IsGpro = false;
            try
            {

                using (SqlConnection connection = new SqlConnection(ConnectionString))
                {
                    connection.Open();

                    string query = "select is_GPRO from tbl_TIN_GPRO where TIN = @TIN ";

                    SqlCommand command = new SqlCommand(query, connection);
                    command.Parameters.AddWithValue("@TIN", TIN);

                    IsGpro = (bool)command.ExecuteScalar();

                }
            }
            catch (Exception ex)
            {
            }
            return IsGpro;
        }

    }
}
