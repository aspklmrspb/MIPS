package com.mips.api.MIPS_JAVA_API.Models.Home;

public class PhysicianRegDetailsGridRequest {

	public PhysicianRegDetailsGridRequest(int categoryid, String searchtext) {
		super();
		this.categoryid = categoryid;
		this.searchtext = searchtext;
	}
	public PhysicianRegDetailsGridRequest() {
	}

	public int categoryid;
	public int getCategoryid() {
		return categoryid;
	}
	public void setCategoryid(int categoryid) {
		this.categoryid = categoryid;
	}
	public String getSearchtext() {
		return searchtext;
	}
	public void setSearchtext(String searchtext) {
		this.searchtext = searchtext;
	}

	public String searchtext;
	
}
