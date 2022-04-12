import { Box, Button, OutlinedInput, TextField } from '@mui/material';
import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import bookingSessionImage from "../assets/student_mentor_interacting.png"
import styles from "../styles/BookingSession.module.css"
function BookingSession() {
    const isMobile = !useMediaQuery('(min-width:600px)')
    return (
        <Box className={styles.root}>
            <Box className={styles.mainDiv}>
                <p className={styles.title}>
                    Understand the on ground reality of your university
                </p>
                <p className={styles.subTitle}>
                    Book one on one mentoring sessions
                    with students around the world
                </p>
                <Button className={styles.button} variant="outlined">Book A Session</Button>
                <Button
                    className={styles.button}
                    style={{
                        marginLeft: "8px",
                    }} variant="contained">Become A Mentor</Button>
            </Box>
            {isMobile ? null : <img className={styles.image} src={bookingSessionImage} />}
        </Box>
    );
}

export default BookingSession;