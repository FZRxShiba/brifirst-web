import React, {useEffect} from "react";
import project1 from "./project1.png";
import logo from "./logo.svg";
import bgbrifrst from "./bgbrifirst.png";
import project3 from "./project3.png";
import project4 from "./project4.png";
import project5 from "./project4.png";
import roadmap from "./roadmap.png";
import Carousel from "react-bootstrap/Carousel";
import "./Project.css";

const Project = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bgnewsku">
      <div className="content">
        <div className="contentImg">
          <img width="400" src={logo} style={{ marginTop: "150px", textAlign: "center" }} />
        </div>
      </div>
      <Carousel autoPlay={true} interval={5000} controls={true} indicators={false}>
        <Carousel.Item>
          <div>
            <p className="kontenpi" style={{ maxWidth: "1100px", height: "400px", paddingLeft: "200px", paddingTop: "-70px" }}>
              INISIASI PROJECT NEW FINANCE SYSTEM</p>
              <br></br>
              <br></br>
              <p className="kontenpj" style={{ maxWidth: "1100px", height: "400px", paddingLeft: "200px", paddingTop: "-70px" }}>
                Infrastruktur IT ialah merupakan salah satu pondasi fundamental untuk mempersiapkan BRI dalam menghadapi era digital. Salah satu inisiatif strategis yang dilakukan yaitu implementasi New Finance System berupa Accounting Hub
              dan Enterprise GL untuk menciptakan Finance Operation yang independent serta terpisah dari Core Operation (decoupling). Hal ini dilakukan untuk memperkuat fondasi IT BRI agar future ready dan meningkatkan kemampuan memproses
              data finansial di BRI. Melalui porses transformasi Finance system ini, akan tercipta Single source of truth informasi finansial BRI.</p>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
            
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div>
            <p className="kontenpi" style={{ maxWidth: "1100px", height: "400px", paddingLeft: "200px", paddingTop: "-70px" }}>
              INISIASI PROYEK NEW FINANCE SYSTEM</p>
              <br></br>
              <br></br>
              <p className="kontenpj" style={{ maxWidth: "1100px", height: "400px", paddingLeft: "200px", paddingTop: "-70px" }}>
              BRI memilih platform SAP S/4Hana dan dukungan full dari module lainnya yang fokus kepada solusi finansial dan accounting, meliputi perencanaan financial, accounting, financial close, treasury, dan operasional keuangan.
              Aplikasi ini menerapkan konsep universal journal, dimana terdapat single accounting repository untuk menampung seluruh transaksi dari source systems yang berbeda – beda. Proses transformasi ini, tidak hanya berfokus pada
              adaptasi platform SAP. Tim BRIFIRST juga melakukan re-engineering business process yang ada guna memastikan full benefit dari tranformasi ini dapat dirasakan oleh BRI.</p>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img src={roadmap} alt="roadmap" class="responsivebg"></img>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Project;
