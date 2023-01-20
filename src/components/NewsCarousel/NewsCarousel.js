import React, {useState} from "react";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import editorial9 from "./editorial9.png";
import editorial7 from "./editorial7.png";
import editorial8 from "./editorial8.png";
import editorial10 from "./editorial10.png";
import editorial11 from "./editorial11.png";
import news7 from "./news7.png";
import news8 from "./news8.png";
import news9 from "./news9.png";
import news10 from "./news10.png";
import news11 from "./news11.png";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import "./NewsCarousel.css";

const NewsCarousel = () => {
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
            
             
              <img onClick={() =>
                  handleShow(news7)
                }
                className="d-block w-5"
                src={editorial7}
                alt="Editorial 7"
                style={{
                  paddingLeft: "",
                  height: "433px",
                  width: "309px",
                  boxShadow: "-1px 2px 9px #F4AAB9",
                }}
              />
            </Carousel.Item>
            <Carousel.Item>
            <img onClick={() =>
                  handleShow(news8)
                }
                className="d-block w-5"
                src={editorial8}
                alt="Editorial 8"
                style={{
                  paddingLeft: "",
                  height: "433px",
                  width: "309px",
                  boxShadow: "-1px 2px 9px #F4AAB9",
                }}
              />
            </Carousel.Item>
            <Carousel.Item>
            <img onClick={() =>
                  handleShow(news9)
                }
                className="d-block w-5"
                src={editorial9}
                alt="Editorial 9"
                style={{
                  paddingLeft: "",
                  height: "433px",
                  width: "309px",
                  boxShadow: "-1px 2px 9px #F4AAB9",
                }}
              />
            </Carousel.Item>
            <Carousel.Item>
            <img onClick={() =>
                  handleShow(news10)
                }
                className="d-block w-5"
                src={editorial10}
                alt="Editorial 10"
                style={{
                  paddingLeft: "",
                  height: "433px",
                  width: "309px",
                  boxShadow: "-1px 2px 9px #F4AAB9",
                }}
              />
            </Carousel.Item>
            <Carousel.Item>
            <img onClick={() =>
                  handleShow(news11)
                }
                className="d-block w-5"
                src={editorial11}
                alt="Editorial 11"
                style={{
                  paddingLeft: "",
                  height: "433px",
                  width: "309px",
                  boxShadow: "-1px 2px 9px #F4AAB9",
                }}
              />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body className="modal-body modal-content" style={{height: "900px", width:"700px"}}>
          <img height="840" src={image} />
        </Modal.Body>
      </Modal>
    </div>
  );
};
export default NewsCarousel;
