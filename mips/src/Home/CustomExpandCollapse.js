import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const CustomExpandCollapse = () => {
  return (
    <div style={{margin:'10px', border:'1px solid #5D737D'}}>
        <Accordion sx={{background:'#4a5b63', color:'#fff', flexDirection:'row-reverse',fontSize : '16px !important'}}>
        <AccordionSummary expandIcon={<AddIcon sx={{color:'#fff'}}/>} aria-controls="accordion-content" id="accordion-header">
            <Typography variant="h6">TIN : 000010080 (GPRO)</Typography>
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

export default CustomExpandCollapse;
