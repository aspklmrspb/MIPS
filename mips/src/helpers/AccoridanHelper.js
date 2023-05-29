import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import CustomAccordianTable from './CustomAccordianTable';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `0`,
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

export default function AccoridanHelper(props) {
  const [expanded, setExpanded] = React.useState('');
  const [columnData, setColumnData] = React.useState([]);
  const [rowData, setRowData] = React.useState([]);

  const handleChange = (tin) => async (event, newExpanded) => {
    setExpanded(newExpanded ? tin : false);
    setColumnData(["First Name", "Last Name","NPI"]);
    const resultData = await props.expandFunction(tin);
    setRowData(resultData);
    if(resultData.length > 0){
      setColumnData(Object.keys(resultData[0]));
    }
  };
  return (
    <div style={{margin:'0px 0px 5px'}}>
      <Accordion expanded={expanded === props.dataRow.tin} onChange={handleChange(props.dataRow.tin)} >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>{props.dataRow.tin}&nbsp;{props.dataRow.status}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            {
              rowData.length != 0 &&
              <CustomAccordianTable ColumnData={columnData} RowData={rowData} />
            }
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}