import React    from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import wipeDown from '../img/wipeDown.jpeg'
import fogging from '../img/foggingImage.jpeg';
import janitoral from '../img/janitorialImage.jpeg';
import products from '../img/productsImage.jpeg';
import  "./services.css";

let services = () => {

  return(
    <div id="servicesSection">
    <Container>
      <Row>
        <Col sm="12"><h5 className="servicesTitle">Services</h5></Col>
      </Row>
      <div id="servicesOffering">
      <Row className="justify-content-center">
      <Col xs="12" sm="12" md="3">
          <img src={wipeDown} alt="Surface Wipedown" className="serviceIcon"/>
          <p className="servicesBoldHeader">Surface Wipedown</p>
          <p className="servicesText">We make sure all of our employees our properly educated with current COVID  cleaning protocol to ensure our customers are receiving correct disinfectant treatment.</p>
        </Col>
        <Col xs="12" sm="12" md="3">
        <img src={fogging} alt="Fogging" className="serviceIcon"/>
        <p className="servicesBoldHeader">Fogging</p>
          <p className="servicesText">We know time is money!!  Our schedules are as flexible as possible to make sure our customers can maintain business as usual!! </p>
        </Col>
        <Col xs="12" sm="12" md="3">
        <img src={janitoral} alt="Janitorial" className="serviceIcon"/>
        <p className="servicesBoldHeader">Janitorial</p>
          <p className="servicesText">All of our products are EPA/ CPC approved. A+ quality work is our #1 priority.</p>
        </Col>
        <Col xs="12" sm="12" md="3">
        <img src={products} alt="EPA/CDC Products" className="serviceIcon"/>
        <p className="servicesBoldHeader">EPA/CDC Products</p>
          <p className="servicesText">Cleaning is more important than ever right now. The proper cleaning methods can help slow down the transfer of many germs/viruses.</p>
        </Col>
        </Row>
        </div>
        <div id="servicesMidOffering">
       <Row className="justify-content-center">
        <p className="servicesMidTitle">DACT Way Services</p>
        <p className="servicesHeadlineText">We work with all types of facilities</p>
        <Col xs="6" sm="6" md="2" lg="2">
          <p className="servicesTextIcon">Gyms</p>
        </Col>
        <Col xs="6" sm="6" md="2" lg="2">
          <p className="servicesTextIcon">Vehicles</p>
        </Col>
        <Col xs="6" sm="6" md="2" lg="2">
          <p className="servicesTextIcon">Restaurants</p>
        </Col>
        <Col xs="6" sm="6" md="2" lg="2">
          <p className="servicesTextIcon">Residential</p>
        </Col>
        </Row>
        <Row className="justify-content-center">
        <Col xs="6" sm="6" md="2" >
          <p className="servicesTextIcon">Commercial</p>
        </Col>
        <Col xs="6" sm="6" md="2">
          <p className="servicesTextIcon">Barbershops</p>
        </Col>
        <Col xs="6" sm="6" md="2">
          <p className="servicesTextIcon">Salons</p>
        </Col>
        <Col xs="6" sm="6" md="2">
          <p className="servicesTextIcon">ChildCare</p>
        </Col>
        </Row>
        </div>
      <Row>
        <div id="servicesDetails">
      <Row className="justify-content-center">
      <Col xs="12" sm="12" md="3">
          <p className="servicesBoldHeader">Educated Providers</p>
          <p className="servicesText">We make sure all of our employees our properly educated with current COVID  cleaning protocol to ensure our customers are receiving correct disinfectant treatment.</p>
        </Col>
        <Col xs="12" sm="12" md="3">
        <p className="servicesBoldHeader">Customized Schedules</p>
          <p className="servicesText">We know time is money!!  Our schedules are as flexible as possible to make sure our customers can maintain business as usual!! </p>
        </Col>
        <Col xs="12" sm="12" md="3">
        <p className="servicesBoldHeader">Advanced Products</p>
          <p className="servicesText">All of our products are EPA/ CPC approved. A+ quality work is our #1 priority.</p>
        </Col>
        <Col xs="12" sm="12" md="3">
        <p className="servicesBoldHeader">Extra Care Hygiene</p>
          <p className="servicesText">Cleaning is more important than ever right now. The proper cleaning methods can help slow down the transfer of many germs/viruses.</p>
        </Col>
        </Row>
        </div>
      </Row>
    </Container>
    </div>
  )
}

export default services;
