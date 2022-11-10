import React from "react";
import CardMenu from "../../components/CardMenu/CardMenu";
import BenefitSection from "../../components/BenefitSection/BenefitSection";
import HeaderCarousel from "../../components/HeaderCarousel/HeaderCarousel"
import NewsCarousel from "../../components/NewsCarousel/NewsCarousel"

const Homepage = () => {
  return (
    <div>
      <HeaderCarousel />
      <CardMenu />
      <BenefitSection />
      <NewsCarousel />
    </div>
  );
};

export default Homepage;
