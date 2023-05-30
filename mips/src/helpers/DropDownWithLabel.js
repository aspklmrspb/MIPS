import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
export default function DropDownWithLabel(props) {
  const [inputval, setInputVal] = React.useState(props.SelectedVal);

  const handleChange = (event) => {
    setInputVal(event.target.value);
  };

  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',width:'100%',marginBottom:'10px' }} >
    <div style={{fontWeight:'bold'}} > {props.InputLabel} &nbsp; : </div>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <Select
                value={props.SelectedVal}
                onChange={props.SubmitButtonCallBack}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
            >
                <MenuItem value="">
                <em>None</em>
                </MenuItem>
                {

                }
                {
                    props.InputValues.length > 0 &&

                    props.InputValues?.map((val, index) => (
                        <MenuItem value={val} key={`${index}_${val}`} >{val}</MenuItem>
                    ))
                }
                {
                    props.InputValuePairs !== undefined && props.InputValuePairs.length > 0 &&

                    props.InputValuePairs?.map((row, index) => (
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
                textTransform:'none',
                background:'linear-gradient(to bottom, #758c95 0%,#5a6b74 100%)',
                boxShadow:'0 3px #333',
                margin:'0px 8px 8px',
                ':hover' : {
                    background:'linear-gradient(to bottom, #95a9b1 0%,#637882 100%)',
                    boxShadow : '0 2px #333'
                    }
                }
                }
                onClick={props.SubmitButtonCallBack}
                >
                    {props.SubmitText}
            </Button>
        }

    </div>
  );
}