import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./about.css";

let about = () => {
  return (
    <div id="aboutSection">
      <Container>
        <Row>
          <p className="aboutTitle">About Us</p>
        </Row>
        <Row>
          <p className="aboutText">
            DACT Way was established on the belief that quality workmanship and
            honesty are the keys to true customer satisfaction. Headquartered in
            Dallas, Texas, our extensive portfolio consists of retail chains,
            grocery stores, medical facilities, shopping malls, professional
            offices, office buildings, industrial complexes, financial
            institutions and utility companies. The broad range of services we
            offer can be tailored to meet your needs and our company is fully
            licensed and insured, giving you the confidence that your job is
            being handled by qualified personnel.
          </p>
        </Row>
        <Row>
          <p className="promiseTitle">Our Promise</p>
        </Row>
        <Row>
          <p className="aboutText">
            The clients peace of mind is our prime focus! We guarantee
            high-quality work to your total satisfaction!!
          </p>
        </Row>
      </Container>
    </div>
  );
};

export default about;
