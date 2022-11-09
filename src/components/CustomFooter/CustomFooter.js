import React from "react";
import LogoSAP from "./SAP.svg";
import LogoDeloitte from "./deloitte.png";
import { FiMapPin,FiMail } from "react-icons/fi";
import { BsTelephoneFill, BsTelephone } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import "./CustomFooter.css";
import { Row, Col } from "react-bootstrap";

export default function App() {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"></section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6
                className="text-uppercase fw-bold mb-4"
                style={{ color: "#18B1E0" }}
              >
                KANTOR PUSAT BRI
              </h6>
              <p>PT Bank Rakyat Indonesia (Persero) Tbk.</p>
              <FiMapPin />
              &nbsp; Gedung Parkir BRI Lantai 8
              <div className="dotremove">
                <ul>
                  <li>
                    JL. Jendral Sudirman KAV. 44-46 Jakarta 10210 Indonesia.
                  </li>
                </ul>
              </div>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6
                className="text-uppercase fw-bold mb-4"
                style={{ color: "#18B1E0"}}
              >
                Contact
              </h6>
              <div className="dotremovecol"><Row>
                <Col sm={1}>
                  <BsTelephone />
                </Col>
                <Col sm={11}>
                  <div className="marjan">
                  <ul>
                    <li>+62 21 5758534 </li>
                    <li>+62 21 5752770 </li>
                    <li>+62 21 5752733  </li>
                  </ul></div>
                </Col>
              </Row></div>

              <p>
                <FiMail size={20} />
                &nbsp;hotline_brifirst@bri.co.id
              </p>

              <p>
                <AiOutlineInstagram size={20} />
                &nbsp;@tim_brifirst
              </p>
            </MDBCol>

            <MDBCol
              md="3"
              lg="2"
              xl="2"
              className="mx-auto mb-4"
              style={{ color: "#18B1E0" }}
            >
              <h6 className="text-uppercase fw-bold mb-4">PARTNER</h6>
              <p>
                <img
                  src={LogoDeloitte}
                  width="130"
                  height="30"
                  alt="Logo Deloitte"
                />
              </p>
              <p>
                <img src={LogoSAP} width="100" height="50" alt="Logo SAP" />
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className="footer text-left p-2 footBold" >
       <div className="footermargin">© 2022 Copyright PT Bank Rakyat Indonesia (Persero) Tbk. All Right
        Reserved.
        <a className="'text-reset fw-bold'" href=""></a></div> 
      </div>
    </MDBFooter>
  );
}
