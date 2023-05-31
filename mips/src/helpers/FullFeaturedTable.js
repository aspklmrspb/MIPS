import MUIDataTable from "mui-datatables";
import React, { useState } from "react";
import createCache from "@emotion/cache";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const muiCache = createCache({
    key: "mui-datatables",
    prepend: true
});

////  Description
///Props to be passed
///{
// title : Caption of table
// showSearchBtn : True | False
// showDownloadBtn : True | False,
// showPrintBtn : True | False ,
// showViewColumnBtn  : True | False ,
// showFilterBtn  : True | False ,
// tableBodyHeight : Height of table,
// onRowClick: Callback function on Row click
// selectableRows: none | select to show checkbox select,
// tableSize : medium | small
// responsive : standard | vertical
// }
// Sample Data
// const data = [
//     ["Gabby George", "Business Analyst", "Minneapolis"],
//     [
//         "Aiden Lloyd",
//         "Business Consultant for an International Company and CEO of Tony's Burger Palace",
//         "Dallas"
//     ],
//     ["Jaden Collins", "Attorney", "Santa Ana"],
//     ["Franky Rees", "Business Analyst", "St. Petersburg"],
//     ["Aaren Rose", null, "Toledo"],
//     ["Johnny Jones", "Business Analyst", "St. Petersburg"],
//     ["Jimmy Johns", "Business Analyst", "Baltimore"],
//     ["Jack Jackson", "Business Analyst", "El Paso"],
//     ["Joe Jones", "Computer Programmer", "El Paso"],
//     ["Jacky Jackson", "Business Consultant", "Baltimore"],
//     ["Jo Jo", "Software Developer", "Washington DC"],
//     ["Pavan Kumar", "Business Manager", "Annapolis"],
//     ["Donna Marie", "Business Manager", "Annapolis"],
//     ["Pavan", "Business Manager", "Annapolis"],
//     ["Donna Marie", "Business Manager", "Annapolis"]
// ];



// const columns = [
//     {
//         name: "Name",
//         options: {
//             sort: false
//         }
//     },
//     {
//         name: "Title",
//     },
//     {
//         name: "Location",
//     },
// ];






export default function FullFeaturedTable(props) {
    const options = {
        search: props.ShowSearchBtn,
        download: props.showDownloadBtn,
        print: props.showPrintBtn,
        viewColumns: props.showViewColumnBtn,
        filter: props.showFilterBtn,
        filterType: "dropdown",
        responsive: props.responsive,
        tableBodyHeight: props.tableHeight,
        onRowClick: (action, state) => {
            console.log(action);
            console.dir(state);
        },
        selectableRows: props.selectableRows,
        setRowProps: (row, dataIndex, rowIndex) => {
            return {
                style: {
                    border: '1px solid #ddd',
                    backgroundColor: rowIndex % 2 != 0 ? '#f2f2f2' : '#fff'
                },
            };
        },
        setTableProps: () => {
            return {
                size: props.tableSize,
            };
        },
    };



    const getMuiTheme = () => createTheme({
        components: {
            // MUIDataTable: {
            //     styleOverrides: {
            //         root: {
            //             backgroundColor: '#red',
            //         },
            //         paper: {
            //             boxShadow: 'none',
            //         },
            //     },
            // },
            MuiToolbar: {
                styleOverrides: {
                    root: {

                        minHeight: '50px !important',
                        backgroundColor: '#072C40',
                        color: '#fff !important'
                    },
                },
            },
            MuiTableCell: {
                styleOverrides: {
                    root: {
                        '&.MuiTableCell-footer': {
                            padding: '0',
                            minHeight: '50px !important'
                        },
                        textAlign: 'center',
                        border: '1px solid #ddd'
                    },
                },
            },
            // MUIDataTableSelectCell: {
            //     styleOverrides: {
            //         headerCell: {
            //             backgroundColor: 'blue',
            //         },
            //     },
            // },
            // MuiTableFooter: {
            //     styleOverrides: {
            //         root: {
            //             '& .MuiToolbar-root': {
            //                 backgroundColor: 'white',
            //             },
            //         },
            //     },
            // },
            MuiTablePagination: {
                styleOverrides: {
                    root: {
                        width: '100%'
                    }
                }
            },
            MuiTableHead: {
                styleOverrides: {
                    root: {
                        '& .MuiTableCell-root': {
                            backgroundColor: '#2f454e',
                            color: '#fff',
                            height: '20px'
                        }
                    }
                }
            },
            MuiButton: {
                styleOverrides: {
                    root: {
                        width: '100%',
                        color: '#fff !important'
                    }
                }
            },
            MuiSvgIcon: {
                styleOverrides: {
                    root: {
                        color: '#fff !important'
                    }
                }
            },
            MUIDataTableHeadCell: {
                styleOverrides: {
                    sortActive: {
                        color: '#fff'
                    }
                }
            }
        },
    });

    return (
        <ThemeProvider theme={getMuiTheme()}>
            <MUIDataTable title={"ACME Employee list"} data={props.rows} columns={props.columns} options={options} />
        </ThemeProvider>
    );
}
