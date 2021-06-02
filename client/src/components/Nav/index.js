import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavLinks(props) {
  return (
    <div>
      <Navbar bg="light" expand="lg">        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto ps-4">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/servicepage">Services</Nav.Link>            
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link> 
          </Nav>          
        </Navbar.Collapse>
      </Navbar>
    </div>
    
  );
}

export default NavLinks;
