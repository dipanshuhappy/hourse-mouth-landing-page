import { Chip } from '@mui/material';
import React from 'react';
interface HorseMouthChipInterface{
    label:string,
    style?:React.CSSProperties
}
function HorseMouthChip({label,style}:HorseMouthChipInterface) {
    return (
        <Chip
        style={{
            backgroundColor:"rgb(212, 207, 255)",
            border:"1px solid rgb(110, 60, 188)",
            margin:"4px",
            fontSize:"11px",
            fontWeight:"bold",
            borderRadius:"8px",
            ...style
        }} label={label} variant="outlined" />
    );
}

export default HorseMouthChip;