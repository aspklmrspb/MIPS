import React from 'react';
import ExcelJS from 'exceljs';
import { saveAs } from 'file-saver';


export const SaveExcelFile = async (excelData, fileName) => {
    const workbook = new ExcelJS.Workbook();

    excelData.map((item) => {
        const worksheet = workbook.addWorksheet(item.sheetName);
        // Add columns to the worksheet
        worksheet.columns = item.columns;
        const headerRow = worksheet.getRow(1);
        headerRow.eachCell((cell, colNumber) => {
            cell.fill = {
                type: 'pattern',
                pattern: 'solid',
                //fgColor: { argb: item.headerBackgroundColor },
            };
            cell.alignment = { vertical: 'middle', horizontal: 'center' };
            cell.font = { bold: true };
        });
        // Add row data to the worksheet
        item.rowData.forEach(row => {
            worksheet.addRow(row);
        });

        if (item.freezeColumns > 0) {
            worksheet.views = [
                {
                    state: 'frozen',
                    xSplit: item.freezeColumns,
                    ySplit: 1,
                },
            ];
        }

        // Merge cells based on given range dynamically
    if (item.mergeRange) {
        const { startRow, startColumn, endRow, endColumn } = item.mergeRange;
        if (
          startRow &&
          startColumn &&
          endRow &&
          endColumn &&
          startRow <= endRow &&
          startColumn <= endColumn
        ) {
            for (let row = startRow; row <= endRow; row++) {
                for (let column = startColumn; column <= endColumn; column++) {
                  const cell = worksheet.getCell(row, column);
                  cell.alignment = { vertical: 'middle', horizontal: 'center' };
                  cell.fill = {
                    type: 'pattern',
                    pattern: 'solid',
                    fgColor: { argb: 'FFFF00' },
                  };
                }
              }
          worksheet.mergeCells(startRow, startColumn, endRow,endColumn );

        
        
        }
      }
    
    });

    // Generate the Excel file
    workbook.xlsx.writeBuffer().then(buffer => {
        const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        saveAs(blob, `${fileName}.xlsx`);
    });
};
