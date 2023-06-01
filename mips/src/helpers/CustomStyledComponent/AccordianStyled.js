
import MuiAccordion from '@mui/material/Accordion';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import { styled } from '@mui/material/styles';
import MuiAccordionDetails from '@mui/material/AccordionDetails';

export const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `0`,
  borderRadius : '3px',
  margin : '0px 10px 5px'
}));

export const AccordionSummary = styled((props) => (
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
  
  export const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: '0',
    borderTop: '1px solid rgba(0, 0, 0, .125)',
  }));