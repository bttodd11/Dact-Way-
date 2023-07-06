import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import facebookIcon from "../img/facebook.png";
import instagramIcon from "../img/instagram.png";
import Button from "react-bootstrap/Button";
import "./contact.css";

let contact = () => {
  return (
    <div id="contactSection">
      <Container>
        <Row>
          <p className="contactTitle">Contact</p>
        </Row>
        <Row>
          <Col xs="12" sm="12" md="12">
            <div className="contactBox">
              <p>Email</p>
              <Button variant="dark">Dark</Button>
            </div>
          </Col>
          <Col xs="12" sm="12" md="6">
            <div className="contactBox">
            <span> <img src={facebookIcon} /></span><span> <img src={instagramIcon}/></span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default contact;
