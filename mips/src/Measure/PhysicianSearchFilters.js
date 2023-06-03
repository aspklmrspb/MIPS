import Grid from '@mui/material/Grid';
import { BasicTextField } from '../helpers/InputFileds';
import DropDownWithLabel from '../helpers/DropDownWithLabel';

export const PhysicianSearchFilters = (props) => {
    const PatientSexValues = [
        { "Male": "M" },
        { "Female": "F" },
        { "Others": "O" },
        { "Unknown": "U" },
    ];
    return (
        <div>
            <Grid container spacing={1} sx={{ padding: '10px' }}>
                <Grid item xs={12} sm={6} md={3}>
                    <BasicTextField
                        InputLabel="Physician NPI"
                        LabelPosition="top"
                        InputValue = {props.filterData.physiciannpi}
                        HandleInputChange={props.HandleInputChange}
                        name="physiciannpi"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <BasicTextField
                        InputLabel="TIN"
                        LabelPosition="top"
                        Size="small"
                        InputValue = {props.filterData.tin}
                        HandleInputChange={props.HandleInputChange}
                        name="tin"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <BasicTextField
                        InputLabel="Measure"
                        LabelPosition="top"
                        Size="small"
                        InputValue = {props.filterData.measure}
                        HandleInputChange={props.HandleInputChange}
                        name="measure"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <BasicTextField
                        InputLabel="Patient Age"
                        LabelPosition="top"
                        type="Number"
                        Size="small"
                        InputValue = {props.filterData.patientage}
                        HandleInputChange={props.HandleInputChange}
                        name="patientage"
                    />
                </Grid>
            </Grid>
            <Grid container spacing={1} sx={{ padding: '10px' }}>
                <Grid item xs={12} sm={6} md={3}>
                    <BasicTextField
                        InputLabel="ExamuniqueId"
                        LabelPosition="top"
                        Size="small"
                        InputValue = {props.filterData.examuniqueid}
                        HandleInputChange={props.HandleInputChange}
                        name="examuniqueid"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <BasicTextField
                        InputLabel="PatientId"
                        LabelPosition="top"
                        Size="small"
                        InputValue = {props.filterData.patientid}
                        HandleInputChange={props.HandleInputChange}
                        name="patientid"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <DropDownWithLabel
                        InputValuePairs={PatientSexValues}
                        InputLabel="Patient Sex"
                        SelectedVal = {props.filterData.patientsex}
                        showDefaultText="true"
                        DropDownChangeCallback={props.HandleInputChange}
                        name ="patientsex"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <BasicTextField
                        InputLabel="CPT Code"
                        LabelPosition="top"
                        Size="small"
                        InputValue = {props.filterData.cptcode}
                        HandleInputChange={props.HandleInputChange}
                        name="cptcode"
                        />
                </Grid>
            </Grid>
        </div>

    );
}