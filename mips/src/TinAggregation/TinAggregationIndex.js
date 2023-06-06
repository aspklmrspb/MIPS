import * as React from 'react';
import Instructions from './Instructions';
import DropDownWithLabel from '../helpers/DropDownWithLabel';
import PerformancePageAccoridanHelper from './PerformancePageAccordianHelper';
import { fetchRecordsEnteredInitialData } from '../API/PerformanceReportAPI';
import { SaveExcelFile } from '../helpers/SaveExcelFile';

export default function TinAggregationIndex(props) {
    const [initData, setInitData] = React.useState({
        facilitytins : [],
        selectedyear : 0,
        cmsyearlist : []
    });
    const excelData = [
        {
            sheetName : 'sheet 1',
            columns : [
                { header: 'Name', key: 'name', width: 15 },
                { header: 'Email', key: 'email', width: 20 },
                { header: 'Age', key: 'age', width: 10 },
              ],
              rowData :  [
                { name: 'John', email: 'john@example.com', age: 30 },
                { name: 'Jane', email: 'jane@example.com', age: 25 },
                { name: 'Sam', email: 'sam@example.com', age: 35 },
              ],
              freezeColumns : 2,
              headerBackgroundColor : 'FFFF00'
        }
    ];
      
      
    async function fetchData(){
        const response = await fetchRecordsEnteredInitialData(props.userName, props.userRole, props.npi, initData.selectedyear);
        setInitData({facilitytins : response.facilitytins, selectedyear : response.selectedyear, cmsyearlist : response.cmsyearlist});
    }

    const CMSYearDataRefresh = (event) =>{
        setInitData({...initData, selectedyear:event.target.value})
    }
    React.useEffect(() =>{
        fetchData();
    },[initData.selectedyear])

    return (
        <div style={{ padding: '10px' }}>
                  <button onClick={() => SaveExcelFile(excelData,'testfile')}>Save Excel</button>

            <Instructions />
            <div style={{ margin: '30px 0px 15px', display: 'flex', alignItems: 'center' }}>
                <DropDownWithLabel
                    label="Reporting Year"
                    DropDownValues={initData.cmsyearlist}
                    showDefaultText={true}
                    SelectedVal={initData.selectedyear}
                    DropDownChangeCallback = {CMSYearDataRefresh}
                />
            </div>
            <div style={{margin:'0px 0px 5px'}}>
                {
                    initData.facilitytins.map((row) => {
                        return <PerformancePageAccoridanHelper 
                            dataRow={row} 
                            key={`tin-${row.tin}-${row.isgpro}`} 
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