import React from "react";
import { Row, Col } from "react-bootstrap";
import "./CardMenu.css";
import Modul from "./modul.svg";
import Project from "./project.svg";
import Struktur from "./struktur.svg";
import { Link } from "react-router-dom";

const CardMenu = () => {
  return (
    <div className="card-menu-wrapper" id="menu-kartu">
      <div className="card-menu-container">
        <div className="card-menu-title">BRI FINANCE ENTERPRISE SYSTEM</div>
        <div className="card-menu-element-container">
          <Row style={{ padding: "20px" }}>
            <Col className="element-container">
              <Link to="/modul">
                <img className="card-img" src={Modul} />
                <div className="card-menu">MODUL</div>
              </Link>
            </Col>
            <Col className="element-container">
              <img className="card-img" src={Project} />
              <div className="card-menu">PROJECT</div>
            </Col>
            <Col className="element-container">
              <Link to="/struktur-organisasi">
                <img className="card-img" src={Struktur} />
                <div className="card-menu">STRUKTUR ORGANISASI</div>
              </Link>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default CardMenu;
