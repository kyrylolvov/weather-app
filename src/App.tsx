import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Main from './pages/Main';

import './App.css';

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'KumbhSans',
    },
  },
});

const App = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
    <Toaster
      position="top-right"
      toastOptions={{
        style: {
          fontWeight: 500,
        },
      }}
    />
  </ThemeProvider>
);

export default App;
