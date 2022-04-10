import { Box, Button, OutlinedInput, TextField } from '@mui/material';
import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import bookingSessionImage from "../assets/student_mentor_interacting.png"
function BookingSession() {
    const isMobile= ! useMediaQuery('(min-width:600px)')
    return (
        <Box sx={{
            display:"flex"
        }}>
            <div
                style={
                    {
                        width:"50%",
                        textAlign:"left",
                        margin:"auto"
                    }
                }>
                <p style={{
                    margin: "0px",
                    fontFamily: "Poppins",
                    lineHeight: 1.5,
                    color: "rgb(110, 60, 188)",
                    fontSize: "4rem",
                    fontWeight: 800
                }}>
                    Understand the on ground reality of your university
                </p>
                <p style={{
                    fontFamily: "Poppins",
                    fontSize: "2rem",
                    
                }}>
                    Book one on one mentoring sessions
                    with students around the world
                </p>
            <Button style={{
                    borderRadius:"8px",
                    padding:"8px"
                }}  variant="outlined">Book A Session</Button>
                <Button 
                style={{
                    borderRadius:"8px",
                    marginLeft:"8px",
                    padding:"8px"
                }} variant="contained">Become A Mentor</Button>
            </div>

            <img src={bookingSessionImage}/>
        </Box>
    );
}

export default BookingSession;