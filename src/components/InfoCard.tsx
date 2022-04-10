import React from 'react';
interface InfoCardInterface{
    src:string,
    text:string
}
function InfoCard({src,text}:InfoCardInterface) {
    return (
        <div>
            <img src={src}/>
            <p>{text}</p>
        </div>
    );
}

export default InfoCard;