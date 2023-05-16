import React from 'react';
import { Outlet  } from 'react-router-dom';
import Navbox from '../Navbox';
import { Container } from '@mui/material';

const Rootoutlet = () => {
  return (
    <div>
      <Navbox/>
      <Container sx={{p:5}}>
      <Outlet/>
      </Container>
    </div> 
  )
}

export default Rootoutlet
