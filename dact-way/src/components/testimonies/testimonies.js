import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./testimonies.css";

let testimonies = () => {
  return (
    <div id="testimoniesSection">
        <div className="justify-content-center">
        <Row className="justify-content-center">
          <p className="testimoniesTitle">Testimonies</p>
        </Row>
        <Row>
          <Col xs="12" sm="12" md="4">
            <div className="testimoniesBox">
              <p className="quote">
                "I highly recommend <span className="dactWay">DACT Way </span>. Any business that wants to ensure
                the safety of their customers and employees and wants peace of
                mind in today's environment should absolutely partner up with
                DACT Way." <span className="author"> - Anonymous Client</span>
              </p>
            </div>
          </Col>
          <Col xs="12" sm="12" md="4">
            <div className="testimoniesBox">
              <p className="quote">
                "Thank you <span className="dactWay">DACT Way </span>for coming out on such short notice to
                ensure that our office was disinfected and sanitized. We were
                open for business the very next day."
                <span className="author"> - Anonymous Client</span>
              </p>
            </div>
          </Col>
          <Col xs="12" sm="12" md="4">
            <div className="testimoniesBox">
              <p className="quote">
                "These guys are awesome! We run a gym with a bunch of equipment
                that is used daily. Great service, they work fast, and made sure
                to go over everything twice!! Highly recommend!!"
                <span className="author"> - Camp Tuf</span>
              </p>
            </div>
          </Col>
        </Row>
        </div>
    </div>
  );
};
export default testimonies;
