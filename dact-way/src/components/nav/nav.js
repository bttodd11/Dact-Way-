import React from "react";
import { Nav, Navbar } from 'react-bootstrap';
import { HashLink  } from 'react-router-hash-link';
import Icon from '../img/blackDactWayLogo.PNG';
import "./nav.css";



let nav = () => {
  return (
    <div id="navSection">
      <Navbar>
        <Nav>
        <Navbar.Brand href="#home"><img className="icon"  src={Icon} /></Navbar.Brand>
      <a className="navLink"><HashLink smooth to="#videoSection">About Us</HashLink></a>
      <a className="navLink"><HashLink smooth to="#albumSection">Services</HashLink></a>
      <a className="navLink"><HashLink smooth to="#contactSection">Contact</HashLink></a>
      </Nav>
      </Navbar>
  </div>
  );
};

export default nav;