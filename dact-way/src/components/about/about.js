import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import "./about.css";

let about = () => {
  return (
    <div id="aboutSection">
      <Container>
        <Row>
          <p className="aboutText">
          <p className="aboutTitle">About Us</p>
           <span className="dactWay"> DACT Way </span> was established on the belief that quality workmanship and
            honesty are the keys to true customer satisfaction. Headquartered in
            Dallas, Texas, our extensive portfolio consists of retail chains,
            grocery stores, medical facilities, shopping malls, professional
            offices, office buildings, industrial complexes, financial
            institutions and utility companies. The broad range of services we
            offer can be tailored to meet your needs and our company is fully
            licensed and insured, giving you the confidence that your job is
            being handled by qualified personnel.
            <div>
            <Card className="promiseCard">
      <Card.Body>
      <Card.Text className="promiseText">
      <p className="promiseTitle">Our Promise</p>
            The clients peace of mind is our prime focus! We guarantee
            high-quality work to your total satisfaction!!
            </Card.Text>
      </Card.Body>
    </Card>
    </div>
          </p>
          
        </Row>
        </Container>
        {/* <Row>
        <Card className="promiseCard">
      <Card.Body>
      <Card.Text className="promiseText">
      <p className="promiseTitle">Our Promise</p>

            The clients peace of mind is our prime focus! We guarantee
            high-quality work to your total satisfaction!!
            </Card.Text>
      </Card.Body>
    </Card>
        </Row> */}
    </div>
  );
};

export default about;
