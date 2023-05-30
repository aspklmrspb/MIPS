import * as React from 'react';
import { DataGrid, GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid';
import Box from '@mui/material/Box';

const rows = [
    {
        tin :"123456789",
        qmCMSScore:'No',
        qmScore:0.00,
        iaCMSSCore:'Yes',
        iaScore:4.50,
        id : 1 
    },
    {
        tin :"123456789",
        qmCMSScore:'No',
        qmScore:0.00,
        iaCMSSCore:'Yes',
        iaScore:4.50,
        id : 2 
    },
    {
        tin :"123456789",
        qmCMSScore:'No',
        qmScore:0.00,
        iaCMSSCore:'Yes',
        iaScore:4.50,
        id : 3 
    },
    {
        tin :"123456789",
        qmCMSScore:'No',
        qmScore:0.00,
        iaCMSSCore:'Yes',
        iaScore:4.50,
        id : 4 
    },
    {
        tin :"123456789",
        qmCMSScore:'No',
        qmScore:0.00,
        iaCMSSCore:'Yes',
        iaScore:4.50,
        id : 5 
    },
    {
        tin :"123456789",
        qmCMSScore:'No',
        qmScore:0.00,
        iaCMSSCore:'Yes',
        iaScore:4.50,
        id : 6 
    },
    {
        tin :"123456789",
        qmCMSScore:'No',
        qmScore:0.00,
        iaCMSSCore:'Yes',
        iaScore:4.50,
        id : 7 
    },
    {
        tin :"123456789",
        qmCMSScore:'No',
        qmScore:0.00,
        iaCMSSCore:'Yes',
        iaScore:4.50,
        id : 8 
    },
    {
        tin :"123456789",
        qmCMSScore:'No',
        qmScore:0.00,
        iaCMSSCore:'Yes',
        iaScore:4.50,
        id : 9 
    },
    {
        tin :"123456789",
        qmCMSScore:'No',
        qmScore:0.00,
        iaCMSSCore:'Yes',
        iaScore:4.50,
        id : 10 
    },
    {
        tin :"123456789",
        qmCMSScore:'No',
        qmScore:0.00,
        iaCMSSCore:'Yes',
        iaScore:4.50,
        id :11 
    },
    {
        tin :"123456789",
        qmCMSScore:'No',
        qmScore:0.00,
        iaCMSSCore:'Yes',
        iaScore:4.50,
        id : 12 
    },
    {
        tin :"123456789",
        qmCMSScore:'No',
        qmScore:0.00,
        iaCMSSCore:'Yes',
        iaScore:4.50,
        id : 13 
    },
    {
        tin :"123456789",
        qmCMSScore:'No',
        qmScore:0.00,
        iaCMSSCore:'Yes',
        iaScore:4.50,
        id : 14 ,
        test2:'dsd'
    }
  ];
  const customToolbarCss =  {
    backgroundColor: '#4a5b63',
    color: '#fff'
} 
const columns = [
    { field: 'tin', headerName: 'TIN' , flex: 1 ,align:'center', headerAlign: 'center', headerClassName:'table--header' },
    { field: 'qmCMSScore', headerName: 'QM CMS Status',flex: 1 ,align:'center', headerAlign: 'center', headerClassName:'table--header' },
    { field: 'qmScore', headerName: 'QM Score' ,flex: 1 ,align:'center', headerAlign: 'center', headerClassName:'table--header'  },
    { field: 'iaCMSSCore', headerName: 'IA CMS Status',flex: 1 ,align:'center', headerAlign: 'center', headerClassName:'table--header'  },
    { field: 'iaScore', headerName: 'IA Score',flex: 1 ,align:'center', headerAlign: 'center', headerClassName:'table--header'  },
  ];


  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarExport />
      </GridToolbarContainer>
    );
  }
  export default function CustomDataGridTable() {
 

    const customHeaderCss =  {
        backgroundColor: '#4a5b63',
        color: '#fff'
    }
    return (
        <Box
      sx={{
        height: 400,
        width: '100%',
        '& .table--header': {
          backgroundColor: '#072C40',
          color:'#fff',
        },
      }}
    >
    <DataGrid 
        components={{Toolbar: CustomToolbar,}}
        rows={rows} 
        columns={columns}
    />
    </Box>
    //   <div style={{ height: 400, width: '100%' }}>
    //     <DataGrid
    //       rows={rows}
    //       columns={columns}
    //       components={{
    //         Toolbar: CustomToolbar,
    //       }}
    //       componentsProps={{
    //         toolbar: {
    //           className: {customToolbarCss}, // Add a custom class name to the toolbar component
    //         },
    //       }}
    //       classes={{
    //         header: {customHeaderCss}, // Add a custom class name to the header component
    //       }}
    //       sx={{width:'100%', textAlign:'center'}}
    //     />
    //   </div>
    );
  }

