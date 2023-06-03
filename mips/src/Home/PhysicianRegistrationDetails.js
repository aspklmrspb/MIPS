import React, { useState, useEffect } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DropDownWithLabel from '../helpers/DropDownWithLabel';
import { BasicTextField } from '../helpers/InputFiledWithLabel';
import Button from '@mui/material/Button';
import { fetchPhysicianRegistrationDetails } from '../API/HomeAPI';
import FullFeaturedTable from '../helpers/FullFeaturedTable';

export default function PhysicianRegistrationResult() {
    const [selectCat, setSelectCat] = useState(0);
    const [searchText, setSearchText] = useState('All');
    const [PhyRegDetails, setPhyRegDetails] = useState([]);

    const PhysicainSearchCatgeories = [
        { "Registration": 0 },
        { "First Name": 1 },
        { "Last Name": 2 },
        { "NPI": 3 },
    ];
    const handleSubmitButtonChange = async (event) => {
        setSelectCat(event.target.value);
        if (event.target.value == "0") {
            setSearchText("All");
        } else {
            setSearchText("");
        }
    }

    const GetPhyRegistrationDetails = async () => {
        var response = await fetchPhysicianRegistrationDetails(selectCat, searchText);
        setPhyRegDetails(response);
    }

    useEffect(() =>{
        GetPhyRegistrationDetails();
    },[]);
    return (
        <div style={{ margin: '30px 10px', border: '1px solid #5D737D' }}>
            <Accordion sx={{ background: '#4a5b63', color: '#fff', flexDirection: 'row-reverse' }} expanded={true}>
                <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#fff', minHeigth: '20px' }} />} aria-controls="accordion-content" id="accordion-header">
                    <Typography variant="div"> Physician Registration Details</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ background: '#fff', color: '#666666', display: 'flex', flexDirection: 'column', padding: '5px' }}>
                    <Typography variant='div' sx={{ padding: '5px' }}>
                        <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', width: '100%', marginBottom: '10px' }} >
                            <DropDownWithLabel label='Registration Search Filter '
                                SelectedVal={selectCat}
                                LabelValuePairs={PhysicainSearchCatgeories}
                                ShowButton='false'
                                DropDownChangeCallback={handleSubmitButtonChange}
                            />
                            &nbsp;
                            {
                                selectCat === 0 ?

                                    <DropDownWithLabel label='Registration Status For Physician  '
                                        SelectedVal={searchText}
                                        DropDownValues={['All', 'True', 'False']}
                                        ShowButton='false'
                                        DropDownChangeCallback={(event) => setSearchText(event.target.value)}
                                    />
                                    :
                                    <>
                                        <BasicTextField
                                            variantType="outlined"
                                            placeholder="Enter Search Text"
                                            label="Search"
                                            value={searchText}
                                            HandleInputChange={(event) => setSearchText(event.target.value)}
                                        />
                                    </>
                            }
                            <Button variant="contained" size="large"
                                sx={{
                                    textTransform: 'none',
                                    background: 'linear-gradient(to bottom, #758c95 0%,#5a6b74 100%)',
                                    boxShadow: '0 3px #333',
                                    margin: '0px 8px 8px',
                                    ':hover': {
                                        background: 'linear-gradient(to bottom, #95a9b1 0%,#637882 100%)',
                                        boxShadow: '0 2px #333'
                                    }
                                }
                                }
                                onClick={GetPhyRegistrationDetails}
                            >
                                Search
                            </Button>
                        </div>
                    </Typography>
                    <Typography variant='div'>
                        <FullFeaturedTable
                            ShowSearchBtn={true}
                            showDownloadBtn={false}
                            showViewColumnBtn={false}
                            showFilterBtn={false}
                            showPrintBtn ={false}
                            RowData={PhyRegDetails}
                            ColumnData={["User Name", "First Name", "Last Name","Email Address","Registred ( Y/N )"]}
                            responsive="standard"
                            tableHeight = "400"
                        />
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}