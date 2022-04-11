import { Avatar, Chip, Grid, Paper } from '@mui/material';
import React from 'react';
import Tick from '../assets/Tick';
import HorseMouthChip from './HorseMouthChip';
import image from "../assets/anuj.png"
function MentorsCard() {
    return (
       <Paper style={{
           width:"270px",
           height:"200px",
           position:"relative"
       }}>
           <Avatar alt="Remy Sharp" src={image} sx={{
               width:"75px",
               height:"75px",
               position:"absolute",
               zIndex:2,
               top:"50%",
               left:"-35px"

           }}/>
           <Grid container sx={{
               padding:"16px 16px 16px 40px"
           }} >
            
           <p>Anuj Jain</p>
           <Tick width="32px" height="32px" />
           <HorseMouthChip style={{
               width:"100%"
           }} label="University of Waterloo"  />
           <HorseMouthChip label="University of Waterloo" />
           <HorseMouthChip label="University of Waterloo"/>
           <HorseMouthChip label="Uni" />


           </Grid>
       </Paper>
    );
}

export default MentorsCard;