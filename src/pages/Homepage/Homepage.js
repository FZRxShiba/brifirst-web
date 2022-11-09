import React from "react";
import CardMenu from "../../components/CardMenu/CardMenu";
import BenefitSection from "../../components/BenefitSection/BenefitSection";
import HeaderCarousel from "../../components/HeaderCarousel/HeaderCarousel"

const Homepage = () => {
  return (
    <div>
      <HeaderCarousel />
      <CardMenu />
      <BenefitSection />
    </div>
  );
};

export default Homepage;
