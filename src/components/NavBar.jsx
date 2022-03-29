import React from 'react'
import logo from '../images/logo-v2.png'
import navBar from '../css/navBar.css'
import CartWidget from './CartWidget.jsx';
import Navbar  from "react-bootstrap/Navbar";
import Nav  from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import {NavLink,Link} from 'react-router-dom' 

function NavBar() {
  return (
    
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <NavLink to='/'><img src={logo} className="logo-imagen"></img></NavLink>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <NavLink to="categoria/hoodies" className="tituloCategoria">Hoodies</NavLink>
      <NavLink to="categoria/jackets" className="tituloCategoria">Jackets</NavLink>
      <NavLink to="categoria/sneakers" className="tituloCategoria">Sneakers</NavLink>
      <NavLink to="categoria/remeras" className="tituloCategoria">Remeras</NavLink>
    </Nav>
    <Nav>
      <NavLink eventKey={2} to="cart">
      <CartWidget/>
      </NavLink>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  )
}
export default NavBar;