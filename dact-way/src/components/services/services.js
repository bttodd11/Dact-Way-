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
    <div id="servicesSection">
    <Container fluid>
      <Row>
        <Col sm="12"><h5 className="servicesTitle">Services</h5></Col>
      </Row>
      <div id="servicesOffering">
      <Row className="justify-content-center">
      <Col xs="12" sm="12" md="3">
      <img src={wipesIcon} alt="Wipes Icon" className="serviceIcon"/>
          <p className="servicesBoldHeader">Surface Wipedown</p>
          <p className="servicesText">We make sure all of our employees our properly educated with current COVID  cleaning protocol to ensure our customers are receiving correct disinfectant treatment.</p>
        </Col>
        <Col xs="12" sm="12" md="3">
        <img src={foggingIcon} alt="Fogging Icon" className="serviceIcon"/>
        <p className="servicesBoldHeader">Fogging</p>
          <p className="servicesText">We know time is money!!  Our schedules are as flexible as possible to make sure our customers can maintain business as usual!! </p>
        </Col>
        <Col xs="12" sm="12" md="3">
        <img src={janitorialIcon} alt="Janitor Icon" className="serviceIcon"/>
        <p className="servicesBoldHeader">Janitorial</p>
          <p className="servicesText">All of our products are EPA/ CPC approved. A+ quality work is our #1 priority.</p>
        </Col>
        <Col xs="12" sm="12" md="3">
        <img src={productIcon} alt="Product Iconn" className="serviceIcon"/>
        <p className="servicesBoldHeader">EPA/CDC Products</p>
          <p className="servicesText">Cleaning is more important than ever right now. The proper cleaning methods can help slow down the transfer of many germs/viruses.</p>
        </Col>
        </Row>
        </div>
      <Row className="justify-content-center">
        <p className="servicesMidTitle">DACT Way Services</p>
        <p className="servicesHeadlineText">We work with all types of facilities</p>
        <Col xs="6" sm="6" md="2" lg="2">
          <img src={gymIcon} alt="Gym Icon" className="facilityIcon"/>
          <p className="servicesTextIcon">Gyms</p>
        </Col>
        <Col xs="6" sm="6" md="2" lg="2">
        <img src={carIcon} className="facilityIcon"/>
          <p className="servicesTextIcon">Vehicles</p>
        </Col>
        <Col xs="6" sm="6" md="2" lg="2">
          <img src={restaurantIcon} alt="Resturant Icon" className="facilityIcon" />
          <p className="servicesTextIcon">Restaurants</p>
        </Col>
        <Col xs="6" sm="6" md="2" lg="2">
        <img src={houseIcon} alt="House Icon" className="facilityIcon" />
          <p className="servicesTextIcon">Residential</p>
        </Col>
        </Row>
        <Row className="justify-content-center">
        <Col xs="6" sm="6" md="2" >
        <img src={commercialIcon} alt="Commercial Icon" className="facilityIcon" />
          <p className="servicesTextIcon">Commercial</p>
        </Col>
        <Col xs="6" sm="6" md="2">
        <img src={barbershopIcon} alt="Barbershop Icon" className="facilityIcon" />
          <p className="servicesTextIcon">Barbershops</p>
        </Col>
        <Col xs="6" sm="6" md="2">
        <img src={salonIcon} alt="Salon Icon" className="facilityIcon" />
          <p className="servicesTextIcon">Salons</p>
        </Col>
        <Col xs="6" sm="6" md="2">
        <img src={daycareIcon} alt="Daycare Icon" className="facilityIcon" />
          <p className="servicesTextIcon">ChildCare</p>
        </Col>
        </Row>
      <Row>
        <div id="servicesDetails">
      <Row className="justify-content-center">
      <Col xs="12" sm="12" md="3">
      <img src={brainIcon} alt="Educated Icon" className="facilityIcon"/>
          <p className="servicesBoldHeader">Educated Providers</p>
          <p className="servicesText">We make sure all of our employees our properly educated with current COVID  cleaning protocol to ensure our customers are receiving correct disinfectant treatment.</p>
        </Col>
        <Col xs="12" sm="12" md="3">
        <img src={scheduleIcon} alt="Schedule Icon" className="facilityIcon"/>
        <p className="servicesBoldHeader">Customized Schedules</p>
          <p className="servicesText">We know time is money!!  Our schedules are as flexible as possible to make sure our customers can maintain business as usual!! </p>
        </Col>
        <Col xs="12" sm="12" md="3">
        <img src={aIcon} alt="Product Icon" className="facilityIcon"/>
        <p className="servicesBoldHeader">Advanced Products</p>
          <p className="servicesText">All of our products are EPA/ CPC approved. A+ quality work is our #1 priority.</p>
        </Col>
        <Col xs="12" sm="12" md="3">
        <img src={cleaningIcon} alt="Hygiene Icon" className="facilityIcon"/>
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
