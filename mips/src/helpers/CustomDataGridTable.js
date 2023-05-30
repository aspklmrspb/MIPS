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



  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarExport />
      </GridToolbarContainer>
    );
  }
export default function CustomDataGridTable(props) {
    const columns = props.ColumnData !== undefined ? props.ColumnData.map((obj) => {
        return {
              ...obj,
            align:'center', 
            headerAlign: 'center', 
            headerClassName:'table--header'
        };
      }) : [];
    const rows = props.RowData !== undefined ? props.RowData.map((obj, index) => {
        return {
            ...obj,
            id: (index+1)
        };
      }) : [];
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
                sx={{width: '100%'}}
                components={{Toolbar: CustomToolbar,}}
                rows={rows} 
                columns={columns}
            />
        </Box>
    );
}

