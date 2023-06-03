package com.mips.api.MIPS_JAVA_API.Controller;

import java.util.*;
import org.springframework.web.bind.annotation.*;

import com.mips.api.MIPS_JAVA_API.Common.Constants;
import com.mips.api.MIPS_JAVA_API.Dao.*;
import com.mips.api.MIPS_JAVA_API.Models.Home.*;

@RestController
@CrossOrigin(origins = "${cors.origin}")
@RequestMapping("/Home")
public class HomeController {

	@GetMapping("/GetFacilityTINs")
	public ArrayList<FacilityTinsResult> GetFacilityManagedTins(@RequestParam("UserName")String UserName) {
		
		ArrayList<FacilityTinsResult> data = new ArrayList<FacilityTinsResult>(); 
		
		data = HomeDao.GetFacilityManagedTins(UserName);
		
        return data;
	}
	
	@GetMapping("/PhysicianRecordCounts")
	public ArrayList<TinNPIResult> GetTinRelatedNPIs(String TIN, String UserName)
    {
		ArrayList<TinNPIResult> data = new ArrayList<TinNPIResult>(); 
		
		data = HomeDao.GetTinRelatedNPIs(TIN, UserName);
		
       return data;
    }
	
	@PostMapping("/CmsDashboardDetails")
	public Map<String, Object> getCmsDashboardDetails(@RequestBody CmsDashboardRequest request) {
		 Map<String, Object> model = new HashMap<>();
		 
		 int Role = 0;
         
         try {
        	 if (request.UserRole.equals(Constants.ACRinAdmin))
             {
                 Role = 3;
             }
             else if (request.UserRole.equalsIgnoreCase(Constants.FacilityAdmin)
            || request.UserRole.equalsIgnoreCase(Constants.RegistryAdmin)
            || request.UserRole.equalsIgnoreCase(Constants.FacilityUser)

            || request.UserRole.equalsIgnoreCase(Constants.SuperCorporateAdmin)
            || request.UserRole.equalsIgnoreCase(Constants.CorporateAdmin)
            || request.UserRole.equalsIgnoreCase(Constants.ServiceUser))

             {
                 Role = 1;
             }
        	 var isyearstatus = CommonDao.ChecCheckCMSYearStatus(request.CMSYear);
        	 
        	 var data = CommonDao.CMSSubmittedTinsCount(request.CMSYear, request.UserName, Role);
        	 
        	 data.issubmittocms = isyearstatus != null ? isyearstatus.isSubmittoCMS : false;
             data.role = Role;
             data.isgpro = request.IsGpro != null ? (Boolean)request.IsGpro : true;

             data.datalist = CommonDao.GproTinsCMSSubmittedDetails(request.CMSYear, data.isgpro, Role, request.UserName);

             model.put("data", data);
             model.put("SelectedYear", request.CMSYear );
             model.put("isActiveYear", isyearstatus.isActiveYear);
             model.put("ISCMSSubmissionActive", isyearstatus.isSubmittoCMS != null ? (Boolean)isyearstatus.isSubmittoCMS : false );
         }catch(Exception Ex) {
         }
         
		 return model;
	}
	
	@GetMapping("/GetPhysicianNPIsandAttestedCount")
	public ArrayList<int[]> GetPhysicianNPIsandAttestedCountForAdminGrid() {
		ArrayList<int[]> data = HomeDao.GetPhysicianNPIsandAttestedCount();
		return data;
	}
	
	@PostMapping("/GetPhysicianDetailswithRegistrationStatus")
	public ArrayList<String[]> GetPhysicianDetailswithRegistrationStatus(@RequestBody PhysicianRegDetailsGridRequest request) {
		ArrayList<String[]> data = HomeDao.GetPhysicianDetailswithRegistrationStatus(request);
		return data;
	}
}
