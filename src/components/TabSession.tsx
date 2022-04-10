import { Box, Tab, Tabs } from '@mui/material';
import React, { useState } from 'react';
import InfoForMentors from './InfoForMentors';
import InfoForStudent from './InfoForStudent';
import TabPanel from './TabPanel';

function TabSession() {
    const [value,setValue]=useState(0)
    const toggleValue=(event: React.SyntheticEvent, newValue: number)=>{
        console.log({newValue})
        setValue(newValue)
    }
    return (
        <Box>
        <Tabs value={value} onChange={toggleValue} centered>
            <Tab label="Item One" />
            <Tab label="Item Two" />
            <Tab label="Item Three" />
        </Tabs>
        <TabPanel value={value} index={0}>
          <InfoForStudent/>
      </TabPanel>
      <TabPanel value={value} index={0}>
          <InfoForMentors/>
      </TabPanel>
      {/* <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel> */}
        </Box>
        
    );
}

export default TabSession;