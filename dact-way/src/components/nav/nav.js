import React from "react";
import { Nav, Navbar } from 'react-bootstrap';
import { HashLink  } from 'react-router-hash-link';
import "./nav.css";



let nav = () => {
  return (
    <div id="navSection">
      <Navbar>
        <Nav>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
     <a className="navLink"><HashLink smooth to="#videoSection">About Us</HashLink></a>
      <a className="navLink"><HashLink smooth to="#albumSection">Services</HashLink></a>
      <a className="navLink"><HashLink smooth to="#contactSection">Contact</HashLink></a>
      </Nav>
      </Navbar>
  </div>
  );
};

export default nav;