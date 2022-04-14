import { ThemeProvider } from '@mui/material';
import createTheme from '@mui/material/styles/createTheme';
import React from 'react';
import './App.css';
import BookingSession from './screens/BookingSession';
import TabSession from './screens/TabSession';
import TopBar from './screens/TopBar';
import TopMentors from './screens/TopMentors';
import Footer from './screens/Footer';
import ImageInfoSession from './screens/ImageInfoSession';
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
      fontFamily: "Poppins, sans-serif;",
  },

});
function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
    <div className='circle'></div>
      <TopBar/>
      <BookingSession/>
      <TabSession/>
      <TopMentors/>
     <ImageInfoSession/>
      <Footer/>
    </div>
    </ThemeProvider>
  );
}

export default App;
