import * as React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const CustomAccordianTable = (props) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {props.ColumnData?.map((column) => (
              <TableCell key={column} sx={{fontWeight:'bold',fontSize:'16px',border:'1px solid #ddd',color:'#000',textAlign:'center',lineHeight:'0.3rem'}}>{column.replaceAll('_',' ').toUpperCase()}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.RowData?.map((row, index) => (
            <TableRow key={index} sx={{ '&:nth-of-type(odd)': { backgroundColor: '#f5f5f5' } }}>
              {
                Object.entries(row).map(([key, value]) => (
                  <TableCell key={`${key}_${index}`} sx={{border:'1px solid #ddd',color:'#666666',textAlign:'center',lineHeight:'0.3rem'}}>{value}</TableCell>
                  ))
              }
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomAccordianTable;
