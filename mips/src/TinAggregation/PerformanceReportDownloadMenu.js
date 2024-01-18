import * as React from 'react';
import { SaveExcelFile } from '../helpers/SaveExcelFile';

export default function PerformanceReportDownloadMenu() {
    const [showDownloadMenu, setShowDownloadMenu] = React.useState(false);
    const excelData = [
        {
            sheetName: 'sheet 1',
            columns: [
                { header: 'Name', key: 'name', width: 15 },
                { header: 'Email', key: 'email', width: 20 },
                { header: 'Age', key: 'age', width: 10 },
            ],
            rowData: [
                { name: 'John', email: 'john@example.com', age: 30 },
                { name: 'Jane', email: 'jane@example.com', age: 25 },
                { name: 'Sam', email: 'sam@example.com', age: 35 },
            ],
            freezeColumns: 0,
            headerBackgroundColor: 'FFFF00',
            mergeRange: {
                startRow: 2,
                startColumn: 1,
                endRow:2,
                endColumn: 3,
              },
            
            }
        ];

    const PerformanceReportDownload = async(type)=>{
        const response = await "";
        SaveExcelFile(excelData, 'testfile');
        setShowDownloadMenu(!showDownloadMenu);
    }
    return (
        <>
            <div id="ReportsDropdown" className="report-dropdown" >

                <button
                    className="dropbtn"
                    id="Reportbtn"
                    style={{ backgroundColor: "#4a5b63", color: "white", padding: "9px", fontSize: "16px", border: "none", cursor: "pointer", width: "300px" }}
                    onClick={() => setShowDownloadMenu(!showDownloadMenu)}
                >
                    Performance Reports &nbsp;&nbsp;
                    <i className={showDownloadMenu ? 'fa fa-chevron-circle-down' : 'fa fa-chevron-circle-up'}></i>
                </button>
                <div id="repdiv" className="dropdown-content" style={{
                    display: showDownloadMenu ? 'block' : 'none',
                    position: "absolute",
                    backgroundColor: "#f1f1f1",
                    minWidth: "294px",
                    overflow: "auto",
                    boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
                    zIndex: "1"
                }}>
                    <a href="#" id="GproPerformanceExcelDownload()" onClick={() => PerformanceReportDownload('GPRO')} style={{ color: "black", padding: "12px 16px", textDecoration: "none", display: "block" }}>Gpro Performance Report</a>
                    <a href="#" id="NonGproPerformanceExcelDownload()" style={{ color: "black", padding: "12px 16px", textDecoration: "none", display: "block" }}>NonGpro Performance Report</a>
                    <a href="#" id="GproNonGproPerformanceExcelDownload()" style={{ color: "black", padding: "12px 16px", textDecoration: "none", display: "block" }}>Gpro / NonGpro Performance Report</a>
                </div>
            </div>
        </>
    )
}