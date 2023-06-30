import React from "react";
import { Nav, Navbar, Badge, Button, Container } from 'react-bootstrap';
import { HashLink  } from 'react-router-hash-link';
import Icon from '../img/blackDactWayLogo.PNG';

import "./nav.css";

let nav = () => {
  return (
    <div id="navSection">
      <Navbar.Brand href="#home"><img className="icon"  src={Icon} /></Navbar.Brand>
      <Container>
      <Nav className="justify-content-end">
      <div className="navTextSection">
      <a className="navLink"><HashLink smooth to="#videoSection">About Us</HashLink></a>
      <a className="navLink"><HashLink smooth to="#albumSection">Services</HashLink></a>
      <a className="navLink"><HashLink smooth to="#contactSection">Contact</HashLink></a>
      </div>
      </Nav>
      </Container>
  </div>
  );
};

export default nav;