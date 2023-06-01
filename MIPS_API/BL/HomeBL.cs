using System.Data.SqlClient;
using System.Data;
using MIPS_API.Models;

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

        public static async Task<List<int[]>> GetPhysicianNPIsandAttestedCount(string ConnectionString)
        {
            List<int[]> data = new List<int[]>();
            try
            {
                // Create and configure the SqlConnection
                using (SqlConnection connection = new SqlConnection(ConnectionString))
                {
                    connection.Open();

                    // Create the SqlCommand to execute the stored procedure
                    using (SqlCommand command = new SqlCommand("GetPhysicianNPIsandAttestedCount", connection))
                    {
                        command.CommandType = CommandType.StoredProcedure;

                        // Execute the command and read the data using SqlDataReader
                        using (SqlDataReader reader = await command.ExecuteReaderAsync())
                        {
                            while (reader.Read())
                            {
                                int[] item = new int[3];
                                item[0] = reader.GetInt32(reader.GetOrdinal("CMSYear"));
                                item[1] = reader.GetInt32(reader.GetOrdinal("physicianNPIsCount"));
                                item[2] = reader.GetInt32(reader.GetOrdinal("physiciansAttestedCount"));

                                data.Add(item);
                            }
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                // Handle any errors
            }

            return data;
        }

        public static async Task<DataTable> GetPhysicianDetailswithRegistrationStatus(int CategoryId, string SearchText, string ConnectionString)
        {
            DataTable dataTable = new DataTable();
            try
            {
                // Create and configure the SqlConnection
                using (SqlConnection connection = new SqlConnection(ConnectionString))
                {
                    connection.Open();

                    // Create the SqlCommand to execute the stored procedure
                    using (SqlCommand command = new SqlCommand("PhysicianDetailswithRegistrationStatus", connection))
                    {
                        command.CommandType = CommandType.StoredProcedure;
                        command.Parameters.AddWithValue("@CategoryId", CategoryId);
                        command.Parameters.AddWithValue("@SearchText", SearchText);

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
