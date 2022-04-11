import { Box, Button } from '@mui/material';
import React from 'react';
import logo from "../assets/logo.png"
import styles from "../styles/TopBarCss"
function TopBar() {
    const classes=styles()
    return (
        <Box className={classes.roo}>
            <img style={{
                height:"64px"

            }} src={logo} /> 
            <Box sx={{
                alignSelf:"center"
            }}>
                <Button style={{
                    borderRadius:"8px",
                    padding:"8px"
                }}  variant="outlined">LOGIN</Button>
                <Button 
                style={{
                    padding:"8px"
                }} variant="contained">SIGN UP</Button>
            </Box>


        </Box>
    );
}

export default TopBar;