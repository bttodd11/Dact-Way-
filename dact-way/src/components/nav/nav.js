import React from "react";
import { Nav, Navbar, Badge, Button, Container } from 'react-bootstrap';
import Icon from '../img/blackDactWayLogo.PNG';
import { HashLink } from 'react-router-hash-link';
import "./nav.css";

let nav = () => {
  return (
    <div id="navSection">
      <Navbar.Brand href="#home"><img className="icon"  src={Icon} /></Navbar.Brand>
      <Container>
      <Nav className="justify-content-end">
      <div className="navTextSection">
      <a className="navLink"><HashLink smooth to="aboutSection">About Us</HashLink></a>
      <a className="navLink"><HashLink smooth to="servicesSection">Services</HashLink></a>
      <a className="navLink"><HashLink smooth to="contactSection">Contact</HashLink></a>
      </div>
      </Nav>
      </Container>
  </div>
  );
};

export default nav;