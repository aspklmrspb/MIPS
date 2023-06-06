import React, { useState, useEffect } from 'react';
import InformationList from './InformationList';
import SubmissionDashboard from './SubmissionDashboard';
import HomePageAccoridanHelper from './HomePageAccordianHelper';
import Box from '@mui/material/Box';
import { fetchUserTinData, fetchUserTINNpiData, fetchNPIsandNPIsAttestedCount } from '../API/HomeAPI';
import FullFeaturedTable from '../helpers/FullFeaturedTable';
import PhysicianRegistrationResult from './PhysicianRegistrationDetails';

const HomePage = ({ isAuthenticated, userName, userRole }) => {
  const [tinData, setTinData] = useState([]);
  const [NPIAttestedData, setNPIAttestedData] = useState([]);

  async function fetchData() {
    // You can await here
    if (userRole === "FacilityUser") {
      const response = await fetchUserTinData(userName);
      setTinData(response);

    } else if (userRole === "AcrinAdmin") {
      const npigridresponse = await fetchNPIsandNPIsAttestedCount();
      setNPIAttestedData(npigridresponse);
    }


    // ...
  }
  async function expandCallbackFunction(tin) {
    const response = await fetchUserTINNpiData(tin, userName);
    return response;
  }

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div style={{ marginTop: '5px' }} className='contentContr'>
      <InformationList userRole={userRole} userName={userName} />
      <SubmissionDashboard />
      <Box sx={{ margin: '10px' }}>
        <div id="treeMenu" style={{ margin: '30px 0px' }}>
          <ul>
            <li>
              <label className="parentxt ui-dialog-titlebar ui-widget-header ui-corner-top hmeHead">
                Available Measures
              </label>
            </li>
          </ul>
          <div className="myh3style">
            <h3>MIPS Measures Supported: Table 1</h3>
            <a href="https://www.acr.org/-/media/ACR/Files/Registries/QCDR/2022-MIPS-Measures-Supported.pdf?la=en" rel="noopener noreferrer" target="_blank">2023 MIPS Measures Supported</a>
            <h3>Non-MIPS Measures Supported: Table 2</h3>
            <a href="https://www.acr.org/-/media/ACR/Files/Registries/QCDR/2022-QCDR-Measures-Supported.pdf?la=en" rel="noopener noreferrer" target="_blank">2023 Non-MIPS QCDR Measures Supported</a>
          </div>
        </div>
      </Box>
      <div>
        {
          userRole === "FacilityUser"
          &&
          tinData.map((row) => {
            return <HomePageAccoridanHelper dataRow={row} key={`tin-${row.tin}-${row.IS_GPRO}`} expandFunction={expandCallbackFunction} />
          })
        }
        {
          userRole === "AcrinAdmin"
          &&
          <>
            <FullFeaturedTable
              title="Physician NPI and Attested History"
              ShowSearchBtn={false}
              showDownloadBtn={false}
              showViewColumnBtn={false}
              showFilterBtn={false}
              RowData={NPIAttestedData}
              ColumnData={["CMS Year", "Physician NPI Count", "Physician Attested Count"]}
              responsive="standard"
            />
            <PhysicianRegistrationResult />
          </>
        }
      </div>
    </div>
  );
};

export default HomePage;
