import React, { useEffect } from 'react';
import InformationList from './InformationList';
import SubmissionDashboard from './SubmissionDashboard';
import AccordianExample from '../helpers/AccordianExample';
import Box from '@mui/material/Box';

const HomePage = ({isAuthenticated }) => {
  
  return (
    <div style={{marginTop: '5px'}} className='contentContr'>
      <InformationList userRole="PhysicianUser" userName="administrator_100210"/>
      <SubmissionDashboard />
      <Box sx={{margin:'10px'}}>
      <div id="treeMenu" className="">
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
      <AccordianExample />
    </div>
  );
};

export default HomePage;
