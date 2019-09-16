import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import * as ROUTES from '../../routes';

const Navigation = () => (
  <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">ZenKlub</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href={ROUTES.SIGN_OUT}>Sign Out</Nav.Link>
        <Nav.Link href={ROUTES.LANDING}>Landing</Nav.Link>
        <Nav.Link href={ROUTES.HOME}>Home</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Navigation;
