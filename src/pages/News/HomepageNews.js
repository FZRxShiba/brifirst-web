import React from "react";
import news1 from "./news7.png";
import news2 from "./news8.png";
import news3 from "./news9.png";
import news4 from "./news10.png";
import news5 from "./news11.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

import "./HomepageNews.css";

const HomepageNews = () => {
  return (
    <div className="homepage-news-container">
      <div className="homepage-news-contents imgboxnews">
        <h1 style={{ textAlign: "center", paddingBottom: "20px", color: "white" }}>News</h1>
        <Container>
          <Row>
            <Col>
              <Link to="/news/news1">
                <img style={{ paddingLeft: "60px" }} src={news1} alt="editorial7" height="300" width="auto" id="image-news-section" />
              </Link>
            </Col>
            <Col>
              <Link to="/news/news2">
                <img style={{ paddingLeft: "60px" }} src={news2} alt="editorial8" height="300px" width="auto" id="image-news-section" />
              </Link>
            </Col>
            <Col>
              <Link to="/news/news4">
                <img style={{ paddingLeft: "60px" }} src={news3} alt="editorial9" height="300px" width="auto" id="image-news-section" />
              </Link>
            </Col>
          </Row>
          <br></br>
          <Row>
            <Col>
              <Link to="/news/news5">
                <img style={{ paddingLeft: "60px" }} src={news4} alt="editorial10" height="300px" width="auto" id="image-news-section" />
              </Link>
            </Col>
            <Col xs={4}></Col>
            <Col>
              <Link to="/news/news6">
                <img style={{ paddingLeft: "60px" }} src={news5} alt="editorial11" height="300px" width="auto" id="image-news-section" />
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default HomepageNews;
