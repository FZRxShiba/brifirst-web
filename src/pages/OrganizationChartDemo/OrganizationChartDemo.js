import React, { useState, useEffect } from "react";
import { OrganizationChart } from "primereact/organizationchart";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Col, Row } from "react-bootstrap";
import PM from "./pm.svg";
import PDM from "./pdm.svg";
import COPM from "./co-pm.svg";
import FUNC from "./functional.svg";
import TECH from "./technical.svg";
import PRODUCT from "./product.png";
import NONPRODUCT from "./non-product.png";
import r1 from "./r-1.svg";
import r2 from "./r-2.svg";
import r3 from "./r-3.svg";
import r4 from "./r-4.svg";
import r5 from "./r-5.svg";
import l1 from "./l-1.svg";
import l2 from "./l-2.svg";
import l3 from "./l-3.svg";
import l4 from "./l-4.svg";
import l5 from "./l-5.svg";
import l6 from "./l-6.svg";
import l7 from "./l-7.svg";
import l8 from "./l-8.svg";
import brifirst from "./Logo.svg";
import "./OrganizationChartDemo.css";
const OrganizationChartDemo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const data = [
    {
      label: (
        <img
          src={PM}
          width="150"
          style={{ marginBottom: "-1px" }}
          className="org-comp"
        ></img>
      ),
      expanded: true,
      children: [
        {
          label: (
            <img
              src={PDM}
              width="120"
              style={{ marginTop: "-20px" }}
              className="org-comp"
            ></img>
          ),
          expanded: false,
        },
        {
          label: (
            <Row style={{ marginLeft: "35px" }}>
              <Col>
                <img
                  src={FUNC}
                  width="100"
                  style={{ marginTop: "20px", marginBottom: "-30px" }}
                  className="org-comp"
                ></img>
              </Col>
              <Col>
                <img
                  src={COPM}
                  width="110"
                  style={{ marginTop: "-20px", marginBottom: "-30px" }}
                ></img>
              </Col>
              <Col>
                <img
                  src={TECH}
                  width="100"
                  style={{ marginTop: "20px", marginBottom: "-30px" }}
                  className="org-comp"
                ></img>
              </Col>
            </Row>
          ),
          expanded: true,
          children: [
            {
              label: (
                <img
                  src={PRODUCT}
                  width="180"
                  style={{ marginTop: "-20px" }}
                ></img>
              ),
              expanded: true,
              children: [
                {
                  label: (
                    <div style={{ marginTop: "-50px" }}>
                      <Row>
                        <Col xs={3}>
                          <img
                            src={l1}
                            width="110"
                            style={{ marginTop: "10px" }}
                            className="org-comp"
                          ></img>
                        </Col>
                        <Col xs={3}>
                          <img
                            src={l2}
                            width="110"
                            style={{ marginTop: "10px" }}
                            className="org-comp"
                          ></img>
                        </Col>
                        <Col xs={3}>
                          <img
                            src={l3}
                            width="110"
                            style={{ marginTop: "10px" }}
                            className="org-comp"
                          ></img>
                        </Col>
                        <Col xs={3}>
                          <img
                            src={l4}
                            width="110"
                            style={{ marginTop: "10px" }}
                            className="org-comp"
                          ></img>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={3}>
                          <img
                            src={l5}
                            width="110"
                            style={{ marginTop: "10px" }}
                            className="org-comp"
                          ></img>
                        </Col>
                        <Col xs={3}>
                          <img
                            src={l6}
                            width="110"
                            style={{ marginTop: "10px" }}
                            className="org-comp"
                          ></img>
                        </Col>
                        <Col xs={3}>
                          <img
                            src={l7}
                            width="110"
                            style={{ marginTop: "10px" }}
                            className="org-comp"
                          ></img>
                        </Col>
                        <Col xs={3}>
                          <img
                            src={l8}
                            width="110"
                            style={{ marginTop: "10px" }}
                            className="org-comp"
                          ></img>
                        </Col>
                      </Row>
                    </div>
                  ),
                },
              ],
            },
            {
              label: (
                <img
                  src={NONPRODUCT}
                  width="180"
                  style={{ marginTop: "-20px" }}
                ></img>
              ),
              expanded: true,
              children: [
                {
                  label: (
                    <div style={{ marginTop: "-50px" }}>
                      <Row>
                        <Col xs={4}>
                          <img
                            src={r1}
                            width="110"
                            style={{ marginTop: "10px" }}
                            className="org-comp"
                          ></img>
                        </Col>
                        <Col xs={4}>
                          <img
                            src={r2}
                            width="110"
                            style={{ marginTop: "10px" }}
                            className="org-comp"
                          ></img>
                        </Col>
                        <Col xs={4}>
                          <img
                            src={r3}
                            width="110"
                            style={{ marginTop: "10px" }}
                            className="org-comp"
                          ></img>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={6}>
                          <img
                            src={r4}
                            width="110"
                            style={{ marginTop: "10px" }}
                            className="org-comp"
                          ></img>
                        </Col>
                        <Col xs={6}>
                          <img
                            src={r5}
                            width="110"
                            style={{ marginTop: "10px" }}
                            className="org-comp"
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
    </div>
  );
};

export default OrganizationChartDemo;
