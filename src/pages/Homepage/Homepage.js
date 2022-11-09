import React from "react";
import CardMenu from "../../components/CardMenu/CardMenu";
import BenefitSection from "../../components/BenefitSection/BenefitSection";
import HeaderCarousel from "../../components/HeaderCarousel/HeaderCarousel"
import BoardCarousel from "../../components/BoardCarousel/BoardCarousel";

const Homepage = () => {
  return (
    <div>
      <HeaderCarousel />
      <CardMenu />
      <BoardCarousel/>
      <BenefitSection />
    </div>
  );
};

export default Homepage;
