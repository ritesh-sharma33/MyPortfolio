import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const navLinkStyle = {
  color: "white",
  fontFamily: "Varela Round",
  marginLeft: 20,
  marginRight: 20
};

export default ({}) => {
  return (
    <div className="headerSection" style={{ backgroundColor: "#212121" }}>
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand href="#home"><img height="80" width="220" src="https://user-images.githubusercontent.com/45563022/89736314-2b96d700-da86-11ea-9fe9-06c416034218.gif" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <a><Nav.Link className="navlink" style={navLinkStyle} as={NavLink} to='/' exact>Home</Nav.Link></a>
            <Nav.Link className="navlink" style={navLinkStyle} as={NavLink} to='/about'>About</Nav.Link>
            <Nav.Link className="navlink" style={navLinkStyle} as={NavLink} to='/blogs'>Blogs</Nav.Link>
            <Nav.Link className="navlink" style={navLinkStyle} as={NavLink} to='/contact'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}