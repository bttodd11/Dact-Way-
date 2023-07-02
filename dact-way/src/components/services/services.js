import React    from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import gymIcon from '../img/gymIcon.png';
import carIcon from '../img/carIcon.png'
import restaurantIcon from '../img/restaurants.png'
import houseIcon from '../img/houseIcon.png';
import commercialIcon from '../img/residentialIcon.png';
import barbershopIcon from '../img/barbershop.png';
import salonIcon from '../img/salonIcon.png';
import daycareIcon from '../img/daycareIcon.png';
import cleaningIcon from '../img/cleaningIcon.png';
import brainIcon from '../img/brainIcon.png';
import aIcon from '../img/aplusIcon.png';
import scheduleIcon from '../img/scheduleIcon.png';
import wipesIcon from '../img/wipesIcon.png';
import foggingIcon from '../img/foggingIcon.png';
import janitorialIcon from '../img/janitorialIcon.png';
import productIcon from '../img/productsIcon.png';

import  "./services.css";

let services = () => {

  return(
    <div className="servicesSection">
    <Container fluid>
      <Row>
        <Col sm="12"><h5 className="servicesTitle">Services</h5></Col>
      </Row>
      <div id="servicesOffering">
      <Row className="justify-content-center">
      <Col xs="12" sm="12" md="3">
      <img src={wipesIcon} className="serviceIcon"/>
          <p className="servicesBoldHeader">Surface Wipedown</p>
          <p>We make sure all of our employees our properly educated with current COVID  cleaning protocol to ensure our customers are receiving correct disinfectant treatment.</p>
        </Col>
        <Col xs="12" sm="12" md="3">
        <img src={foggingIcon} className="serviceIcon"/>
        <p className="servicesBoldHeader">Fogging</p>
          <p>We know time is money!!  Our schedules are as flexible as possible to make sure our customers can maintain business as usual!! </p>
        </Col>
        <Col xs="12" sm="12" md="3">
        <img src={janitorialIcon} className="serviceIcon"/>
        <p className="servicesBoldHeader">Janitorial</p>
          <p>All of our products are EPA/ CPC approved. A+ quality work is our #1 priority.</p>
        </Col>
        <Col xs="12" sm="12" md="3">
        <img src={productIcon} className="serviceIcon"/>
        <p className="servicesBoldHeader">EPA/CDC Products</p>
          <p>Cleaning is more important than ever right now. The proper cleaning methods can help slow down the transfer of many germs/viruses.</p>
        </Col>
        </Row>
        </div>
      <Row className="justify-content-center">
        <p className="servicesMidTitle">DACT Way Services</p>
        <p className="servicesHeadlineText">We work with all types of facilities</p>
        <Col xs="6" sm="6" md="2">
          <img src={gymIcon} className="facilityIcon"/>
          <p className="servicesText">Gyms</p>
        </Col>
        <Col xs="6" sm="6" md="2">
        <img src={carIcon} className="facilityIcon"/>
          <p className="servicesText">Vehicles</p>
        </Col>
        <Col xs="6" sm="6" md="2">
          <img src={restaurantIcon} className="facilityIcon" />
          <p className="servicesText">Restaurants</p>
        </Col>
        <Col xs="6" sm="6" md="2">
        <img src={houseIcon} className="facilityIcon" />
          <p className="servicesText">Residential</p>
        </Col>
        </Row>
        <Row className="justify-content-center">
        <Col xs="6" sm="6" md="2" >
        <img src={commercialIcon} className="facilityIcon" />
          <p className="servicesText">Commercial</p>
        </Col>
        <Col xs="6" sm="6" md="2">
        <img src={barbershopIcon} className="facilityIcon" />
          <p className="servicesText">Barbershops</p>
        </Col>
        <Col xs="6" sm="6" md="2">
        <img src={salonIcon} className="facilityIcon" />
          <p className="servicesText">Salons</p>
        </Col>
        <Col xs="6" sm="6" md="2">
        <img src={daycareIcon} className="facilityIcon" />
          <p className="servicesText">ChildCare</p>
        </Col>
        </Row>
      <Row>
        <div id="servicesDetails">
      <Row className="justify-content-center">
      <Col xs="12" sm="12" md="3">
      <img src={brainIcon} className="facilityIcon"/>
          <p className="servicesBoldHeader">Educated Providers</p>
          <p>We make sure all of our employees our properly educated with current COVID  cleaning protocol to ensure our customers are receiving correct disinfectant treatment.</p>
        </Col>
        <Col xs="12" sm="12" md="3">
        <img src={scheduleIcon} className="facilityIcon"/>
        <p className="servicesBoldHeader">Customized Schedules</p>
          <p>We know time is money!!  Our schedules are as flexible as possible to make sure our customers can maintain business as usual!! </p>
        </Col>
        <Col xs="12" sm="12" md="3">
        <img src={aIcon} className="facilityIcon"/>
        <p className="servicesBoldHeader">Advanced Products</p>
          <p>All of our products are EPA/ CPC approved. A+ quality work is our #1 priority.</p>
        </Col>
        <Col xs="12" sm="12" md="3">
        <img src={cleaningIcon} className="facilityIcon"/>
        <p className="servicesBoldHeader">Extra Care Hygiene</p>
          <p>Cleaning is more important than ever right now. The proper cleaning methods can help slow down the transfer of many germs/viruses.</p>
        </Col>
        </Row>
        </div>
      </Row>
    </Container>
    </div>
  )
}

export default services;
