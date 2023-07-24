import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import texas from "../img/texas.png"
import unitedStates from "../img/unitedStates.png";
import "./stats.css";
import { Container } from "react-bootstrap";

let stats = () => {
  return(
    <div id="statsSection">
<Container fluid>
  <Row className="justify-content-center">
    <Col sm={12} md={6} lg={6}>
    <Card className="cardBorder">
    <Card.Img variant="top" className="usIcon" src={unitedStates} />
      <Card.Body>
      <Card.Title className="statTitle">55M +</Card.Title>
      <Card.Text className="statText">
        United States Confirmed COVID-19 Cases
        </Card.Text>
        <Card.Title className="statTitle">825k +</Card.Title>
      <Card.Text className="statText">
      United States COVID-19 Deaths
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>

<Col sm={12} md={6} lg={6}>
    <Card className="cardBorder">
    <Card.Img variant="top" className="usIcon" src={texas} />
      <Card.Body>
      <Card.Title className="statTitle">4.58M +</Card.Title>
      <Card.Text className="statText">
        Texas Confirmed COVID-19 Cases
        </Card.Text>
        <Card.Title className="statTitle">825k +</Card.Title>
      <Card.Text className="statText">
      Texas COVID-19 Deaths
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    </Row>
    </Container> 
    </div>
  )
}

export default stats;
