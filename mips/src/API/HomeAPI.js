import axios from 'axios';
import { BACKEND_API_URL} from '../appSettings';

export const fetchUserTinData = async (userName) => {
  try {
    const response = await axios.get(`${BACKEND_API_URL}/Home/GetFacilityTINs?UserName=${userName}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user tins:', error);
    throw error;
  }

};

export const fetchUserTINNpiData = async (tin, userName) => {
  try {
    const response = await axios.get(`${BACKEND_API_URL}/Home/PhysicianRecordCounts?TIN=${tin}&&UserName=${userName}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user tin npis:', error);
    throw error;
  }
}

export const fetchCMSSubmissionDashboardData = async (year, userName, gpro, role) => {
  try {
    const response = await axios.post(`${BACKEND_API_URL}/Home/CmsDashboardDetails`
      , {
        UserRole: role,
        UserName: userName,
        IsGpro: gpro == "true" ? true : false,
        CMSYear: year
      });
    return response.data;
  } catch (error) {
    console.error('Error fetching user tin npis:', error);
    throw error;
  }
}

export const fetchNPIsandNPIsAttestedCount = async (userName) => {
  try {
    const response = await axios.get(`${BACKEND_API_URL}/Home/GetPhysicianNPIsandAttestedCount`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user tins:', error);
    throw error;
  }

};

export const fetchPhysicianRegistrationDetails = async(CatId, text) => {
  try {
    const response = await axios.post(`${BACKEND_API_URL}/Home/GetPhysicianDetailswithRegistrationStatus`,{
      "categoryid" : parseInt(CatId),
      "searchtext" : text
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching user tins:', error);
    throw error;
  }
}