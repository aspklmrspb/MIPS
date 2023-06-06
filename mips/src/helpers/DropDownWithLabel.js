import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';


/// Description 
//SelectedVal  :  Value of Dropdown 
//InputLabel : Label of Dropdown
//DropDownChangeCallback : Select button onchange event callback funtion
//showDefaultText : True | False
// InputValues : Dropdown values
//LabelValuePairs : Dropdown Valus with different Label

export default function DropDownWithLabel(props) {
    const [inputval, setInputVal] = React.useState(props.SelectedVal);

    const handleChange = (event) => {
        setInputVal(event.target.value);
    };

    return (
        <>
            <div style={{ fontWeight: 'bold', margin: '8px 8px 0px' }} > {props.label} &nbsp; : </div>
            <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
                <Select
                    value={props.SelectedVal}
                    onChange={props.DropDownChangeCallback}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    name={props.name}

                >
                    {
                        props.showDefaultText !== undefined &&
                        <MenuItem value="">
                            <em>--- Select --- </em>
                        </MenuItem>

                    }
                    {
                        props.DropDownValues !== undefined && props.DropDownValues.length > 0 &&

                        props.DropDownValues?.map((val, index) => (
                            <MenuItem value={val} key={`${index}_${val}`} >{val}</MenuItem>
                        ))
                    }
                    {
                        props.LabelValuePairs !== undefined && props.LabelValuePairs.length > 0 &&

                        props.LabelValuePairs?.map((row, index) => (
                            Object.entries(row).map(([label, value]) => (
                                <MenuItem value={value} key={`${index}_${label}`} >{label}</MenuItem>

                            ))
                        ))
                    }
                </Select>
            </FormControl>
            {
                props.ShowButton === "true" &&
                <Button variant="contained" size="large"
                    sx={{
                        textTransform: 'none',
                        background: 'linear-gradient(to bottom, #758c95 0%,#5a6b74 100%)',
                        boxShadow: '0 3px #333',
                        margin: '0px 8px 8px',
                        ':hover': {
                            background: 'linear-gradient(to bottom, #95a9b1 0%,#637882 100%)',
                            boxShadow: '0 2px #333'
                        }
                    }
                    }
                    onClick={props.DropDownChangeCallback}
                >
                    {props.SubmitText}
                </Button>
            }

        </>
    );
}