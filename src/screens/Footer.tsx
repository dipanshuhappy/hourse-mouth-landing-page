import { Box, Link } from '@mui/material';
import React from 'react';
import { Instagram, LinkedIn, Twitter } from "@mui/icons-material";
function Footer() {
    return (
        <Box sx={{
            minHeight:"50vh",
            backgroundColor:"rgb(212, 207, 255)"
        }}>
            <div>
                <Link href="#" underline="none">Home</Link>
                <Link href="#" underline="none">Become a mentor</Link>
                <Link href="#" underline="none">Book a session</Link>
                <Link href="#" underline="none">Terms & Conditions</Link>
                
                <Box display={"flex"} width={100} justifyContent={"space-between"} sx={{ ['@media (max-width:470px)']: { fontSize: 15, textAlign: "center", width: "30vw", marginTop: 2, marginBottom: 2 } }}>
                            <Instagram color={"primary"} onClick={()=>{window.open("https://instagram.com/horsesmouth.in?utm_medium=copy_link")}} style={{cursor:"pointer"}}/>
                            <LinkedIn color={"primary"} onClick={()=>{window.open("https://www.linkedin.com/company/horse-s-mouth")}} style={{cursor:"pointer"}}/>
                            <Twitter color={"primary"} />
                </Box>
            </div>
            <div>
            <p>UNDERSTAND THE NEXT 2-4 YEARS,IN THE NEXT 20 MINUTES.</p>
            <p>Email us at
            raunak.horsesmouth@gmail.com</p>
            </div>
        </Box>
    );
}

export default Footer;