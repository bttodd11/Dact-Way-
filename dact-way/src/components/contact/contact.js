import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import facebookIcon from "../img/facebook.png";
import instagramIcon from "../img/instagram.png";
import emailIcon from "../img/emailIcon.png";
import Button from "react-bootstrap/Button";
import "./contact.css";

let contact = () => {
  return (
    <div id="contactSection">
      <Container>
      <p className="contactTitle">Contact</p>
      <Card className="contactCard">
      <Card.Body>
      <Card.Text className="statText">
          <img src={facebookIcon} className="contactIcon" />
          <img src={instagramIcon} className="contactIcon" />
          <img src={emailIcon} className="contactIcon" />
        </Card.Text>
      </Card.Body>
    </Card>
      </Container>
    </div>
  );
};
export default contact;
