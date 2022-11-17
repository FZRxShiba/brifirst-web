import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import { HiChevronDoubleDown } from "react-icons/hi";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Modul.css";
import Carousel from "react-bootstrap/Carousel";
import fuck from "./bgmodul.svg";
import halo from "./ModulImage/egl.png";
import { Row, Col } from "react-bootstrap";

const Modul = () => {
  const [show, setShow] = useState(false);
  const [id, setId] = useState(0);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = (pk) => {
    setShow(true);
    setId(pk);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let dataModul = require("./Modul.json");
  let nonProduct = require("./nonproduct.json");
  let product = require("./product.json");

  return (
    <div className="modul-container">
      <div className="modul-container-title">7 Modul Utama</div>
      <div class="container-fluid">
        <Carousel activeIndex={index} onSelect={handleSelect} controls={false}>
          <Carousel.Item>
            <Row>
              <div className="modul-main-title">NON PRODUCT MODULE</div>
              {nonProduct.map((item) => (
                <Col>
                  <div className="modul-card">
                    <Row>
                      <Col>
                        <img
                          className="modul-img"
                          src={require("" + item.image + "")}
                          width={200}
                          height={190}
                        />
                      </Col>
                      <Col xs={12}>
                        <div className="modul-title">{item.title}</div>
                      </Col>
                      <Col>
                        <div className="modul-button">
                          <HiChevronDoubleDown
                            size={60}
                            onClick={() => handleShow(item.pk)}
                          />
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row>
              <div className="modul-main-title">PRODUCT MODULE</div>
              {product.map((item) => (
                <Col>
                  <div className="modul-card">
                    <Row>
                      <Col>
                        <img
                          className="modul-img"
                          src={require("" + item.image + "")}
                          width={200}
                          height={190}
                        />
                      </Col>
                      <Col xs={12}>
                        <div className="modul-title">{item.title}</div>
                      </Col>
                      <Col>
                        <div className="modul-button">
                          <HiChevronDoubleDown
                            size={60}
                            onClick={() => handleShow(item.pk)}
                          />
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        </Carousel>
      </div>
      <Modal show={show} onHide={handleClose} size="md">
        <Modal.Body className="modal-body">
          <h4>
            <b>{dataModul[id].title}</b>
          </h4>
          <img
            className="modul-modal-img"
            src={require("" + dataModul[id].image + "")}
          />
          <div dangerouslySetInnerHTML={{ __html: dataModul[id].detail }} />
          <div className="benefit-container">
            <b>Benefit:</b>
            <ul>
              {dataModul[id].benefit.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
          <div className="benefit-container">
            <b>Uker Terkait:</b>
            <ol>
              {dataModul[id].uker.map((item) => (
                <li>{item}</li>
              ))}
            </ol>
          </div>
          {dataModul[id].jumlah != "-" && (
            <div className="benefit-container">
              <b>Jumlah Pengguna:</b>
              <p>{dataModul[id].jumlah}</p>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Modul;
