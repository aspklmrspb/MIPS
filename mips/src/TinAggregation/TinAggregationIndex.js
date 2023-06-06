import * as React from 'react';
import Instructions from './Instructions';
import DropDownWithLabel from '../helpers/DropDownWithLabel';
import PerformancePageAccoridanHelper from './PerformancePageAccordianHelper';
import { fetchRecordsEnteredInitialData } from '../API/PerformanceReportAPI';

export default function TinAggregationIndex(props) {
    const [initData, setInitData] = React.useState({
        facilitytins : [],
        selectedyear : '',
        cmsyearlist : []
    });

    async function fetchData(){
        const response = await fetchRecordsEnteredInitialData(props.userName, props.userRole, props.npi);
        setInitData({facilitytins : response.facilitytins, selectedyear : response.selectedyear, cmsyearlist : response.cmsyearlist});
    }

    const showPerformanceData = async (tin) =>{
    }

    React.useEffect(() =>{
        fetchData();
    },[])

    return (
        <div style={{ padding: '10px' }}>
            <Instructions />
            <div style={{ margin: '30px 0px 15px', display: 'flex', alignItems: 'center' }}>
                <DropDownWithLabel
                    label="Reporting Year"
                    DropDownValues={initData.cmsyearlist}
                    showDefaultText={true}
                    SelectedVal={initData.selectedyear}
                />
            </div>
            <div style={{margin:'0px 0px 5px'}}>
                {
                    initData.facilitytins.map((row) => {
                        return <PerformancePageAccoridanHelper 
                            dataRow={row} 
                            key={`tin-${row.tin}-${row.isgpro}`} 
                            ExpandCallback={showPerformanceData}
                            npi={props.npi}
                            userName ={props.userName} 
                            userRole = {props.userRole}
                            selectedyear = {initData.selectedyear}
                             />
                    })
                }
            </div>
        </div>
    )
};