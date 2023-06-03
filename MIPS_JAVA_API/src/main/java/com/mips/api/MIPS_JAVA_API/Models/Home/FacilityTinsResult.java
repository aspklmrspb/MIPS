package com.mips.api.MIPS_JAVA_API.Models.Home;

public class FacilityTinsResult {
	
    public FacilityTinsResult(String tin, Boolean isgpro, String status) {
		this.tin = tin;
		this.isgpro = isgpro;
		this.status = status;
	}

	private String tin;
    public String getTin() {
		return tin;
	}

	public void setTin(String tin) {
		this.tin = tin;
	}

	public Boolean getIsgpro() {
		return isgpro;
	}

	public void setIsgpro(Boolean isgpro) {
		this.isgpro = isgpro;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	private Boolean isgpro;
    private String status;

    public FacilityTinsResult() {}
    
    
}