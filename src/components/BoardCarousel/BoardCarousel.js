import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import img1 from "./SAP.svg";
import img2 from "./bif.svg";
import "./BoardCarousel.css";

const BoardCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="card-menu-wrap">
      <div className="card-menu-cont">
        <div className="card-tit">YANG BARU DI BRIFIRST</div>
        <div className="card-board"><Carousel
          style={{ textAlign: "center" }}
          activeIndex={index}
          onSelect={handleSelect}
        >
          <Carousel.Item>
            <img className="board-container" src={img1} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="board-container" src={img2} alt="Second slide" />
          </Carousel.Item>
        </Carousel></div>
        
      </div>
    </div>
  );
};

export default BoardCarousel;
