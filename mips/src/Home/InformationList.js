import React, { useEffect } from 'react';
import Box from '@mui/material/Box';

const InformationList = ({userRole , userName }) => {
  return (
    <Box component="div" className='contentcontnrPadng' style={{margin:'10px'}}>
        {
            userRole == "PhysicianUser" 
            &&
            <h2 className="fbold">
                <label >Dear &nbsp;</label> 
                <label >{userName}
                </label>,
            </h2>
        }
        {
            userRole != "PhysicianUser" 
            &&
            <h3>
                Name : {userName}
            </h3>
        }
        <p className="hPara">Welcome to the MIPS Participation Portal for the National Radiology Data Registry Qualified Clinical Data Registry</p>
        <div>
            <ul style={{marginLeft:'30px', marginBottom : '20px'}} className='myul-style'>
                <li>
                    Welcome to the MIPS Participation Portal for the National Radiology Data Registry Qualified Clinical Data Registry
                </li>
                <li>
                    By using the QCDR to participate in the MIPS program, radiologists can avoid a negative payment adjustment for not reporting and can potentially earn a positive payment incentive.
                </li>
                <li>
                    To satisfy MIPS requirements clinicians and groups <strong>can use the QCDR to report on three out of the 4 MIPS performance categories:</strong> Quality, Improvement Activities, and Promoting Interoperability if applicable. The fourth category, Cost, will be calculated by CMS using claims data and will not require data submission.
                </li>
                <li>
                    Radiologists can maximize their MIPS performance score by <strong>focusing on reporting quality measures and improvement activities.</strong> For Promoting Interoperability, reporting is optional for non-patient facing and hospital-based MIPS clinicians. The category will be “reweighted” to zero with those points added to the Quality category for a total weight of 75% for the total MIPS performance score.
                </li>
                <li>
                    <strong>22 QCDR quality measures</strong> spanning two NRDR data registries have been approved for inclusion in the QCDR, along with <strong>38 MIPS quality check measures.</strong> QCDR participants may report a combination of QCDR and MIPS measures in order to fulfill reporting requirements.
                </li>
                <li>
                    To fully meet the Quality performance category requirements, MIPS eligible clinicians or groups must submit to CMS 6 measures for at least 75% of the eligible provider’s applicable patient (all patients, not just Medicare) seen during the performance period. Of these measures, report on at least one outcome measure. If an outcome measure is not available report on a high priority measure.
                </li>
                <li>
                    To satisfy the Improvement Activities performance category under MIPS, <strong>groups with fewer than 15 participants and non-patient facing clinicians</strong> must attest to completing up to 2 activities (2 medium-weighted or 1 high-weighted) for a minimum of 90 days. Patient facing clinicians must attest to completing up to 4 activities (4 medium-weighted or 2 high-weighted). At least 50% of the clinicians in the group must complete the activity.
                </li>
                <li>
                    Report each quality measure <strong>for at least 75% of your applicable patients</strong> during the performance period. This includes both patients with Medicare or private payer coverage.
                </li>
            </ul>
        </div>
    </Box>
  );
};

export default InformationList;


