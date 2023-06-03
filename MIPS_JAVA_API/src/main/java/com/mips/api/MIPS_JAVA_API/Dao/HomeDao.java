package com.mips.api.MIPS_JAVA_API.Dao;

import java.sql.*;
import java.util.ArrayList;

import com.mips.api.MIPS_JAVA_API.Common.DbConnector;
import com.mips.api.MIPS_JAVA_API.Models.Home.*;

public class HomeDao {
	
	public static ArrayList<FacilityTinsResult> GetFacilityManagedTins(String UserName) {

		ArrayList<FacilityTinsResult> data = new ArrayList<FacilityTinsResult>(); 
		
		String storedProcedure = "{call sp_getFacilityTIN_GPRO(?)}";
        try (Connection connection = DbConnector.getConnection();
                CallableStatement statement = connection.prepareCall(storedProcedure)){
            
            
            statement.setString(1, UserName);
            ResultSet resultSet = statement.executeQuery();
            
            while (resultSet.next()) {
            	data.add(new FacilityTinsResult(resultSet.getString("TIN"),resultSet.getBoolean("IS_GPRO"),resultSet.getBoolean("IS_GPRO") ? "( GPRO )" : "" ));
            }
            
        }catch(Exception Ex) {
        }    
		return data;
	}

	public static ArrayList<TinNPIResult> GetTinRelatedNPIs(String tIN, String userName) {
		ArrayList<TinNPIResult> data = new ArrayList<TinNPIResult>(); 
		
		String storedProcedure = "{call SPGetFacilityTinRelatedPhysicianDetails(?,?)}";
        try (Connection connection = DbConnector.getConnection();
                CallableStatement statement = connection.prepareCall(storedProcedure)){
            
            
            statement.setString(1, userName);
            statement.setString(2, tIN);
            
            ResultSet resultSet = statement.executeQuery();
            
            while (resultSet.next()) {
            	data.add(new TinNPIResult(
            			resultSet.getString("npi"),
            			resultSet.getString("FirstName"),
            			resultSet.getString("LastName"),
            			resultSet.getString("UserName"),
            			resultSet.getString("Records"),
            			resultSet.getString("Registered")	
            			));
            }
            
        }catch(Exception Ex) {
        }
        return data;
    }

	public static ArrayList<int[]> GetPhysicianNPIsandAttestedCount() {
		String storedProcedure = "{call GetPhysicianNPIsandAttestedCount()}";

		try (Connection connection = DbConnector.getConnection();
                CallableStatement statement = connection.prepareCall(storedProcedure)){
			
        	ArrayList<int[]> data = new ArrayList<int[]>();
			ResultSet resultSet = statement.executeQuery();
            
            while (resultSet.next()) {
                int[] item = new int[3];
                item[0] = resultSet.getInt("CMSYear");
                item[1] = resultSet.getInt("physicianNPIsCount");
                item[2] = resultSet.getInt("physiciansAttestedCount");
                
                data.add(item);
            }
			return data;            
        }catch(Exception Ex) {
        }    
		return null;
	}

	
	public static ArrayList<String[]> GetPhysicianDetailswithRegistrationStatus(
			PhysicianRegDetailsGridRequest request) {


		String storedProcedure = "{call PhysicianDetailswithRegistrationStatus(?,?)}";

		try (Connection connection = DbConnector.getConnection();
                CallableStatement statement = connection.prepareCall(storedProcedure)){
			
        	ArrayList<String[]> data = new ArrayList<String[]>();

            statement.setInt(1, request.categoryid);
            statement.setString(2, request.searchtext);

        	ResultSet resultSet = statement.executeQuery();
            
            while (resultSet.next()) {
            	data.add(new String[] {
            			resultSet.getString("FirstName"),
            			resultSet.getString("LastName"),
            			resultSet.getString("UserName"),
            			resultSet.getString("EMail_Address"),
            			resultSet.getString("Status"),
            	});
            }
			return data;            
        }catch(Exception Ex) {
        }    
		return null;
	}

	public static Object GetTinRelatedNPIsAsync(String tIN, String userName) {
		// TODO Auto-generated method stub
		return null;
	}
	
}
