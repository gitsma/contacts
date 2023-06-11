import React from 'react';
import Container from 'react-bootstrap/Container';
import { Navbar, NavbarBrand, NavItem, NavDropdown, MenuItem, Nav, Form, FormControl, Button } from 'react-bootstrap';

const MyNavbar = () => {
  return (

    <Navbar bg='light' expand='lg'>
    <NavbarBrand href="#home">Contacts</NavbarBrand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className='mr-auto'>
        <Nav.Link href="#home"></Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>

  )
}

export default MyNavbar
