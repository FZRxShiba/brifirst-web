import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import editorial9 from "./editorial9.png";
import editorial7 from "./editorial7.png";
import editorial8 from "./editorial8.png";
import editorial10 from "./editorial10.png";
import editorial11 from "./editorial11.png";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

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
      {<Row>
        <Col xs={8}>
          <div
            className="textcolorku"
            style={{
              color: "#261472",
              fontSize: "65px",
              paddingTop: "30px",
              paddingLeft: "10px",
              textAlign: "left",
            }}
          >
            Temukan update &
            <p>
              <b>berita terbaru kami.</b>
            </p>
          </div>
          <p></p>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <Link to="/news">
            <p>
              <b
                style={{
                  fontSize: "35px",
                  color: "#261472",
                  paddingLeft: "200px",
                }}
              >
                LIHAT LEBIH {">"}
              </b>
            </p>
          </Link>
        </Col>
        <Col style={{ paddingLeft: "30px" }}>
          <Carousel autoPlay={true}
            interval={5000}
            controls={false}
            indicators={false}>

            <Carousel.Item>
            <Link to="/news/news1">
              <img
                className="d-block w-5"
                src={editorial7}
                alt="Editorial 7"
                style={{
                  paddingLeft: "",
                  height: "433px",
                  width: "309px",
                  boxShadow: "-1px 2px 9px #F4AAB9",
                }}
              /></Link>
            </Carousel.Item>
            <Carousel.Item>
            <Link to="/news/news2">
              <img
                className="d-block w-5"
                src={editorial8}
                alt="Editorial 8"
                style={{
                  paddingLeft: "",
                  height: "433px",
                  width: "309px",
                  boxShadow: "-1px 2px 9px #F4AAB9",
                }}
              /></Link>
            </Carousel.Item>
            <Carousel.Item>
            <Link to="/news/news4">
              <img
                className="d-block w-5"
                src={editorial9}
                alt="Editorial 9"
                style={{
                  paddingLeft: "",
                  height: "433px",
                  width: "309px",
                  boxShadow: "-1px 2px 9px #F4AAB9",
                }}
              /></Link>
            </Carousel.Item>
            <Carousel.Item>
            <Link to="/news/news5">
              <img
                className="d-block w-5"
                src={editorial10}
                alt="Editorial 10"
                style={{
                  paddingLeft: "",
                  height: "433px",
                  width: "309px",
                  boxShadow: "-1px 2px 9px #F4AAB9",
                }}
              /></Link>
            </Carousel.Item>
            <Carousel.Item>
            <Link to="/news/news6">
              <img
                className="d-block w-5"
                src={editorial11}
                alt="Editorial 11"
                style={{
                  paddingLeft: "",
                  height: "433px",
                  width: "309px",
                  boxShadow: "-1px 2px 9px #F4AAB9",
                }}
              /></Link>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>}
    </div>
  );
};
export default NewsCarousel;
