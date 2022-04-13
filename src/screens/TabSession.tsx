import { Box, Tab, Tabs } from '@mui/material';
import React, { useState } from 'react';
import InfoForMentors from '../components/InfoForMentors';
import InfoForStudent from '../components/InfoForStudent';
import TabPanel from '../components/TabPanel';
import styles from "../styles/TabSession.module.css"
function TabSession() {
    const [value, setValue] = useState(0)
    const toggleValue = (event: React.SyntheticEvent, newValue: number) => {
        console.log({ newValue })
        setValue(newValue)
    }
    return (
        <Box className={styles.root}>
            <Tabs value={value} onChange={toggleValue} centered>
                <Tab label="For students & PARENTS" />
                <Tab label="For COLLEGE STUDENTS & ALUMNI" />
            </Tabs>
            <TabPanel value={value} index={0}>
                <InfoForStudent />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <InfoForMentors />
            </TabPanel>
        </Box>
    );
}

export default TabSession;