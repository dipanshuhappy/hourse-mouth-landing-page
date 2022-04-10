import { Box } from '@mui/material';
import React from 'react';
import InfoCard from './InfoCard';
import signUpImage from "../assets/sign_up.png"
interface InfoCardInterface{}
function InfoForStudent() {
    return (
        <Box sx={{
            display:"flex",
            justifyContent:"center"
        }}>
            <InfoCard src={signUpImage} text="STEP 1 : REGISTER AS A STUDENT/PARENT ON HORSE’S MOUTH"/>
            <InfoCard src={signUpImage} text="STEP 1 : REGISTER AS A STUDENT/PARENT ON HORSE’S MOUTH"/>
            <InfoCard src={signUpImage} text="STEP 1 : REGISTER AS A STUDENT/PARENT ON HORSE’S MOUTH"/>
        </Box>
    );
}

export default InfoForStudent;