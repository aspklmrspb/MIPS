import * as React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const CustomTable = ({ columnData, rowData }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {columnData?.map((column) => (
              <TableCell key={column}>{column}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rowData?.map((row, index) => (
            <TableRow key={index} sx={{ '&:nth-of-type(odd)': { backgroundColor: '#f5f5f5' } }}>
              {row.map((cell, cellIndex) => (
                <TableCell key={cellIndex}>{cell}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;
