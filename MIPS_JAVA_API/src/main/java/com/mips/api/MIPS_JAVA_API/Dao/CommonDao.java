package com.mips.api.MIPS_JAVA_API.Dao;

import java.sql.*;
import java.util.ArrayList;

import com.mips.api.MIPS_JAVA_API.Common.DbConnector;
import com.mips.api.MIPS_JAVA_API.Models.Home.CMSSubmitTinCount;
import com.mips.api.MIPS_JAVA_API.Models.Home.GproTinStatus;
import com.mips.api.MIPS_JAVA_API.Models.Home.IsYearCondititon;

public class CommonDao {
	
	public static IsYearCondititon ChecCheckCMSYearStatus(int cmsYear) {
		var isYearCondition = new IsYearCondititon(false,false);
		
        try (Connection connection = DbConnector.getConnection()){
                String query = "SELECT COUNT(*) FROM tbl_Lookup_Active_Submission_Year WHERE IsActive = 1 AND Submission_Year = ?";
                String query2 = "SELECT COUNT(*) FROM tbl_Lookup_Active_Submission_Year WHERE IsActive = 1 AND Submission_Year = ? AND IsSubmittoCMS = 1";

                try (PreparedStatement command = connection.prepareStatement(query);
                     PreparedStatement command2 = connection.prepareStatement(query2)) {

                    command.setInt(1, cmsYear);
                    command2.setInt(1, cmsYear);

                    ResultSet resultSet = command.executeQuery();
                    if (resultSet.next()) {
                        isYearCondition.setIsActiveYear(resultSet.getInt(1) > 0);
                    }

                    ResultSet resultSet2 = command2.executeQuery();
                    if (resultSet2.next()) {
                        isYearCondition.setIsSubmittoCMS(resultSet2.getInt(1) > 0);
                    }
                }catch(Exception Ex) {
                	throw new Exception("Error in data processing");
                }
            }catch(Exception Ex) {
        }
		return isYearCondition;
	}

	public static CMSSubmitTinCount CMSSubmittedTinsCount(int cMSYear, String userName, int role) {

		CMSSubmitTinCount data = new CMSSubmitTinCount();
		
		String storedProcedure = "{call SPGetSubmittoCMSTinsCount(?,?,?,?)}";
        try (Connection connection = DbConnector.getConnection();
                CallableStatement statement = connection.prepareCall(storedProcedure)){
            
            
            statement.setInt(1, cMSYear);
            statement.setString(2, userName);
            statement.setInt(3, role);
            statement.setString(4, null);

            ResultSet resultSet = statement.executeQuery();
            
            while (resultSet.next()) {
            	
            	data.submittednongprotins = resultSet.getInt("CMSSubmittedNonGproTins");
            	data.submittedgprotins = resultSet.getInt("CMSSubmittedGproTins");
            	data.totalgprotins = resultSet.getInt("TotalGproTins");
            	data.totalnongprotins = resultSet.getInt("TotalNonGproTins");
            	
            }
            
            data.gprotincount = data.totalgprotins - data.submittedgprotins;
            data.nongprotincount = data.totalnongprotins - data.submittednongprotins;
            
        }catch(Exception Ex) {
        	
        }    
		return data;
	}

	public static ArrayList<GproTinStatus> GproTinsCMSSubmittedDetails(int cMSYear, Boolean isgpro, int role,
			String userName) {
		ArrayList<GproTinStatus> data = new ArrayList<GproTinStatus>();

		String storedProcedure = "{call SPGetGPROCMSSubmittedTins(?,?,?,?)}";
        try (Connection connection = DbConnector.getConnection();
                CallableStatement statement = connection.prepareCall(storedProcedure)){
            
            
            statement.setInt(1, cMSYear);
            statement.setString(2, userName);
            statement.setInt(3, role);
            statement.setString(4, null);

            ResultSet resultSet = statement.executeQuery();
            
            if (isgpro)
            {
                while (resultSet.next()) {
                	data.add(new GproTinStatus(
                			resultSet.getString("TIN"),
                			resultSet.getString("IsQMSubmitted"),
                			resultSet.getString("IsIASubmitted"),
                			resultSet.getBigDecimal("QM_Score") != null ? String.format("%.2f", resultSet.getBigDecimal("QM_Score")) : null,
                			resultSet.getBigDecimal("QM_Score") != null ? String.format("%.2f", resultSet.getBigDecimal("QM_Score")) : null
                			));                	
                }
            }
            else
            {
                while (resultSet.next()) {
                	data.add(new GproTinStatus(
                			resultSet.getString("TIN"),
                			resultSet.getString("IsQMSubmitted") != "Yes" ? "No,Please review your current measure selections." : "Yes" ,
                			resultSet.getString("IsIASubmitted") != "Yes" ? "No,Please review your current measure selections." : "Yes"
                			));                	
                }
            }
            
            
        }catch(Exception Ex) {
        }    
        
		return data;
	}
}
