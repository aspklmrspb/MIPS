package com.mips.api.MIPS_JAVA_API.Models.Home;

public class GproTinStatus {

	public GproTinStatus(String tin, String qm_submission_status, String ia_submission_status, String qm_score,
			String ia_score) {
		super();
		this.tin = tin;
		this.qm_submission_status = qm_submission_status;
		this.ia_submission_status = ia_submission_status;
		this.qm_score = qm_score;
		this.ia_score = ia_score;
	}
	public GproTinStatus() {
		// TODO Auto-generated constructor stub
	}
	
	public String tin ;
    public GproTinStatus(String tin, String qm_submission_status, String ia_submission_status) {
		super();
		this.tin = tin;
		this.qm_submission_status = qm_submission_status;
		this.ia_submission_status = ia_submission_status;
	}
	public String getTin() {
		return tin;
	}
	public void setTin(String tin) {
		this.tin = tin;
	}
	public String getNpi() {
		return npi;
	}
	public void setNpi(String npi) {
		this.npi = npi;
	}
	public String getQm_submission_status() {
		return qm_submission_status;
	}
	public void setQm_submission_status(String qm_submission_status) {
		this.qm_submission_status = qm_submission_status;
	}
	public String getIa_submission_status() {
		return ia_submission_status;
	}
	public void setIa_submission_status(String ia_submission_status) {
		this.ia_submission_status = ia_submission_status;
	}
	public String getPi_submission_status() {
		return pi_submission_status;
	}
	public void setPi_submission_status(String pi_submission_status) {
		this.pi_submission_status = pi_submission_status;
	}
	public String getQm_score() {
		return qm_score;
	}
	public void setQm_score(String qm_score) {
		this.qm_score = qm_score;
	}
	public String getIa_score() {
		return ia_score;
	}
	public void setIa_score(String ia_score) {
		this.ia_score = ia_score;
	}

	public String npi ;
    public String qm_submission_status ;
    public String ia_submission_status ;
    public String pi_submission_status ;
    public String qm_score ;
    public String ia_score ;
}
