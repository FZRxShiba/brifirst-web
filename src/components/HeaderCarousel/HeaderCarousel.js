import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import img1 from "./gbr1.svg";
import img2 from "./gbr2.svg";
import img3 from "./SAP.svg";
import "./HeaderCarousel.css";

const HeaderCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className="d-block w-100" src={img1} alt="First slide" />
        <Carousel.Caption>
          <Container>
            <Row>
              <Col>
                <div className="Header">
                  <Row >
                    <div className="header-title">Apa itu BRIFirst?</div>
                    <p> Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a</p>
                  
                  </Row>
                </div>
              </Col>
              <Col></Col>
            </Row>
          </Container>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img3} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default HeaderCarousel;
