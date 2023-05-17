import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar }  from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
// import Navbar from 'react-bootstrap/Navbar';
// import { BrowserRouter as Routes, Route,Navigate } from 'react-router-dom';
// import Login from './tables/Login';
// import App from './App';


const Navbox = () => {
  return (
    <div>
        <Navbar bg="primary" expand="lg">
            <Container>
            <Navbar.Brand to="#home">Empolyee-Management-system</Navbar.Brand>
                <NavLink style={{color:"black"}} to="/Login">Login</NavLink> 
                {/* <NavLink style={{color:"black"}} to="/App">AddUser</NavLink> */}
                <NavLink style={{color:"black"}} to="/">Logout</NavLink>
            </Container> 
        </Navbar>
         <h1>Employee-Management</h1>
     </div>
  )
}

export default Navbox
