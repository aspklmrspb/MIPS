import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const SubmissionDashboard = () => {
  return (
    <div style={{margin:'10px', border:'1px solid #5D737D'}}>
        <Accordion sx={{background:'#4a5b63', color:'#fff', flexDirection:'row-reverse'}}>
        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{color:'#fff'}}/>} aria-controls="accordion-content" id="accordion-header">
            <Typography variant="h6"> CMS Submission Dashboard</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{background:'#fff', color:'#666666'}}>
            <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel magna sed urna scelerisque sollicitudin.
            </Typography>
        </AccordionDetails>
        </Accordion>
    </div>
  );
};

export default SubmissionDashboard;
