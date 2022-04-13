import { Box } from '@mui/material';
import React from 'react';
import InfoCard from './InfoCard';
import signUpImage from "../assets/sign_up.png"
import calender from "../assets/calender.png"
import piggyBank from "../assets/piggy_bank.png"
function InfoForMentors() {
    return (
        <Box sx={{
            display:"flex",
            justifyContent:"center"
        }}>
            <InfoCard src={signUpImage} text="Step 1 : REGISTER AS A MENTOR on Horse’s Mouth"/>
            <InfoCard src={calender} text="Step 2 :  Upload your schdeule with 24 hr flexible slot timings"/>
            <InfoCard src={piggyBank} text="Step 3 : Talk to students and earn money !"/>
        </Box>
    );
}

export default InfoForMentors;