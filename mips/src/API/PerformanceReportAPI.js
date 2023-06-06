import axios from 'axios';
import { BACKEND_API_URL } from '../appSettings';

export const fetchPerformanceReportData = async (tin,npi, userrole, userName, cmsyear) => {
  try {
    const response = await axios.post(`${BACKEND_API_URL}/Performance/PerformanceReportTinData`
      , {
        userrole: userrole,
        username: userName,
        cmsyear: cmsyear,
        tin: tin,
        npi: npi,
      });
    return response.data;
  } catch (error) {
    console.error('Error fetching user tin npis:', error);
    throw error;
  }
}

export const fetchRecordsEnteredInitialData = async (UserName, UserRole, npi, cmsyear) => {
  try{
    const response = await axios.get(`${BACKEND_API_URL}/Performance/GetFacilityTINs?UserName=${UserName}&UserRole=${UserRole}&npi=${npi}&CMSYear=${cmsyear}`);
    return response.data;
  }catch(error){
    console.error('Error Mpis:', error);
    throw error;
  }
}
