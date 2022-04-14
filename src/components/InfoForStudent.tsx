import { Box, useMediaQuery } from '@mui/material';
import React from 'react';
import InfoCard from './InfoCard';
import signUpImage from "../assets/sign_up.png"
import calender from "../assets/calender.png"
import chatBubble from "../assets/chat_bubble_over_head.png"
function InfoForStudent() {
    const isMobile = !useMediaQuery('(min-width:600px)')
    return (
        <Box sx={{
            display:"flex",
            flexDirection:isMobile?"column":"row",
            justifyContent:"center"
        }}>
            <InfoCard src={signUpImage} text="STEP 1 : REGISTER AS A STUDENT/PARENT ON HORSE’S MOUTH"/>
            <InfoCard src={calender} text="Step 2 : SCHEDULE A CALL WITH THE BEST MENTORS AROUND THE WORLD"/>
            <InfoCard src={chatBubble} text="Step 3 : LEARN FROM YOUR MENTOR AND MAKE BETTER COLLEGE DECISIONS"/>
        </Box>
    );
}

export default InfoForStudent;