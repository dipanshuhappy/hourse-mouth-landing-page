import { Box, Button } from '@mui/material';
import React from 'react';
import logo from "../assets/logo.png"
import styles from"../styles/TopBar.module.css"
function TopBar() {
    return (
        <Box 
        className={styles.root}>
            <img alt="Image" className={styles.image} src={logo} /> 
            <Box className={styles.buttonContainer}>
                <Button className={styles.button}  variant="outlined">LOGIN</Button>
                <Button className={styles.button} style={{marginLeft:"8px"}} variant="contained">SIGN UP</Button>
            </Box>
        </Box>
    );
}

export default TopBar;