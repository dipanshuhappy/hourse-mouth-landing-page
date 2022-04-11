import { Box } from '@mui/material';
import React from 'react';
import MentorsCard from './MentorsCard';

function TopMentors() {
    return (
        <Box sx={{
            width:"100%",
            height:"80vh",
            backgroundColor: "rgb(114, 103, 203)",
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center"
        }}>
            <div>
            <p>Top Mentors</p>
            </div>
            <div style={{
                display:"flex",
                width:"100%",
                justifyContent:"space-evenly"
            }}>
            <MentorsCard/>            
            <MentorsCard/>            
            <MentorsCard/>
            </div>
        </Box>
    );
}

export default TopMentors;