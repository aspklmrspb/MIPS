import * as React from 'react';
import Box from '@mui/material/Box';
import DropDownWithLabel from '../helpers/DropDownWithLabel';
import { fetchCMSSubmissionRecordEntered } from '../API/RecordsEnteredAPI';
import { PhysicianSearchFilters } from './PhysicianSearchFilters';
export default function CustomDataGridTable() {
    const [CMSYears, setCMSYears] = React.useState([2019, 2020, 2021, 2022]);
    const [selectedYear, setSelectedYear] = React.useState("");
    const [recordEnteredFilters, setRecordEnteredFilters] = React.useState({
        page:0,
        noofRows:25,
        physiciannpi :'npi',
        tin:'tin',
        measure:'measure',
        patientage:20,
        examuniqueid:'uid',
        patientid:'pid',
        patientsex:'M',
        cptcode:'code'
    });

    const handleFilterChange = (event) => {
        const { name, value } = event.target;
        setRecordEnteredFilters((prevState) => ({
          ...prevState,
          [name]: value,
        }));
        console.log(recordEnteredFilters);
      };

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
                        InputValues={CMSYears}
                        InputLabel="CMSYear"
                        SelectedVal={selectedYear}
                        showDefaultText="true"
                        DropDownChangeCallback={(event) => { setSelectedYear(event.target.value) }}
                    />
                </div>
                <PhysicianSearchFilters filterData={recordEnteredFilters} HandleInputChange={handleFilterChange} />
            </Box>
        </div>
    );
}
