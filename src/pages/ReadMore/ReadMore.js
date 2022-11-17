import React, { useState } from "react";
import "./ReadMore.css";
import img1 from "./logo.svg";
import Carousel from "react-bootstrap/Carousel";

const ReadMore = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="ReadMore">
      <div className="content">
        <div className="contentImg">
          <img width="400" src={img1} style={{ marginTop: "250px" }} />
        </div>
      </div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <div>
            <p className="contentC" style={{width:"900px", height:"400px",margin:"auto"}}>
              Project Strategis BRI yang mentransformasi finance sytem di BRI.
              <br></br>
              <br></br>
              BRI New Finance System akan membawa BRI selangkah lebih dekat
              menuju The Most Valuable Banking Group in Southeast Asia &
              Champion of Financial Inclusion.
              <br></br>
              <br></br>
              BRIFIRST akan menjadi financial enterprise system dan membantu
              BRINETS dalam jurnal pembukuan dan analytical profitability
              performance untuk meningkatkan efektivitas kinerja.
            </p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div>
            <p className="contentC" style={{width:"900px", height:"400px",margin:"auto"}}>
              The BRIFIRST initiative!
              <br></br>
              <br></br>
              BRI Financial Enterprise System atau project BRIFIRST adalah
              inisiatif strategis BRI pada ranah keuangan untuk meningkatkan
              produktivitas organisasi dengan mengimplementasikan Platform SAP
              yang akan terintegrasi dengan sistem-sistem lain yang sudah ada
              sebelumnya.
              <br></br>
              Implementasi system ini menjadi hal yang sangat penting untuk
              menjawab beberapa permasalahan yang saat kerap muncul pada proses
              pengelolaan keuangan seperti duplikasi dan ketidaksesuain data
              serta transaksi yang tidak dapat ditelusuri secara Komprehensif.
            </p>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default ReadMore;
