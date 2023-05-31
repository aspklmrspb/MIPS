import * as React from 'react';
import { DataGrid, GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid';
import Box from '@mui/material/Box';

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
            flex:1,
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
                sx={{width: '100%', overflow:'auto'}}
                components={{Toolbar: CustomToolbar,}}
                rows={rows} 
                columns={columns}
            />
        </Box>
    );
}

