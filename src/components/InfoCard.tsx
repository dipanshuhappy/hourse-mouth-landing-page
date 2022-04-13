import { width } from '@mui/system';
import React from 'react';
import { InfoCardInterface } from '../models/InfoCardInterface';
import styles from "../styles/InfoCard.module.css"
function InfoCard({src,text}:InfoCardInterface) {
    return (
        <div className={styles.root}>
            <img width="147px" height="147px" src={src}/>
            <p className={styles.text}>{text}</p>
        </div>
    );
}

export default InfoCard;