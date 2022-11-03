import React, { useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Modul.css";
import fam from "./fam.png";
import iem from "./iem.png";
import fc from "./fc.png";
import pb from "./pb.png";
import egl from "./egl.png";
import fps from "./fps.png";
import papm from "./papm.png";
import { HiChevronDoubleDown } from "react-icons/hi";
import Modal from "react-bootstrap/Modal";

const Modul = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="modul-container">
      <br />
      <br />
      <div class="container-fluid">
        <OwlCarousel
          items={3}
          margin={8}
          className="owl-theme"
          loop
          autoplay={true}
        >
          <div className="modul-element">
            <img className="modul-img" src={fam} />
            <div className="modul-title">Fixed Asset Management & PSAK 73</div>
            <div className="modul-button" onClick={handleShow}>
              <HiChevronDoubleDown size={60} />
            </div>
          </div>
          <div className="modul-element">
            <img className="modul-img" src={iem} />
            <div className="modul-title">Income & Expense Management</div>
            <div className="modul-button" onClick={handleShow}>
              <HiChevronDoubleDown size={60} />
            </div>
          </div>
          <div className="modul-element">
            <img className="modul-img" src={fc} />
            <div className="modul-title">Financial Consolidation</div>
            <div className="modul-button" onClick={handleShow}>
              <HiChevronDoubleDown size={60} />
            </div>
          </div>
          <div className="modul-element">
            <img className="modul-img" src={pb} />
            <div className="modul-title">Planning & Budgeting</div>
            <div className="modul-button" onClick={handleShow}>
              <HiChevronDoubleDown size={60} />
            </div>
          </div>
          <div className="modul-element">
            <img className="modul-img" src={egl} />
            <div className="modul-title">Enterprise General Ledger</div>
            <div className="modul-button" onClick={handleShow}>
              <HiChevronDoubleDown size={60} />
            </div>
          </div>
          <div className="modul-element">
            <img className="modul-img" src={fps} />
            <div className="modul-title">Financial Product Subledger</div>
            <div className="modul-button" onClick={handleShow}>
              <HiChevronDoubleDown size={60} />
            </div>
          </div>
          <div className="modul-element">
            <img className="modul-img" src={papm} />
            <div className="modul-title">
              Profitability Analysis and Performance Management
            </div>
            <div className="modul-button" onClick={handleShow}>
              <HiChevronDoubleDown size={60} />
            </div>
          </div>
        </OwlCarousel>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>Keterangan Modal</Modal.Body>
      </Modal>
      <br />
    </div>
  );
};

export default Modul;
