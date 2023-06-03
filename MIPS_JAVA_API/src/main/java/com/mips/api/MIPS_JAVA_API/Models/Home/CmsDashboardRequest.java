package com.mips.api.MIPS_JAVA_API.Models.Home;

public class CmsDashboardRequest {

	public CmsDashboardRequest(String userRole, String userName, Boolean isGpro, int cMSYear) {
		super();
		UserRole = userRole;
		UserName = userName;
		IsGpro = isGpro;
		CMSYear = cMSYear;
	}

	public String UserRole;

	public String UserName;
    
	public String getUserRole() {
		return UserRole;
	}

	public void setUserRole(String userRole) {
		UserRole = userRole;
	}

	public String getUserName() {
		return UserName;
	}

	public void setUserName(String userName) {
		UserName = userName;
	}

	public Boolean getIsGpro() {
		return IsGpro;
	}

	public void setIsGpro(Boolean isGpro) {
		IsGpro = isGpro;
	}

	public int getCMSYear() {
		return CMSYear;
	}

	public void setCMSYear(int cMSYear) {
		CMSYear = cMSYear;
	}

	public Boolean IsGpro;
    
	public int CMSYear;

	
	
}
