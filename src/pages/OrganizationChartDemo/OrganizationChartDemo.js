import React, { useEffect, useState } from "react";
import { OrganizationChart } from "primereact/organizationchart";
import { Col, Row } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import PRODUCT from "./images/product.png";
import NONPRODUCT from "./images/non-product.png";
import r1 from "./images/r-1.svg";
import r2 from "./images/r-2.svg";
import r3 from "./images/r-3.svg";
import r4 from "./images/r-4.svg";
import r5 from "./images/r-5.svg";
import l1 from "./images/l-1.svg";
import l2 from "./images/l-2.svg";
import l3 from "./images/l-3.svg";
import l4 from "./images/l-4.svg";
import l5 from "./images/l-5.svg";
import l6 from "./images/l-6.svg";
import l7 from "./images/l-7.svg";
import l8 from "./images/l-8.svg";
import brifirst from "./images/Logo.svg";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "./OrganizationChartDemo.css";
import pm from "./people/pm-sc.png";
import copmErly from "./people/bu erly-03.png";
import copmTina from "./people/bu tina-03-03.png";

const OrganizationChartDemo = () => {
  const [show, setShow] = useState(false);
  const [dataa, setDataa] = useState([]);
  const [image, setImage] = useState("");

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = (data, img) => {
    setShow(true);
    setDataa(data);
    setImage(img);
  };

  let dataProduct = [l1, l2, l3, l4, l5, l6, l7, l8];
  let dataNonProduct = [r1, r2, r3, r4, r5];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const data = [
    {
      label: (
        <img
          src={require("./images/pm.svg").default}
          width="150"
          className="org-comp minbot1"
          onClick={() => handleShow(["PROJECT MANAGER", "Sandra Chalik", "00279635"], pm)}
        ></img>
      ),
      expanded: true,
      children: [
        {
          label: (
            <img
              src={require("./images/pdm.svg").default}
              width="120"
              className="org-comp mintop20"
            ></img>
          ),
          expanded: false,
        },
        {
          label: (
            <Row style={{ marginLeft: "35px" }}>
              <Col xs={4}>
                <img
                  src={require("./images/functional.svg").default}
                  width="120"
                  style={{ marginRight: "-30px" }}
                  className="org-comp minbot30 top20"
                  onClick={() =>
                    handleShow(
                      ["CO. PROJECT MANAGER", "Rouli Erlyana Ambarita", "00001554"],
                      copmErly
                    )
                  }
                ></img>
              </Col>
              <Col xs={4}>
                <img
                  src={require("./images/co-pm.svg").default}
                  width="110"
                  style={{ marginLeft: "-5px", marginBottom: "13px" }}
                  className="mintop20 minbot30"
                ></img>
              </Col>
              <Col xs={4}>
                <img
                  src={require("./images/technical.svg").default}
                  width="110"
                  style={{ marginLeft: "-17px" }}
                  className="org-comp minbot30 top20"
                  onClick={() =>
                    handleShow(
                      ["CO. PROJECT MANAGER", "Marthina Papilaya", "00000810"],
                      copmTina
                    )
                  }
                ></img>
              </Col>
            </Row>
          ),
          expanded: true,
          children: [
            {
              label: <img src={PRODUCT} width="180" className="mintop20"></img>,
              expanded: true,
              children: [
                {
                  label: (
                    <div className="mintop50">
                      <Row>
                        {dataProduct.slice(0, 4).map((item) => (
                          <Col xs={3}>
                            <img
                              src={item}
                              width="110"
                              className="org-comp top10"
                            ></img>
                          </Col>
                        ))}
                      </Row>
                      <Row>
                        {dataProduct.slice(4, 8).map((item) => (
                          <Col xs={3}>
                            <img
                              src={item}
                              width="110"
                              className="org-comp top10"
                            ></img>
                          </Col>
                        ))}
                      </Row>
                    </div>
                  ),
                },
              ],
            },
            {
              label: (
                <img src={NONPRODUCT} width="180" className="mintop20"></img>
              ),
              expanded: true,
              children: [
                {
                  label: (
                    <div className="mintop50">
                      <Row>
                        {dataNonProduct.slice(0, 3).map((item) => (
                          <Col xs={4}>
                            <img
                              src={item}
                              width="110"
                              className="org-comp top10"
                            ></img>
                          </Col>
                        ))}
                      </Row>
                      <Row>
                        <Col xs={6}>
                          <img
                            src={r4}
                            width="110"
                            className="org-comp top10"
                            style={{ marginRight: "-60px" }}
                          ></img>
                        </Col>
                        <Col xs={6}>
                          <img
                            src={r5}
                            width="110"
                            className="org-comp top10"
                            style={{ marginLeft: "-60px" }}
                          ></img>
                        </Col>
                      </Row>
                    </div>
                  ),
                },
              ],
            },
          ],
        },
      ],
    },
  ];
  return (
    <div className="org-backdrop">
      <div className="img-brifirst">
        <img src={brifirst} width="320"></img>
      </div>
      <OrganizationChart
        value={data}
        style={{ marginTop: "100px" }}
      ></OrganizationChart>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body className="modal-body">
          <h3 style={{ marginBottom: "20px" }}>
            <b>{dataa[0]}</b>
          </h3>
          <img height="200" src={image} />
          <h4 style={{ marginTop: "20px" }}>{dataa[1]}</h4>
          <p>PN: {dataa[2]}</p>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default OrganizationChartDemo;
