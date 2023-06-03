import axios from 'axios';
import { BACKEND_API_URL} from '../appSettings';

export const fetchCMSSubmissionRecordEntered = async (year, userName, gpro, role) => {
    try {
        debugger;
      const response = await axios.post(`${BACKEND_API_URL}/RecordEntered/CMSRecordsEnteredData`
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
