import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar }  from 'react-bootstrap';
import {NavLink} from 'react-router-dom';


const Navbox = () => {
  return (
    <div>
        <Navbar bg="primary" expand="lg">
            <Container>
            <Navbar.Brand to="#home">Empolyee-Management-system</Navbar.Brand>
                <NavLink style={{color:"black"}} to="/Login">Login</NavLink> 
                <NavLink style={{color:"black"}} to="/">Logout</NavLink>
            </Container> 
        </Navbar>
         <h1>Employee-Management</h1>
     </div>
  )
}

export default Navbox
