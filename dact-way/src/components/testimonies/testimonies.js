import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./testimonies.css";

let testimonies = () => {
  return (
    <div id="testimoniesSection">
      <Container>
        <Row>
          <p className="testimoniesTitle">Testimonies</p>
        </Row>
        <Row>
          <Col xs="12" sm="12" md="4">
            <div className="testimoniesBox">
              <p>
                "I highly recommend DACT Way. Any business that wants to ensure
                the safety of their customers and employees and wants peace of
                mind in today's environment should absolutely partner up with
                DACT Way." <span>Anonymous Client</span>
              </p>
            </div>
          </Col>
          <Col xs="12" sm="12" md="4">
            <div className="testimoniesBox">
              <p>
                "Thank you DACT Way for coming out on such short notice to
                ensure that our office was disinfected and sanitized. We were
                open for business the very next day."
                <span>Anonymous Client</span>
              </p>
            </div>
          </Col>
          <Col xs="12" sm="12" md="4">
            <div className="testimoniesBox">
              <p>
                "Thank you DACT Way for coming out on such short notice to
                ensure that our office was disinfected and sanitized. We were
                open for business the very next day."
                <span>Camp Tuf</span>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default testimonies;
