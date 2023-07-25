import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/productList"><i className="bi bi-house-door"></i></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/productList"><i className="bi bi-shop"></i></Nav.Link>
          </Nav>
          <Nav.Link as={Link} to="/cart"><i className="bi bi-cart3"></i></Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


// import React from "react";
// import { Nav } from "react-bootstrap";
// import { Link, NavLink } from "react-router-dom";

// function Sidebar() {
//     return (
//         <Nav className="flex-column sidebar">
//             <NavLink exact to="/" className="nav-link" activeClassName="active">
//                 Home
//             </NavLink>
//             <NavLink exact to="/about" className="nav-link" activeClassName="active">
//                 About
//             </NavLink>
//             <NavLink exact to="/listUsers" className="nav-link" activeClassName="active">
//                 ListUsers
//             </NavLink>
//             <NavLink exact to="/cadastro" className="nav-link" activeClassName="active">
//                 Cadastro 
//             </NavLink>
//             <NavLink exact to="/cadastro" className="nav-link" activeClassName="active">
//                 Cadastro Redux
//             </NavLink>
//         </Nav>
//     );
// }

// export default Sidebar;
