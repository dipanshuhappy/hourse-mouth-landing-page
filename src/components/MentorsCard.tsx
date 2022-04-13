import { Avatar, Chip, Grid, Paper } from '@mui/material';
import React from 'react';
import Tick from '../assets/Tick';
import HorseMouthChip from './HorseMouthChip';
import image from "../assets/anuj.png"
import styles from "../styles/MentorsCard.module.css"
import { MentorInterface } from '../models/MentorInterface'
function MentorsCard({name,avatar,collegeName,branch,specialization,type}:MentorInterface) {
    return (
       <Paper className={styles.root}>
           <Avatar alt="Remy Sharp" src={avatar} className={styles.avatar}/>
           <Grid container className={styles.card} >
           <p className={styles.name}>{name}</p>
           <Tick className={styles.tickIcon} width="16px" height="16px" />
           <HorseMouthChip style={{
               width:"100%"
           }} label={collegeName}  />
           <HorseMouthChip label={branch} />
           <HorseMouthChip label={specialization}/>
           <HorseMouthChip label={type}/>
           </Grid>
       </Paper>
    );
}

export default MentorsCard;