import React, { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import format from 'date-fns/format';
import { DatePicker } from '@mui/x-date-pickers';
export const DatePickerWithLabel = (props) => {
  return (
    <>
      <div style={{ fontWeight: 'bold', margin: '8px' }}>
        {props.label !== undefined ? `${props.label} : ` : ''}
      </div>
      &nbsp;
      <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
            sx={{ width: '200px' }}
                      onChange= {props.HandleDateInputChange}
                      value={props.Value}
                      name={props.name}
              renderInput={(params) => <input {...params} />}
              renderValue={(value) => (value ? format(value, 'dd/MM/yyyy') : '')}
            />
          </LocalizationProvider>
    </>
  );
};

