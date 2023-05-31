import axios from 'axios';

export const fetchCMSSubmissionRecordEntered = async (year, userName, gpro, role) => {
    try {
        debugger;
      const response = await axios.post(`https://localhost:7030/RecordEntered/CMSRecordsEnteredData`
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
