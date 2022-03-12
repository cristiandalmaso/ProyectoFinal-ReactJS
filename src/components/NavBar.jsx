import React from 'react'
import logo from '../images/logo.png'
import navBar from '../css/navBar.css'
import CartWidget from './CartWidget.jsx';
import Navbar  from "react-bootstrap/Navbar";
import Nav  from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

function NavBar() {
  return (
    
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home"><img src={logo} className="logo-imagen"/><br></br>Hood FSH</Navbar.Brand>

    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
    <CartWidget/> 
  </Navbar> 
  )
}
export default NavBar;