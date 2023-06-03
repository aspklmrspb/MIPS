import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';




export const BasicTextField = (props) => {
    const [show, setShowPassword] = useState(false);
    const IconDetails = props.IconDetails === undefined ? "" : {
        startAdornment: (
            <InputAdornment position={props.IconDetails.Position}>
                {props.IconDetails.IconComponent}
            </InputAdornment>
        ),
    };

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    return (
        <>
            <div style={{ fontWeight: 'bold',margin:'8px'}} > {props.InputLabel !== undefined ? `${props.InputLabel} : `:""}</div>
            &nbsp;
            <TextField
                variant={props.variantType}
                placeholder={props.PlaceHolder}
                autoComplete='off'
                onChange={props.HandleInputChange}
                label={props.Label}
                size={props.Size}
                InputProps={IconDetails}
                type={props.type}
                value={props.InputValue}
                name = {props.name}
            />

        </>
    );
}

export const BasicTextArea = (props) => {
    const IconDetails = props.IconDetails === undefined ? "" : {
        startAdornment: (
            <InputAdornment position={props.IconDetails.Position}>
                {props.IconDetails.IconComponent}
            </InputAdornment>
        ),
    };
    return (
        <>
            <div style={{ fontWeight: 'bold' }} > {props.InputLabel} &nbsp; :&nbsp;</div>
            <TextField
                multiline
                variant={props.variantType}
                placeholder={props.PlaceHolder}
                autoComplete='off'
                onChange={props.HandleInputChange}
                label={props.Label}
                size={props.Size}
                minRows={props.TextArea.MinRows}
                maxRows={props.TextArea.MaxRows}
                type={props.type}
                InputProps={IconDetails}
                name = {props.name}
                value={props.InputValue}
            />
        </>
    );

}