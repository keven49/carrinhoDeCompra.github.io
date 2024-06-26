import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

export const HeaderPartial = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/productList"><i className="bi bi-house-door"></i></Nav.Link>
          </Nav>
          <Nav.Link as={Link} to="/cart"><i className="bi bi-cart3"></i></Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
