import { Box, Button } from '@mui/material';
import React from 'react';
import logo from "../../assets/logo.png"
function TopBar() {
    return (
        <Box sx={{
            display:"flex",
            justifyContent:"space-between",
            margin:"32px",
            marginTop:"4px"
        }}>
            <img style={{
                height:"64px"

            }} src={logo} />
            <Box sx={{
                alignSelf:"center"
            }}>
                <Button style={{
                    borderRadius:"8px"
                }}  variant="outlined">LOGIN</Button>
                <Button 
                style={{
                    borderRadius:"8px",
                    marginLeft:"8px"
                }} variant="contained">SIGN UP</Button>
            </Box>


        </Box>
    );
}

export default TopBar;