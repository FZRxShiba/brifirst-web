import React from "react";
import CustomNavbar from "../../components/CustomNavbar/CustomNavbar";
import HeaderCarousel from "../../components/HeaderCarousel/HeaderCarousel";
import NewsCarousel from "../../components/NewsCarousel/NewsCarousel";

const Homepage = () => {
  return (
    <div >
      <CustomNavbar />
      <HeaderCarousel />
      <NewsCarousel />
    </div>
  );
};

export default Homepage;
