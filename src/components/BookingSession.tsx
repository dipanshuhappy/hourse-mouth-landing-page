import { Box, Button, OutlinedInput, TextField } from '@mui/material';
import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
function BookingSession() {
    const isMobile= ! useMediaQuery('(min-width:600px)')
    return (
        
        <Box display="flex" flexDirection="column">
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <p style={{
                fontSize: '4rem',
                textAlign: isMobile?'center':'justify',
                margin: "0px",
                fontWeight: 'normal',
                color: "whitesmoke"

            }}>
                Get Ready to <br />  get and Give Gifts
            </p>
            <h3 style={{
                textAlign: "justify",
                marginLeft: "18%",
                alignSelf: 'baseline',
                fontWeight: 'bold',
                color: "#7e3aba",
                fontSize: "1.5rem"
            }}>
                Get Notified When lauched
            </h3>
        </div>
        <div style={{
            width: "100%",
            display:"flex",
            justifyContent:"center",
            marginLeft:"16px",
            alignItems:"center"
        }}>
            <Button variant="contained"  style={{
                        backgroundColor: "#8633c9",
                        color: "whitesmoke",
                        height: "52px",
                        borderRadius: '16px',
                        width: "25%"
                        
                    }}
                    >Notify Me</Button>
        </div>
        
    </Box>
    );
}

export default BookingSession;