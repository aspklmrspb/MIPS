import Grid from '@mui/material/Grid';
import { BasicTextField } from '../helpers/InputFiledWithLabel';
import DropDownWithLabel from '../helpers/DropDownWithLabel';
import { DatePickerWithLabel } from '../helpers/DatePickerWithLabel';
import Button from '@mui/material/Button';

export const PhysicianSearchFilters = (props) => {
    const PatientSexValues = [
        { "Male": "M" },
        { "Female": "F" },
        { "Others": "O" },
        { "Unknown": "U" },
    ];
    return (
        <div>
            <Grid container spacing={1} sx={{ padding: '0px' }}>
                <Grid item xs={12} sm={6} md={3} >
                    <BasicTextField
                        label="Physician NPI"
                        LabelPosition="top"
                        value={props.filterData.physiciannpi}
                        HandleInputChange={props.HandleInputChange}
                        name="physiciannpi"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <BasicTextField
                        label="TIN"
                        LabelPosition="top"
                        Size="small"
                        value={props.filterData.tin}
                        HandleInputChange={props.HandleInputChange}
                        name="tin"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <BasicTextField
                        label="Measure"
                        LabelPosition="top"
                        Size="small"
                        value={props.filterData.measure}
                        HandleInputChange={props.HandleInputChange}
                        name="measure"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <BasicTextField
                        label="Patient Age"
                        LabelPosition="top"
                        type="Number"
                        Size="small"
                        value={props.filterData.patientage}
                        HandleInputChange={props.HandleInputChange}
                        name="patientage"
                    />
                </Grid>
            </Grid>
            <Grid container spacing={1} sx={{ padding: '0px' }}>
                <Grid item xs={12} sm={6} md={3}>
                    <BasicTextField
                        label="ExamuniqueId"
                        LabelPosition="top"
                        Size="small"
                        value={props.filterData.examuniqueid}
                        HandleInputChange={props.HandleInputChange}
                        name="examuniqueid"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <BasicTextField
                        label="PatientId"
                        LabelPosition="top"
                        Size="small"
                        value={props.filterData.patientid}
                        HandleInputChange={props.HandleInputChange}
                        name="patientid"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <DropDownWithLabel
                        LabelValuePairs={PatientSexValues}
                        label="Patient Sex"
                        SelectedVal={props.filterData.patientsex}
                        showDefaultText="true"
                        DropDownChangeCallback={props.HandleInputChange}
                        name="patientsex"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <BasicTextField
                        label="CPT Code"
                        LabelPosition="top"
                        Size="small"
                        value={props.filterData.cptcode}
                        HandleInputChange={props.HandleInputChange}
                        name="cptcode"
                    />
                </Grid>
            </Grid>
            <Grid container spacing={1} sx={{ padding: '0px' }}>
                <Grid item xs={12} sm={6} md={3}>
                    <DatePickerWithLabel
                        label="From Date "
                        value={props.filterData.fromdate}
                        name="fromdate"
                        HandleDateInputChange={props.HandleFromDateChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <DatePickerWithLabel
                        label="To Date "
                        value={props.filterData.todate}
                        name="todate"
                        HandleDateInputChange={props.HandleToDateChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={3} >
                    <div style={{ display: 'flex', justifyContent: 'space-evenly', paddingTop: '25px' }}>
                        <Button variant="contained" size="large" color='success'
                            onClick={props.SubmitBtnClick}
                        >
                            Search
                        </Button>
                        <Button variant="contained" size="large" color='error'
                            onClick={props.ResetBtnClick}
                        >
                            Reset
                        </Button>
                        
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                </Grid>
            </Grid>
        </div>

    );
}