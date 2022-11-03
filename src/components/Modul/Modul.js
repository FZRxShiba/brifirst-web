import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { HiChevronDoubleDown } from "react-icons/hi";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Modul.css";

const Modul = () => {
  const [show, setShow] = useState(false);
  const [id, setId] = useState(0);

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = (pk) => {
    setShow(true);
    setId(pk);
    console.log(id);
  };

  let dataModul = require("./Modul.json");

  return (
    <div className="modul-container">
      <div class="container-fluid">
        <OwlCarousel
          items={3}
          margin={8}
          className="owl-theme"
          loop
          autoplay={true}
        >
          {dataModul.map((item) => (
            <div className="modul-element">
              <img className="modul-img" src={require("" + item.image + "")} />
              <div className="modul-title">{item.title}</div>
              <div className="modul-button" onClick={() => handleShow(item.pk)}>
                <HiChevronDoubleDown size={60} />
              </div>
            </div>
          ))}
        </OwlCarousel>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body className="modal-body">
          <h4>{dataModul[id].title}</h4>
          <img className="modul-modal-img" src={require("" + dataModul[id].image + "")} />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Modul;
