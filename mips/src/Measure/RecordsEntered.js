import * as React from 'react';
import { DataGrid, GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import DropDownWithLabel from '../helpers/DropDownWithLabel';
import { fetchCMSSubmissionRecordEntered } from '../API/RecordsEnteredAPI';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const rows = [
    {
        recordId: "2358",
        tin: '9988',
        measureNumber: 12.00,
        patientId: '21',
        uniqueExamId: 63,
        examDate: '2023-03-02',
        cptCode: 'G9706',
        numeratorCode: '356F',
        status: 'Completed',
        createdDate: '05-018-2023',
        source: 'Excel Uploaded',
        cmsYear: 2023,
        id: 1
    },
    {
        recordId: "2358",
        tin: '9988',
        measureNumber: 12.00,
        patientId: '21',
        uniqueExamId: 63,
        examDate: '2023-03-02',
        cptCode: 'G9706',
        numeratorCode: '356F',
        status: 'Completed',
        createdDate: '05-018-2023',
        source: 'Excel Uploaded',
        cmsYear: 2023,
        id: 2
    },
    {
        recordId: "2358",
        tin: '9988',
        measureNumber: 12.00,
        patientId: '21',
        uniqueExamId: 63,
        examDate: '2023-03-02',
        cptCode: 'G9706',
        numeratorCode: '356F',
        status: 'Completed',
        createdDate: '05-018-2023',
        source: 'Excel Uploaded',
        cmsYear: 2023,
        id: 3
    },
    {
        recordId: "2358",
        tin: '9988',
        measureNumber: 12.00,
        patientId: '21',
        uniqueExamId: 63,
        examDate: '2023-03-02',
        cptCode: 'G9706',
        numeratorCode: '356F',
        status: 'Completed',
        createdDate: '05-018-2023',
        source: 'Excel Uploaded',
        cmsYear: 2023,
        id: 4
    },
    {
        recordId: "2358",
        tin: '9988',
        measureNumber: 12.00,
        patientId: '21',
        uniqueExamId: 63,
        examDate: '2023-03-02',
        cptCode: 'G9706',
        numeratorCode: '356F',
        status: 'Completed',
        createdDate: '05-018-2023',
        source: 'Excel Uploaded',
        cmsYear: 2023,
        id: 5
    },
    {
        recordId: "2358",
        tin: '9988',
        measureNumber: 12.00,
        patientId: '21',
        uniqueExamId: 63,
        examDate: '2023-03-02',
        cptCode: 'G9706',
        numeratorCode: '356F',
        status: 'Completed',
        createdDate: '05-018-2023',
        source: 'Excel Uploaded',
        cmsYear: 2023,
        id: 6
    },
    {
        recordId: "2358",
        tin: '9988',
        measureNumber: 12.00,
        patientId: '21',
        uniqueExamId: 63,
        examDate: '2023-03-02',
        cptCode: 'G9706',
        numeratorCode: '356F',
        status: 'Completed',
        createdDate: '05-018-2023',
        source: 'Excel Uploaded',
        cmsYear: 2023,
        id: 7
    },
    {
        recordId: "2358",
        tin: '9988',
        measureNumber: 12.00,
        patientId: '21',
        uniqueExamId: 63,
        examDate: '2023-03-02',
        cptCode: 'G9706',
        numeratorCode: '356F',
        status: 'Completed',
        createdDate: '05-018-2023',
        source: 'Excel Uploaded',
        cmsYear: 2023,
        id: 8,
    }
];

const columns = [
    { field: 'recordId', headerName: 'Record ID', flex: 1, align: 'center', headerAlign: 'center', headerClassName: 'table--header' },
    { field: 'tin', headerName: 'TIN', flex: 1, align: 'center', headerAlign: 'center', headerClassName: 'table--header' },
    { field: 'measureNumber', headerName: 'Measure Number', flex: 1, align: 'center', headerAlign: 'center', headerClassName: 'table--header' },
    { field: 'patientId', headerName: 'PatientID', flex: 1, align: 'center', headerAlign: 'center', headerClassName: 'table--header' },
    { field: 'uniqueExamId', headerName: 'Unique Exam ID', flex: 1, align: 'center', headerAlign: 'center', headerClassName: 'table--header' },
    { field: 'examDate', headerName: 'Exam Date', flex: 1, align: 'center', headerAlign: 'center', headerClassName: 'table--header' },
    { field: 'cptCode', headerName: 'CPT Code', flex: 1, align: 'center', headerAlign: 'center', headerClassName: 'table--header' },
    { field: 'numeratorCode', headerName: 'Numerator Code', flex: 1, align: 'center', headerAlign: 'center', headerClassName: 'table--header' },
    { field: 'status', headerName: 'Status', flex: 1, align: 'center', headerAlign: 'center', headerClassName: 'table--header' },
    { field: 'cmsYear', headerName: 'CMS Year', flex: 1, align: 'center', headerAlign: 'center', headerClassName: 'table--header' },
];

function CustomToolbar() {
    return (
        <GridToolbarContainer>
            <GridToolbarExport />
        </GridToolbarContainer>
    );
}

const handleSubmitDropdownChange = async (event) => {
    debugger;
    var SelectedVal = event.target.value;
    const response = await fetchCMSSubmissionRecordEntered(SelectedVal, "administrator_100210", "true", "AcrinAdmin");
}

export default function CustomDataGridTable() {
    return (
        <div className='contentContr'>
            <Box
                sx={{
                    height: 600,
                    width: '100%',
                    '& .table--header': {
                        backgroundColor: '#072C40',
                        color: '#fff',
                    },
                }}
            >
                <Grid container>
                    <Grid item xs={12}>
                        <DropDownWithLabel InputLabel='CMS Year'
                            SelectedVal={''}
                            InputValues={[2019, 2020, 2021, 2022, 2023]}
                            ShowButton='false'
                            SubmitText='Get Details'
                            SubmitButtonCallBack={handleSubmitDropdownChange}
                        />
                    </Grid>
                </Grid>
                <Grid container>
                    <div style={{ marginTop: '12px',marginLeft:'5px'}}>
                        <h2 style={{marginBottom: '5px' }}>Search Physician Details:</h2>
                        <Grid item xs={12}>
                            <div style={{ marginTop: '5px', width: '100%' ,display:'flex',alignItems:'center'}}>
                            <div style={{fontWeight:'bold'}} > Physician: </div>
                                <FormControl sx={{ m: 1, minWidth: 300 }} size="small">
                                    <Select>
                                        <MenuItem value="None"><em>None</em></MenuItem>    
                                        <MenuItem value="Pavan"><em>Pavan</em></MenuItem>    
                                        <MenuItem value="Mitender"><em>Mitender</em></MenuItem>    
                                        <MenuItem value="Gopi"><em>Gopi</em></MenuItem>                                
                                    </Select>
                                </FormControl>
                            </div>
                        </Grid>
                    </div>
                </Grid>

                <DataGrid
                    components={{ Toolbar: CustomToolbar, }}
                    rows={rows}
                    columns={columns}
                />
            </Box>
        </div>
    );
}
