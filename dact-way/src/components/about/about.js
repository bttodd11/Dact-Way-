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
            DACT Way is here for you during this unpredictable pandemic with
            expert disinfection services for warehouses, offices, and other
            commercial properties. We also offer disinfectant services to
            vehicles throughout all of the DFW Metroplex and expanding. All the
            equipment and disinfectants we use are EPA/CDC registered and can be
            applied to almost all surfaces. Our Disinfectant kills COVID-19 and
            99.9% of other germs, viruses, and bacteria.
          </p>
        </Row>
      </Container>
    </div>
  );
};

export default about;
