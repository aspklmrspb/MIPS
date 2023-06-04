import * as React from 'react';
import Box from '@mui/material/Box';
import DropDownWithLabel from '../helpers/DropDownWithLabel';
import { PhysicianSearchFilters } from './PhysicianSearchFilters';
import { fetchCMSSubmissionRecordEntered } from '../API/RecordsEnteredAPI';
import FullFeaturedTable from '../helpers/FullFeaturedTable';
import { RecordsEnteredTable } from '../helpers/PageTableHeaders';

import './measurestyle.css' ;

export default function CustomDataGridTable(props) {
    const [CMSYears, setCMSYears] = React.useState([]);
    const [selectedYear, setSelectedYear] = React.useState(0);
    const [griddata,Setgriddata] = React.useState([]);
    const [recordEnteredFilters, setRecordEnteredFilters] = React.useState({
        page: 1,
        noofRows: 10,
        sortcolumn : null,
        sortdirection:null,
        physiciannpi: '1962690453',
        tin: '123456789',
        measure: null,
        patientage: 0,
        examuniqueid: null,
        patientid: null,
        patientsex: '',
        cptcode: null,
        fromdate: null,
        todate: null,
        userName: props.UserName,
        searchtext : null,
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

    async function fetchdata(){
        var response = await fetchCMSSubmissionRecordEntered(recordEnteredFilters,"FacilityUser","administrator_100210",selectedYear);
        setCMSYears(response.cmsyears);
        setSelectedYear(response.selectedyear);
        Setgriddata(response.griddata);
    }

    React.useEffect(() =>{
        fetchdata();
    },[]);

    const ResetPhysicianFilters = ( ) =>{
        const updatedFilterVal = { ...recordEnteredFilters,
            page: 0,
            noofRows: 25,
            physiciannpi: null,
            tin: null,
            measure: null,
            patientage: 0,
            examuniqueid: null,
            patientid: null,
            patientsex: null,
            cptcode: null,
            fromdate: null,
            todate: null
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
                        SubmitBtnClick = {fetchdata}
                    />
                </div>
                <div style={{margin:'10px 5px'}}>
                    <FullFeaturedTable
                        title= {RecordsEnteredTable.Title}
                        ColumnData = {RecordsEnteredTable.ColumnData}
                        RowData = {griddata}
                     />
                </div>
            </Box>
        </div>
    );
}
