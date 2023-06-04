using MIPS_API.Models;
using System;
using System.Data;
using System.Data.SqlClient;
using System.Reflection.Emit;

namespace MIPS_API.BL
{
    internal static class RecordsEnteredBL
    {
        internal static async Task<DataTable> GetRecordsEnteredData(RecordsEnteredModel.ExamRecordsGridRequest request, string connectionString,bool isFacilityRole)
        {
            DataTable dataTable = new DataTable();
            int MeasureId = 0;
            try
            {
                if (!string.IsNullOrEmpty(request.measure))
                {
                    MeasureId = GetMasureId(request.measure, request.cmsyear, connectionString);
                }
                // Create and configure the SqlConnection
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();
                    using (SqlCommand command = new SqlCommand("spGetRecordsEnteredPageGridDetails", connection))
                    {
                        command.CommandType = CommandType.StoredProcedure;
                        command.Parameters.AddWithValue("@FacilityUserName", request.username);
                        command.Parameters.AddWithValue("@StartDate", null);
                        command.Parameters.AddWithValue("@EndDate", null);
                        command.Parameters.AddWithValue("@FacilityUserId", request.UserId);
                        command.Parameters.AddWithValue("@PageNo", request.page);
                        command.Parameters.AddWithValue("@PageLimit", request.rowcount);
                        command.Parameters.AddWithValue("@SortColumn", request.sortcolumn);
                        command.Parameters.AddWithValue("@SortDirection", request.sortdirection);
                        command.Parameters.AddWithValue("@ExamTin", request.tin);
                        command.Parameters.AddWithValue("@ExamNpi", request.npi);
                        command.Parameters.AddWithValue("@MeasureId", MeasureId);
                        command.Parameters.AddWithValue("@IsFacilityRole", isFacilityRole);
                        command.Parameters.AddWithValue("@Searchtext", request.searchtext);
                        command.Parameters.AddWithValue("@PatientAge", request.patientage);
                        command.Parameters.AddWithValue("@CPTCode", request.cptcode);
                        command.Parameters.AddWithValue("@PatientSex", request.patientsex);
                        command.Parameters.AddWithValue("@ExamUniqueId", request.examuniqueid);
                        command.Parameters.AddWithValue("@CMSYear", request.cmsyear);

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

        private static int GetMasureId(string mesnum,int cmsyear,string connectionString)
        {
            int MesId = 0;
            try
            {

                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();

                    string query = "select TOP 1 Measure_ID from tbl_Lookup_Measure where CMSYear = @Year and Measure_num = @Measure ";

                    SqlCommand command = new SqlCommand(query, connection);
                    command.Parameters.AddWithValue("@Year", cmsyear);
                    command.Parameters.AddWithValue("@Measure", mesnum);
                    MesId = (int)command.ExecuteScalar();

                }
            }
            catch (Exception ex)
            {
            }

            return MesId;
        }
    }
}
