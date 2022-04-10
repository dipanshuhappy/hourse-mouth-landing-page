import { width } from '@mui/system';
import React from 'react';
interface InfoCardInterface{
    src:string,
    text:string
}
function InfoCard({src,text}:InfoCardInterface) {
    return (
        <div style={{
            width:"300px",
            height:"300px",
            margin:"40px"
        }}>
            <img style={
                {
                    width:"147px",
                    height:"147px"
                }
            } src={src}/>
            <p>{text}</p>
        </div>
    );
}

export default InfoCard;