package com.mips.api.MIPS_JAVA_API.Models.Home;

public class TinNPIResult {
	public String  user_name ;
    public String  first_name ;
    public String  last_name ;
    public String  records ;
    public String  registered;

    public TinNPIResult(String physician_npi, String user_name, String first_name, String last_name, String records,
			String registered) {
		super();
		this.physician_npi = physician_npi;
		this.user_name = user_name;
		this.first_name = first_name;
		this.last_name = last_name;
		this.records = records;
		this.registered = registered;
	}
	public String  physician_npi;
    public String getPhysician_npi() {
		return physician_npi;
	}
	public void setPhysician_npi(String physician_npi) {
		this.physician_npi = physician_npi;
	}
	public String getUser_name() {
		return user_name;
	}
	public void setUser_name(String user_name) {
		this.user_name = user_name;
	}
	public String getFirst_name() {
		return first_name;
	}
	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}
	public String getLast_name() {
		return last_name;
	}
	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}
	public String getRecords() {
		return records;
	}
	public void setRecords(String records) {
		this.records = records;
	}
	public String getRegistered() {
		return registered;
	}
	public void setRegistered(String registered) {
		this.registered = registered;
	}
	public TinNPIResult() {
		super();
	} 

}
