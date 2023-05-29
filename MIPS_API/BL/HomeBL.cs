using System.Data.SqlClient;
using System.Data;

namespace MIPS_API.BL
{
    public static class HomeBL
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

        public static async Task<DataTable> GetTinRelatedNPIsAsync(string TIN,string UserName, string ConnectionString)
        {
            DataTable dataTable = new DataTable();
            try
            {
                // Create and configure the SqlConnection
                using (SqlConnection connection = new SqlConnection(ConnectionString))
                {
                    connection.Open();

                    // Create the SqlCommand to execute the stored procedure
                    using (SqlCommand command = new SqlCommand("SPGetFacilityTinRelatedPhysicianDetails", connection))
                    {
                        command.CommandType = CommandType.StoredProcedure;
                        command.Parameters.AddWithValue("@Username", UserName);
                        command.Parameters.AddWithValue("@TIN", TIN);

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
    }
}
