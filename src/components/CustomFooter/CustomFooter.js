import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function App() {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="twitter" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="google" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="instagram" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6
                className="text-uppercase fw-bold mb-4"
                style={{ color: "#18B1E0" }}
              >
                <MDBIcon icon="gem" className="me-3" />
                BRI Kantor Pusat
              </h6>
              <p>PT Bank Rakyat Indonesia (Persero) Tbk.</p>
              <p>Gedung BRI</p>
              <p>JL. Jendral Sudirman KAV.44-46 Jakarta 10210 Indonesia.</p>
            </MDBCol>

            <MDBCol
              md="4"
              lg="3"
              xl="3"
              className="mx-auto mb-md-0 mb-4"
              style={{ color: "#18B1E0" }}
            >
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                📞 14017 / 1500017
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />✉ callbri@bri.co.id
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
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-left p-4"
        style={{ backgroundColor: "rgb(1, 74, 148)", color: "white" }}
      >
        © 2022 Copyright PT Bank Rakyat Indonesia (Persero) Tbk. All Right
        Reserved.
        <a className="'text-reset fw-bold'" href=""></a>
      </div>
    </MDBFooter>
  );
}
