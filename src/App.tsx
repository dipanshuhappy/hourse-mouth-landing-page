import { ThemeProvider } from '@mui/material';
import createTheme from '@mui/material/styles/createTheme';
import React from 'react';
import './App.css';
import BookingSession from './components/BookingSession';
import TabSession from './components/TabSession';
import TopBar from './components/TopBar';
import TopMentors from './components/TopMentors';
import hourseMouthInfo  from "./assets/hourse_mouth_info.png"
import startUpImage from "./assets/start_up_india_logo.png"
import hactchery from "./assets/bennett_hactchery_logo.png"
import { width } from '@mui/system';
import Footer from './components/Footer';
const theme = createTheme({
  palette: {
      primary: {
          main: '#6E3CBC',
          light: "#FFFFFF"
      },
      secondary: {
          main: '#fff',
      },
      text: {
          primary: '#6E3CBC',
      }
  },
  typography: {
      fontFamily: 'Poppins',

  },

});
function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <TopBar/>
      <div className='circle'>
      </div>
      <BookingSession/>
      <TabSession/>
      <TopMentors/>
      <img src={hourseMouthInfo}/>
      <div style={{
        display:"flex",
        justifyContent: "space-around",
        alignItems: "center"
      }}>
        <img width="30%"  src={startUpImage}/>
        <img height="30%" width="30%" src={hactchery}/>
      </div>
      <Footer/>
    </div>
    </ThemeProvider>
  );
}

export default App;
