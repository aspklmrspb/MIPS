import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

export default function RadioButtonsWithLabel(props) {
  return (
    <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-form-control-label-placement"
        name="position"
        defaultValue={props.SelectedVal}
        value={props.SelectedVal}
        onChange={props.RadioButtonCallBack} // Updated prop name
      >
        {props.RadioValuePairs !== undefined && props.RadioValuePairs.length > 0 && (
          props.RadioValuePairs.map((row, index) => (
            <FormControlLabel
              value={row.RadioValue}
              control={<Radio />}
              label={row.RadioLabel}
              key={`${index}_${row.RadioLabel}`}
            />
          ))
        )}
      </RadioGroup>
    </FormControl>
  );
}
