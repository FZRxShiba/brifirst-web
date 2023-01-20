import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Woman from "./woman.png";
import MultiDimension from "./image/1-multi-dimension.svg";
import Automation from "./image/2-automation.svg";
import Accuracy from "./image/3-accuracy.svg";
import Traceability from "./image/4-traceability.svg";
import Integrated from "./image/5-integrated.svg";
import Compliance from "./image/6-compliance.svg";

import "./BenefitSection.css";

const BenefitSection = () => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const [image, setImage] = useState("");

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = (data, img) => {
    setShow(true);
    setData(data);
    setImage(img);
  };

  return (
    <div className="benefit-sect-container">
      <div className="benefit-sect-title">6 MANFAAT UTAMA BRIFIRST</div>
      <div className="benefit-sect-body">
        <Row>
          <Col sm={3}>
            <Row>
              <div
                className="benefit-elements"
                onClick={() =>
                  handleShow(
                    [
                      "MULTI DIMENSION",
                      "Mampu menghasilkan laporan keuangan yang lebih granular seperti by product, business segment, dan customer segment",
                    ],
                    MultiDimension
                  )
                }
              >
                <img height="140" src={MultiDimension} />
                <p>MULTI DIMENSION</p>
              </div>
            </Row>
            <Row>
              <div
                className="benefit-elements"
                onClick={() =>
                  handleShow(
                    [
                      "AUTOMATION",
                      "Mengurangi proses manual dan mempersingkat waktu dalam proses pembuatan laporan keuangan BRI",
                    ],
                    Automation
                  )
                }
              >
                <img height="140" src={Automation} />
                <p>AUTOMATION</p>
              </div>
            </Row>
            <Row>
              <div
                className="benefit-elements"
                onClick={() =>
                  handleShow(
                    [
                      "ACCURACY",
                      "Single source of financial information di BRI, meningkatkan keakuratan informasi dan transparansi data laporan keuangan",
                    ],
                    Accuracy
                  )
                }
              >
                <img height="140" src={Accuracy} />
                <p>ACCURACY</p>
              </div>
            </Row>
          </Col>
          <Col sm={6}>
            <div className="benefit-elements">
              <img width="500" src={Woman} style={{ marginTop: "100px" }} />
            </div>
          </Col>
          <Col sm={3}>
            <Row>
              <div
                className="benefit-elements"
                onClick={() =>
                  handleShow(
                    [
                      "TRACEABILITY",
                      "Mampu melakukan penelusuran data transaksi ke source system, sehingga mampu menyajikan informasi yang detil untuk memproses laporan keuangan",
                    ],
                    Traceability
                  )
                }
              >
                <img height="140" src={Traceability} />
                <p>TRACEABILITY</p>
              </div>
            </Row>
            <Row>
              <div
                className="benefit-elements"
                onClick={() =>
                  handleShow(
                    [
                      "INTEGRATED",
                      "Mampu terintegrasi secara mudah dengan berbagai source system operasional dan entitas dalam BRI Grup",
                    ],
                    Integrated
                  )
                }
              >
                <img height="140" src={Integrated} />
                <p>INTEGRATED</p>
              </div>
            </Row>
            <Row>
              <div
                className="benefit-elements"
                onClick={() =>
                  handleShow(
                    [
                      "COMPLIANCE",
                      "Sesuai dengan standar atau ketentuan dari regulator, terkait proses akuntansi perbankan",
                    ],
                    Compliance
                  )
                }
              >
                <img height="140" src={Compliance} />
                <p>COMPLIANCE</p>
              </div>
            </Row>
          </Col>
        </Row>
      </div>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body className="modal-body">
          <h3>
            <b>{data[0]}</b>
          </h3>
          <img height="140" src={image} />
          <p>{data[1]}</p>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default BenefitSection;
