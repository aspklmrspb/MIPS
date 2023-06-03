import * as React from 'react';
import Box from '@mui/material/Box';
import DropDownWithLabel from '../helpers/DropDownWithLabel';
import { PhysicianSearchFilters } from './PhysicianSearchFilters';
import './measurestyle.css' ;

export default function CustomDataGridTable(props) {
    const [CMSYears, setCMSYears] = React.useState([2019, 2020, 2021, 2022]);
    const [selectedYear, setSelectedYear] = React.useState("");
    const [recordEnteredFilters, setRecordEnteredFilters] = React.useState({
        page: 0,
        noofRows: 25,
        sortcolumn :'',
        sortdirection:'',
        physiciannpi: '',
        tin: '',
        measure: '',
        patientage: 0,
        examuniqueid: '',
        patientid: '',
        patientsex: '',
        cptcode: '',
        fromdate: '',
        todate: '',
        userName: props.UserName
    });

    const handleFromDateChange = (value) => {
        setRecordEnteredFilters({ ...recordEnteredFilters, fromdate: value });
    }
    const handleToDateChange = (value) => {
        setRecordEnteredFilters({ ...recordEnteredFilters, todate: value });
    }
    const handleFilterChange = (event) => {
        const { name, value } = event.target;
        setRecordEnteredFilters((prevState) => ({
            ...prevState,
            [name]: value,
        }));
        console.log(recordEnteredFilters);
    };

    const ResetPhysicianFilters = ( ) =>{
        const updatedFilterVal = { ...recordEnteredFilters,
            page: 0,
            noofRows: 25,
            physiciannpi: '',
            tin: '',
            measure: '',
            patientage: 0,
            examuniqueid: '',
            patientid: '',
            patientsex: '',
            cptcode: '',
            fromdate: '',
            todate: ''
        };
        debugger;
        setRecordEnteredFilters(updatedFilterVal);
    }
    return (
        <div className='contentContr' style={{ marginTop: '1px' }}>
            <Box
                sx={{
                    minHeight: 600,
                    width: '100%',
                }}
            >
                <div style={{ display: 'flex', margin: '10px', alignItems: 'center', justifyContent: 'center' }}>
                    <DropDownWithLabel
                        DropDownValues={CMSYears}
                        label="CMSYear"
                        SelectedVal={selectedYear}
                        showDefaultText="true"
                        DropDownChangeCallback={(event) => { setSelectedYear(event.target.value) }}
                    />
                </div>
                <div  style={{margin : '10px'}}>
                    <h3 class="searchCls" >
                        Search physician details:
                    </h3>

                    <PhysicianSearchFilters
                        filterData={recordEnteredFilters}
                        HandleInputChange={handleFilterChange}
                        HandleFromDateChange={handleFromDateChange}
                        HandleToDateChange={handleToDateChange}
                        ResetBtnClick = {ResetPhysicianFilters}
                    />
                </div>
                <div style={{margin:'10px'}}>

                </div>
            </Box>
        </div>
    );
}
