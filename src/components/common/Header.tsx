import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from "react-router-dom";
import "./Header.css";

const navLinkStyle = {
  color: "white",
  fontFamily: "Varela Round",
  marginLeft: 20,
  marginRight: 20
};

export default () => {
  return (
    <div className="headerSection" style={{ backgroundColor: "#212121" }}>
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand href="#home"><img alt="ritesh.dev" height="80" width="220" src="https://user-images.githubusercontent.com/45563022/89736314-2b96d700-da86-11ea-9fe9-06c416034218.gif" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className="navlink" style={navLinkStyle} as={NavLink} to='/' exact><span className="navlinkText">Home</span></Nav.Link>
            <Nav.Link className="navlink" style={navLinkStyle} as={NavLink} to='/about'><span className="navlinkText">About</span></Nav.Link>
            <Nav.Link className="navlink" style={navLinkStyle} as={NavLink} to='/blogs'><span className="navlinkText">Blogs</span></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}