import React from "react";
import { Nav, Navbar, Badge, Button, Container } from 'react-bootstrap';
import Icon from '../img/blackDactWayLogo.PNG';

import "./nav.css";

let nav = () => {
  return (
    <div id="navSection">
      <Navbar.Brand href="#home"><img className="icon"  src={Icon} /></Navbar.Brand>
      <Container>
      <Nav className="justify-content-end">
      <div className="navTextSection">
      <a className="navLink">About Us</a>
      <a className="navLink">Services</a>
      <a className="navLink">Contact</a>
      </div>
      </Nav>
      </Container>
  </div>
  );
};

export default nav;