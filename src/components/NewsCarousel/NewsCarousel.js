import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import news1 from "./news1.png";
import Carousel from "react-bootstrap/Carousel";

const NewsCarousel = () => {
  return (
    <div
      className="bgcardnews"
      id="menu-newsku"
      style={{
        background: "linear-gradient(90deg, #d9f4ff 10.98%, #bec9e7 100%)",
        padding: "100px",
      }}
    >
      <Row>
        <Col xs={8} style={{}}>
          <div className="textcolorku" style={{ color: "blue", fontSize: "75px", paddingTop: "30px", paddingLeft: "50px", textAlign: "left" }}>
            Temukan update &{" "}
            <p>
              <b>berita terbaru kami.</b>
            </p>
          </div>
          <p></p>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <p>
            <b style={{ fontSize: "35px", color: "blue", paddingLeft: "300px" }}>LIHAT LEBIH ></b>
          </p>
        </Col>
        <Col>
          <Carousel autoPlay={true} interval={5000} controls={false} indicators={false}>
            <Carousel.Item>
              <img className="d-block w-5" src={news1} alt="First slide" style={{ height: "433px", width: "309px", boxShadow: "-1px 2px 9px #F4AAB9", padding: "-1em" }} />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-5" src={news1} alt="Second slide" style={{ height: "433px", width: "309px", boxShadow: "-1px 2px 9px #F4AAB9", padding: "-1em" }} />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-5" src={news1} alt="Third slide" style={{ height: "433px", width: "309px", boxShadow: "-1px 2px 9px #F4AAB9", padding: "-1em" }} />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>{" "}
    </div>
  );
};
export default NewsCarousel;
