import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import img1 from "./gbrnews.png";
import img2 from "./news.png";
import "./NewsCarousel.css";

const NewsCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="backgroundnews"><Carousel activeIndex={index} onSelect={handleSelect}>
    <Carousel.Item>
      <img className="d-block w-100" src={img1} alt="First slide" />
      <Carousel.Caption>
        <Container>
          <Row>
            <Col></Col>
            <Col className="news-container">
              <img
                className="d-block w-100"
                src={img2}
                width="800"
                height="250"
              />
            </Col>
          </Row>
        </Container>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <img className="d-block w-100" src={img1} alt="First slide" />
      <Carousel.Caption>
        <Container>
          <Row>
            <Col></Col>
            <Col className="news-container">
              <img
                className="d-block w-100"
                src={img2}
                width="800"
                height="250"
              />
            </Col>
          </Row>
        </Container>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel></div>
    



  );
};

export default NewsCarousel;
