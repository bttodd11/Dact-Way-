import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import texas from "../img/texas.png"
import unitedStates from "../img/unitedStates.png";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import "./stats.css";
import { Container } from "react-bootstrap";





let stats = () => {
  return(
    <div id="statsSection">
<Container fluid>
  <Row className="justify-content-center">
    <Col sm={12} md={6}>
    <Card style={{ width: '18rem', margin: 'auto' }}>
    <Card.Img variant="top" className="usIcon" src={unitedStates} />
      <Card.Body>
      <Card.Title>55M +</Card.Title>
      <Card.Text>
        United States Confirmed Cases
        </Card.Text>
        <Card.Title>825k +</Card.Title>
      <Card.Text>
      United States Deaths
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>

<Col sm={12} md={6}>
    <Card style={{ width: '18rem', margin: 'auto' }}>
    <Card.Img variant="top" className="usIcon" src={texas} />
      <Card.Body>
      <Card.Title>4.58M +</Card.Title>
      <Card.Text>
        Texas Confirmed Cases
        </Card.Text>
        <Card.Title>825k +</Card.Title>
      <Card.Text>
      Texas Deaths
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
