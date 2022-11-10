import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import news1 from "./news1.png";
import Carousel from "react-bootstrap/Carousel";

const NewsCarousel = () => {
  
  return (
    <div
      className="bgcardnews" id="menu-newsku"
      style={{
        background: "linear-gradient(90deg, #d9f4ff 10.98%, #bec9e7 100%)",
        padding: "30px",
      }}
    >
      <Row>
        <Col
          xs={8}
          style={{ fontSize: "35px", paddingTop: "100px", textAlign: "center" }}
        >
         <div className="textcolorku" style={{color:"blue"}}>Temukan update & <p><b>berita terbaru kami.</b></p>
          <br></br>
          <br></br>
          <p><b style={{fontSize:"25px"}}>LIHAT LEBIH ></b></p></div> 
        </Col>
        <Col>
          <Carousel autoPlay={true}
    interval={5000}
    controls={false}
    indicators={false}>
            <Carousel.Item>
              <img
                className="d-block w-5"
                src={news1}
                alt="First slide"
                style={{ height: "355px", width: "282px" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-5"
                src={news1}
                alt="Second slide"
                style={{ height: "355px", width: "282px" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-5"
                src={news1}
                alt="Third slide"
                style={{ height: "355px", width: "282px" }}
              />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>{" "}
    </div>
  );
};
export default NewsCarousel;
