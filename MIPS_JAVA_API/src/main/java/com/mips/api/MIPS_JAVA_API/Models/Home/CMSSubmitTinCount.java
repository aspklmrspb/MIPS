package com.mips.api.MIPS_JAVA_API.Models.Home;

import java.util.ArrayList;

public class CMSSubmitTinCount {

	public CMSSubmitTinCount(int gprotincount, int nongprotincount, int submittedgprotins, int totalgprotins,
			int submittednongprotins, int totalnongprotins, int role, Boolean issubmittocms,
			ArrayList<GproTinStatus> datalist, Boolean isgpro) {
		super();
		this.gprotincount = gprotincount;
		this.nongprotincount = nongprotincount;
		this.submittedgprotins = submittedgprotins;
		this.totalgprotins = totalgprotins;
		this.submittednongprotins = submittednongprotins;
		this.totalnongprotins = totalnongprotins;
		this.role = role;
		this.issubmittocms = issubmittocms;
		this.datalist = datalist;
		this.isgpro = isgpro;
	}
	public int getGprotincount() {
		return gprotincount;
	}
	public void setGprotincount(int gprotincount) {
		this.gprotincount = gprotincount;
	}
	public int getNongprotincount() {
		return nongprotincount;
	}
	public void setNongprotincount(int nongprotincount) {
		this.nongprotincount = nongprotincount;
	}
	public int getSubmittedgprotins() {
		return submittedgprotins;
	}
	public void setSubmittedgprotins(int submittedgprotins) {
		this.submittedgprotins = submittedgprotins;
	}
	public int getTotalgprotins() {
		return totalgprotins;
	}
	public void setTotalgprotins(int totalgprotins) {
		this.totalgprotins = totalgprotins;
	}
	public int getSubmittednongprotins() {
		return submittednongprotins;
	}
	public void setSubmittednongprotins(int submittednongprotins) {
		this.submittednongprotins = submittednongprotins;
	}
	public int getTotalnongprotins() {
		return totalnongprotins;
	}
	public void setTotalnongprotins(int totalnongprotins) {
		this.totalnongprotins = totalnongprotins;
	}
	public int getRole() {
		return role;
	}
	public void setRole(int role) {
		this.role = role;
	}
	public Boolean getIssubmittocms() {
		return issubmittocms;
	}
	public void setIssubmittocms(Boolean issubmittocms) {
		this.issubmittocms = issubmittocms;
	}
	public Boolean getIsgpro() {
		return isgpro;
	}
	public void setIsgpro(Boolean isgpro) {
		this.isgpro = isgpro;
	}
	public CMSSubmitTinCount() {
		// TODO Auto-generated constructor stub
	}
	
	public int gprotincount ;
    public int nongprotincount ;
    public int submittedgprotins ;
    public int totalgprotins ;
    public int submittednongprotins ;
    public int totalnongprotins ;
    public int role ;
    public Boolean issubmittocms ;
    public ArrayList<GproTinStatus> datalist ;
    
    public ArrayList<GproTinStatus> getDatalist() {
		return datalist;
	}
	public void setDatalist(ArrayList<GproTinStatus> datalist) {
		this.datalist = datalist;
	}

	public Boolean isgpro ;
}
