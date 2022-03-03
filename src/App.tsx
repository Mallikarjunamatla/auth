import React, { useState } from 'react';
import { Box } from '@mui/material';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import { Navigate } from 'react-router-dom';
import Home from './components/Home';

function App() {
  //logged can be retrived via redux call
  const [ isLogged ,setLogged] = useState<boolean>(false);
  return (
   <Box>
     {!isLogged ? <Navigate to='/login' /> : <Home />}
   </Box>
  );
}

export default App;
