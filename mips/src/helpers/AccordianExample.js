import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import CustomTable from './CustomTable';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid #5D737D`,
  borderRadius : '3px',
  margin : '0px 10px 5px'
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem',color:'#fff' }} />}
    {...props}
  />
))(({ theme }) => ({
  background:'linear-gradient(to bottom, rgba(120,142,151,1) 0%,rgba(74,92,101,1) 100%)',
  color:'#fff',
  flexDirection: 'row-reverse',
  minHeight:'34px',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    margin:'0px 15px'
  },
  '&:hover': {
    background: 'linear-gradient(to bottom, rgba(93,115,125,1) 0%,rgba(51,67,74,1) 100%)', // Set the hover background color
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: '0',
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('');
  const [data, setData] = React.useState(["Physician NPI","User Name","First Name","Last Name","Records","Registered"]);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div style={{margin:'30px 0 15px'}}>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Collapsible Group Item #1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}