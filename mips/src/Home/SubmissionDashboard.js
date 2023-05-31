import React, { useEffect, useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DropDownWithLabel from '../helpers/DropDownWithLabel';
import RadioButtonsWithLabel from '../helpers/RadioButtonsWithLabel';
import Grid from '@mui/material/Grid';
import CustomDataGridTable from '../helpers/CustomDataGridTable';
import styled from "@emotion/styled";
import { fetchCMSSubmissionDashboardData } from '../API/HomeAPI';

const TableRowStyled = styled(TableRow)`
  &:nth-of-type(odd) {
    background-color: #f2f2f2;
  }
  &:nth-of-type(even) {
    background-color: #fff;
  }
`;

const TableCellStyled = styled(TableCell)`
  border: 1px solid #ddd;
  color: #666666;
  line-height: 0.3rem;
`;

const SubmissionDashboard = () => {
  const [DashboardData, setDashboardData] = useState({
    SelectedYear : 2019,
    IsGpro : "true",
    dataList :[],
    totalGproTins : 0,
    totalNonGproTins : 0,
    submittedGproTins : 0,
    submittedNonGproTins : 0,
    gproTinCount : 0,
    nonGproTinCount : 0,
    columnData:[],
  });

  async function fetchData() {
    const response = await fetchCMSSubmissionDashboardData(DashboardData.SelectedYear, "administrator_100210",DashboardData.IsGpro,"AcrinAdmin");
    const UpdatedCols = UpdateColumnData(DashboardData.IsGpro);
    setDashboardData( { ...DashboardData, ...response.data, columnData : UpdatedCols});
  }
  const UpdateColumnData = (IsGpro) =>{
    if(IsGpro === "true"){
      return [ 
        {field: 'tin', headerName: 'TIN'},
        {field: 'qM_Submission_Status', headerName: 'QM CMS Status'},
        { field: 'qM_Score', headerName: 'QM Score' },
        { field: 'iA_Submission_Status', headerName: 'IA CMS Status' },
        { field: 'iA_Score', headerName: 'IA Score'  },
      ]
    }else{
      return [ 
        {field: 'tin', headerName: 'TIN'},
        {field: 'qM_Submission_Status', headerName: 'Have all NPIs submitted Quality Measures?'},
        { field: 'iA_Submission_Status', headerName: 'Have all NPIs submitted IA?' },
      ]
    }
  }
  const handleRadioButtonChange = async (event) => {
    const value = event.target.value;
    const response = await fetchCMSSubmissionDashboardData(DashboardData.SelectedYear, "administrator_100210",value,"AcrinAdmin");
    const UpdatedCols = UpdateColumnData(value);
    const updatedDashboardData = { ...DashboardData, ...response.data, IsGpro: event.target.value, columnData : UpdatedCols}; 
    setDashboardData(updatedDashboardData);
  };
  const handleSubmitButtonChange = async (event) => {
    const value = event.target.value;
    const response = await fetchCMSSubmissionDashboardData(value, "administrator_100210",DashboardData.IsGpro,"AcrinAdmin");
    const updatedDashboardData = { ...DashboardData, ...response.data, SelectedYear : event.target.value}; 
    setDashboardData(updatedDashboardData);
  };

  useEffect(() => {
    fetchData();
  }, []); 

  return (
    <div style={{margin:'10px', border:'1px solid #5D737D'}}>
        <Accordion sx={{background:'#4a5b63', color:'#fff', flexDirection:'row-reverse'}}>
        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{color:'#fff'}}/>} aria-controls="accordion-content" id="accordion-header">
            <Typography variant="h6"> CMS Submission Dashboard</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{background:'#fff', color:'#666666',display:'flex',flexDirection:'column',padding:'5px'}}>
              <DropDownWithLabel InputLabel='CMSYear'  
                  SelectedVal={DashboardData.SelectedYear} 
                  InputValues={[2019,2020,2021,2022,2023]} 
                  ShowButton='false' 
                  SubmitText='Get Details'
                  SubmitButtonCallBack = {handleSubmitButtonChange}
              />

                <Grid container spacing={0} sx={{margin:'10px 0px' ,width: 'calc(100% - 3px)'}}>
                  <Grid item xs={5} sx={{border:'0px solid',padding:'10px'}}>
                    <h3 className = "acr-heading">Select category to view CMS Submission Details &nbsp;&nbsp;&nbsp;</h3>
                    <RadioButtonsWithLabel 
                      RadioValuePairs={[
                        { RadioLabel : "GPRO", RadioValue : "true"},
                        { RadioLabel : "NON - GPRO", RadioValue : "false"},
                      ]}
                      SelectedVal={DashboardData.IsGpro} 
                      RadioButtonCallBack={handleRadioButtonChange} // Updated prop name
                    />

                    <TableContainer component={Paper} >
                      <Table>
                        <TableHead>
                          <TableRow>
                            <TableCellStyled colSpan={2} sx={{fontWeight:'bold',border:'1px solid #ddd',color:'#000',textAlign:'center'}}>
                              Number of {DashboardData.IsGpro === "true" ? 'TINS' : 'TIN-NPIs'} submitted as a {DashboardData.IsGpro === "true" ? 'group' : 'individuals'}
                            </TableCellStyled>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          <TableRowStyled >
                            <TableCellStyled sx={{}} >Submitted to CMS</TableCellStyled>
                            <TableCellStyled sx={{textAlign:'center'}} >
                                {DashboardData.IsGpro === "true" ? DashboardData.submittedGproTins : DashboardData.submittedNonGproTins }
                            </TableCellStyled>
                          </TableRowStyled>
                          <TableRowStyled>
                            <TableCellStyled sx={{}} >Not Submitted to CMS</TableCellStyled>
                            <TableCellStyled sx={{textAlign:'center'}} >
                                {DashboardData.IsGpro === "true" ? DashboardData.gproTinCount : DashboardData.nonGproTinCount }
                            </TableCellStyled>
                          </TableRowStyled>
                          <TableRowStyled>
                            <TableCellStyled sx={{}} >Total</TableCellStyled>
                            <TableCellStyled sx={{textAlign:'center'}} >
                                {DashboardData.IsGpro === "true" ? DashboardData.totalGproTins : DashboardData.totalNonGproTins }
                            </TableCellStyled>
                          </TableRowStyled>
                        </TableBody>
                      </Table>
                    </TableContainer>

                  </Grid>
                  <Grid item xs={7} sx={{border:'0px solid',padding:'0px'}}>
                    <CustomDataGridTable  ColumnData={DashboardData.columnData} RowData={DashboardData.dataList}/>
                  </Grid>
                </Grid>
        </AccordionDetails>
        </Accordion>
    </div>
  );
};

export default SubmissionDashboard;
