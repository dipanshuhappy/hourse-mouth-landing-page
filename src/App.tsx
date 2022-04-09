import { ThemeProvider } from '@mui/material';
import createTheme from '@mui/material/styles/createTheme';
import React from 'react';
import './App.css';
import BookingSession from './components/BookingSession';
import TopBar from './components/TopBar';
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
    </div>
    </ThemeProvider>
  );
}

export default App;
