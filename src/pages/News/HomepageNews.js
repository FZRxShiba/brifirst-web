import React, {useState, useEffect} from "react";
import news1 from "./news7.png";
import news2 from "./news8.png";
import news3 from "./news9.png";
import news4 from "./news10.png";
import news5 from "./news11.png";
import edi1 from "./editorial7.png";
import edi2 from "./editorial8.png";
import edi3 from "./editorial9.png";
import edi4 from "./editorial10.png";
import edi5 from "./editorial11.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";

import "./HomepageNews.css";

const HomepageNews = () => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const [image, setImage] = useState("");

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = (img) => {
    setShow(true);
    setImage(img);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="homepage-news-container">
      <div className="homepage-news-contents imgboxnews">
        <h1
          style={{ textAlign: "center", paddingBottom: "20px", color: "white" }}
        >
          News
        </h1>
        <Container>
          <Row>
            <Col>
            <img onClick={() =>
                  handleShow(edi1)
                } className="gbreditorial" style={{ paddingLeft: "60px" }} src={news1} alt="editorial7" height="300" width="auto" id="image-news-section" />
            </Col>
            <Col>
            <img onClick={() =>
                  handleShow(edi2)
                } className="gbreditorial" style={{ paddingLeft: "60px" }} src={news2} alt="editorial8" height="300px" width="auto" id="image-news-section" />
              
            </Col>
            <Col>
            <img onClick={() =>
                  handleShow(edi3)
                } className="gbreditorial" style={{ paddingLeft: "60px" }} src={news3} alt="editorial9" height="300px" width="auto" id="image-news-section" />
            </Col>
          </Row>
          <br></br>
          <Row>
            <Col>
            <img onClick={() =>
                  handleShow(edi4)
                } className="gbreditorial" style={{ paddingLeft: "60px" }} src={news4} alt="editorial10" height="300px" width="auto" id="image-news-section" />
              
            </Col>
            <Col xs={4}></Col>
            <Col>
            <img onClick={() =>
                  handleShow(edi5)
                } className="gbreditorial" style={{ paddingLeft: "60px" }} src={news5} alt="editorial11" height="300px" width="auto" id="image-news-section" />
            </Col>
          </Row>
        </Container>
        <Modal show={show} onHide={handleClose} centered style={{textAlign:"center", marginLeft:"-50px", overflowY:"hidden !important auto"}}>
        <Modal.Body className="modal-body modal-content" style={{height: "920px", width:"700px"}}>
          <img height="840" src={image} />
        </Modal.Body>
      </Modal>
      </div>
      
    </div>
  );
};

export default HomepageNews;
