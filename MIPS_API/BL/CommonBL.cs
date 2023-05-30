using Microsoft.Extensions.Logging;
using MIPS_API.Models;
using System.Data;
using System.Data.SqlClient;
using System.Diagnostics;

namespace MIPS_API.BL
{
    internal static class CommonBL
    {
        internal static IsYearCondititon CheckCMSYearStatus(int CMSYear, string connectionString)
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
        internal static CMSSubmitTinCount CMSSubmittedTinsCount(int? CMSYear, string UserName, int Role, string ConnectionString)
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
                    SubmittedNonGproTins = Y.Field<int>("CMSSubmittedNonGproTins"),
                    SubmittedGproTins = Y.Field<int>("CMSSubmittedGproTins"),
                    TotalGproTins = Y.Field<int>("TotalGproTins"),
                    TotalNonGproTins = Y.Field<int>("TotalNonGproTins"),
                }).FirstOrDefault();

                data.GproTinCount = data.TotalGproTins - data.SubmittedGproTins;
                data.NonGproTinCount = data.TotalNonGproTins - data.SubmittedNonGproTins;
            }
            catch (Exception ex)
            {
            }
            return data;
        }
        internal static List<GproTinStatus> GproTinsCMSSubmittedDetails(int? CMSYear, bool isGpro, int Role, string UserName, string ConnectionString)
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
                        Tin = Y.Field<string>("TIN"),
                        QM_Score = Y.Field<decimal?>("QM_Score") != null ? Math.Round(Y.Field<decimal>("QM_Score"), 2).ToString() : "0.00",
                        QM_Submission_Status = Y.Field<string>("IsQMSubmitted"),
                        IA_Score = Y.Field<decimal?>("IA_Score") != null ? Math.Round(Y.Field<decimal>("IA_Score"), 2).ToString() : "0.00",
                        IA_Submission_Status = Y.Field<string>("IsIASubmitted")
                    }).ToList();
                }
                else
                {
                    data = dataTable.AsEnumerable().Select(Y => new GproTinStatus()
                    {
                        Tin = Y.Field<string>("TIN"),
                        QM_Submission_Status = Y.Field<string>("IsQMSubmitted"),
                        IA_Submission_Status = Y.Field<string>("IsIASubmitted")
                    }).ToList();
                }
            }
            catch (Exception ex)
            {
            }
            return data;
        }

    }
}
