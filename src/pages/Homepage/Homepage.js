import React from "react";
import CardMenu from "../../components/CardMenu/CardMenu";
import BenefitSection from "../../components/BenefitSection/BenefitSection";
import HeaderCarousel from "../../components/HeaderCarousel/HeaderCarousel"
import NewsCarousel from "../../components/NewsCarousel/NewsCarousel"
import BoardCarousel from "../../components/BoardCarousel/BoardCarousel";

const Homepage = () => {
  return (
    <div
      style={{
        background: "#CEE0F6",
      }}
    >
      <HeaderCarousel />
      <CardMenu />
      <BoardCarousel />
      <br /> <br />
      <br />
      <BenefitSection />
      <NewsCarousel />
    </div>
  );
};

export default Homepage;
