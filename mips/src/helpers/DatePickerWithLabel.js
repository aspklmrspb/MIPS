import * as React from 'react';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export const DatePickerWithLabel = (props) => {
  return (
    <>
      <div style={{ fontWeight: 'bold', margin: '8px' }}>
        {props.label !== undefined ? `${props.label} : ` : ''}
      </div>
      &nbsp;
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          sx={{ width: '150px' }}
          onChange= {props.HandleDateInputChange}
          value={dayjs(props.Value)}
          format="DD/MM/YYYY"
          name={props.name}
        />
      </LocalizationProvider>
    </>
  );
};
