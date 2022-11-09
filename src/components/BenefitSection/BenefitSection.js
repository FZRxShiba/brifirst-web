import React from "react";
import { Row, Col } from "react-bootstrap";
import Woman from "./woman.svg";
import MultiDimension from "./image/1-multi-dimension.svg";
import Automation from "./image/2-automation.svg";
import Accuracy from "./image/3-accuracy.svg";
import Traceability from "./image/4-traceability.svg";
import Integrated from "./image/5-integrated.svg";
import Compliance from "./image/6-compliance.svg";

import "./BenefitSection.css";

const BenefitSection = () => {
  return (
    <div className="benefit-sect-container">
      <div className="benefit-sect-title">6 MANFAAT UTAMA BRIFIRST</div>
      <div className="benefit-sect-body">
        <Row>
          <Col sm={4}>
            <Row>
              <div className="benefit-elements">
                <img height="140" src={MultiDimension} />
                <p>MULTI DIMENSION</p>
              </div>
            </Row>
            <Row>
              <div className="benefit-elements">
                <img height="140" src={Automation} />
                <p>AUTOMATION</p>
              </div>
            </Row>
            <Row>
              <div className="benefit-elements">
                <img height="140" src={Accuracy} />
                <p>ACCURACY</p>
              </div>
            </Row>
          </Col>
          <Col sm={4}>
            <div className="benefit-elements">
              <img width="400" src={Woman} style={{ marginTop: "50px" }} />
            </div>
          </Col>
          <Col sm={4}>
            <Row>
              <div className="benefit-elements">
                <img height="140" src={Traceability} />
                <p>TRACEABILITY</p>
              </div>
            </Row>
            <Row>
              <div className="benefit-elements">
                <img height="140" src={Integrated} />
                <p>INTEGRATED</p>
              </div>
            </Row>
            <Row>
              <div className="benefit-elements">
                <img
                  height="140"
                  src={Compliance}
                />
                <p>COMPLIANCE</p>
              </div>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default BenefitSection;
