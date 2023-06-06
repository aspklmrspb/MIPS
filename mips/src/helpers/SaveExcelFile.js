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
    });

    // Generate the Excel file
    workbook.xlsx.writeBuffer().then(buffer => {
        const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        saveAs(blob, `${fileName}.xlsx`);
    });
};
