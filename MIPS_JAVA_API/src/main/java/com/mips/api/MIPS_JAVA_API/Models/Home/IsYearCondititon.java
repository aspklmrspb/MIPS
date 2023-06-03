package com.mips.api.MIPS_JAVA_API.Models.Home;

public class IsYearCondititon {

	public IsYearCondititon(Boolean isSubmittoCMS, Boolean isActiveYear) {
		super();
		this.isSubmittoCMS = isSubmittoCMS;
		this.isActiveYear = isActiveYear;
	}
	public IsYearCondititon() {
	}
	
	public Boolean isSubmittoCMS;
    public Boolean isActiveYear;
	public Boolean getIsSubmittoCMS() {
		return isSubmittoCMS;
	}
	public void setIsSubmittoCMS(Boolean isSubmittoCMS) {
		this.isSubmittoCMS = isSubmittoCMS;
	}
	public Boolean getIsActiveYear() {
		return isActiveYear;
	}
	public void setIsActiveYear(Boolean isActiveYear) {
		this.isActiveYear = isActiveYear;
	}

}
