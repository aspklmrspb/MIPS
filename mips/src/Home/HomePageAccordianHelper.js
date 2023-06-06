import * as React from 'react';
import Typography from '@mui/material/Typography';
import { CustomAccordianTable } from '../helpers/CustomTables';
import { Accordion, AccordionSummary, AccordionDetails } from '../helpers/CustomStyledComponent/AccordianStyled';

export default function HomePageAccoridanHelper(props){
  const [expanded, setExpanded] = React.useState('');
  const [columnData, setColumnData] = React.useState([]);
  const [rowData, setRowData] = React.useState([]);

  const handleChange = (tin) => async (event, newExpanded) => {
    setExpanded(newExpanded ? tin : false);
    setColumnData(["First Name", "Last Name", "NPI"]);
    const resultData = await props.expandFunction(tin);
    setRowData(resultData);
    if (resultData.length > 0) {
      setColumnData(Object.keys(resultData[0]));
    }
  };
  return (
    <div style={{ margin: '0px 0px 5px' }}>
      <Accordion expanded={expanded === props.dataRow.tin} onChange={handleChange(props.dataRow.tin)} >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography variant="div">{props.dataRow.tin}&nbsp;{props.dataRow.status}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            {
              props.Component
            }
            {
              rowData.length !== 0 &&
              <CustomAccordianTable ColumnData={columnData} RowData={rowData} />
            }
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
