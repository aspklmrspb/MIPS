import axios from 'axios';
import { BACKEND_API_URL } from '../appSettings';

export const fetchCMSSubmissionRecordEntered = async (filterData, userrole, userName, cmsyear) => {
  try {
    const response = await axios.post(`${BACKEND_API_URL}/RecordEntered/CMSRecordsEnteredData`
      , {
        userrole: userrole,
        username: userName,
        cmsyear: cmsyear,
        page: filterData.page,
        rowcount: filterData.noofRows,
        sortcolumn: filterData.sortcolumn,
        sortdirection: filterData.sortdirection,
        searchtext: filterData.searchtext,
        tin: filterData.tin,
        npi: filterData.physiciannpi,
        measure: filterData.measure,
        patientage: filterData.patientage,
        examuniqueid: filterData.examuniqueid,
        patientid: filterData.patientid,
        patientsex: filterData.patientsex,
        cptcode: filterData.cptcode,
        startdate: filterData.fromdate,
        enddate: filterData.todate

      });
    return response.data;
  } catch (error) {
    console.error('Error fetching user tin npis:', error);
    throw error;
  }
}
