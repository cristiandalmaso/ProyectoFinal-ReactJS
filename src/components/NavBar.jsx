import React from 'react'
import logo from '../images/logo-v2.png'
import navBar from '../css/navBar.css'
import CartWidget from './CartWidget.jsx';
import Navbar  from "react-bootstrap/Navbar";
import Nav  from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavBar() {
  return (
    
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home"><img src={logo} className="logo-imagen"></img></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#hoodies">Hoodies</Nav.Link>
      <Nav.Link href="#jackets">Jackets</Nav.Link>
      <Nav.Link href="#sneakers">Sneakers</Nav.Link>
      <Nav.Link href="#sneakers">Remeras</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link eventKey={2} href="#cart">
      <CartWidget/>
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  )
}
export default NavBar;