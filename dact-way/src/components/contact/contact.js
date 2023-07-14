import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import facebookIcon from "../img/facebook.png";
import instagramIcon from "../img/instagram.png";
import emailIcon from "../img/emailIcon.png";
import "./contact.css";

let contact = () => {
  return (
    <div id="contactSection">
      <Container>
      <p className="contactTitle">Contact</p>
      <Card className="contactCard">
      <Card.Body>
      <Card.Text className="statText">
          <a href="https://www.facebook.com/dactway"><img src={facebookIcon} alt="Facebook Icon" className="contactIcon" /></a>
          <a href="https://www.instagram.com/dactway/"><img src={instagramIcon} alt="Instagram Icon" className="contactIcon" /></a>
          <a href="mailto:Dactwayservices@gmail.com"><img src={emailIcon} alt="Email Icon" className="contactIcon" /></a>
        </Card.Text>
      </Card.Body>
    </Card>
      </Container>
    </div>
  );
};
export default contact;
