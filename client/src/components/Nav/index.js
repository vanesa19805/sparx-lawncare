import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavLinks(props) {
  return (
    <div>
      <Navbar bg="light" expand="lg">        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>            
            <Nav.Link href="#contact">Contact</Nav.Link> 
          </Nav>          
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavLinks;
