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
      <p className="statTitle">Statistics</p>
 

<Container>
    <Card style={{ width: '18rem' }}>
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

    <Card style={{ width: '18rem', marginTop: "5%" }}>
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
    </Container>
    

  
        {/* <Row>
        <Col>
       <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={unitedStates} />
      <Card.Body>
        <Card.Title>55M +</Card.Title>
        <Card.Text>
        United States Confirmed Cases
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>

      </Card.Body>
    </Card>
    </Col>
    </Row>  */}


        {/* <div className="statsBox" col>
        <h6>55M +</h6>
        <p>United States Confirmed Cases</p>
        </div>
        </Col>
        <Col>
        <div className="statsBox">
        <h6>825k +</h6>
        <p>United States Deaths</p>
        </div>
        </Col>
        </Row> */} 
    </div>
  )
}

export default stats;
