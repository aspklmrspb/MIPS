import * as React from 'react';
import Box from '@mui/material/Box';
import DropDownWithLabel from '../helpers/DropDownWithLabel';
import { PhysicianSearchFilters } from './PhysicianSearchFilters';
import { fetchCMSSubmissionRecordEntered } from '../API/RecordsEnteredAPI';
import FullFeaturedTable from '../helpers/FullFeaturedTable';
import { RecordsEnteredTable } from '../helpers/PageTableHeaders';
import dayjs from 'dayjs';

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
        setRecordEnteredFilters({ ...recordEnteredFilters, fromdate: (value) });
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

    const modifyGridData = async (page, rowcount, sortproperties, action) => {
        if (action === "sort") {
            debugger;
            var sortColumn  = "";
            switch(sortproperties.name){
                case "Records  ID" :
                    sortColumn = "ExamID";
                    break;
                case "TIN" :
                    sortColumn = "TIN";
                    break;
                case "Measure Number":
                    sortColumn = "MeasureNum";
                    break;
                case "Patient ID":
                    sortColumn = "PatientID";
                    break;
                case "Patient Age":
                    sortColumn = "PatientAge";
                    break;
                case "Patient Sex":
                    sortColumn = "PatientGender";
                    break;
                case "Unique ExamID":
                    sortColumn = "UniqueExamID";
                    break;
                case "Exam Date":
                    sortColumn = "ExamDate";
                    break;
                case "CPT Code":
                    sortColumn = "CPTCode";
                    break;
                case "Created Date":
                    sortColumn = "Created_Date";
                    break;
            };
            setRecordEnteredFilters(prevFilters => ({
                ...prevFilters,
                sortdirection : sortproperties.direction.toLocaleUpperCase(),
                sortcolumn : sortColumn
              }));
              // Handle sorting action
        } else {
          setRecordEnteredFilters(prevFilters => ({
            ...prevFilters,
            page: page,
            noofRows: rowcount
          }));
        }
      }
      
    async function fetchdata(){
        var response = await fetchCMSSubmissionRecordEntered(recordEnteredFilters,"FacilityUser","administrator_100210",selectedYear);
        setCMSYears(response.cmsyears);
        setSelectedYear(response.selectedyear);
        Setgriddata(response.griddata);
    }
      

    React.useEffect(() =>{
        fetchdata();
    },[recordEnteredFilters.page, recordEnteredFilters.noofRows, recordEnteredFilters.sortcolumn,recordEnteredFilters.sortdirection]);

    const ResetPhysicianFilters = async ( ) =>{
        const updatedFilterVal = { ...recordEnteredFilters,
            page: 1,
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
       await setRecordEnteredFilters(updatedFilterVal);
       fetchdata();
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
                    <h3 className="searchCls" >
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
                    {
                        griddata.length === 0 &&
                    <FullFeaturedTable
                        title= {RecordsEnteredTable.Title}
                        ColumnData = {RecordsEnteredTable.ColumnData}
                        RowData = {griddata}
                        GetGridData = {modifyGridData}
                     />
                    }
                </div>
            </Box>
        </div>
    );
}
