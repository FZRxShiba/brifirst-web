import React from "react";
import CustomNavbar from "../../components/CustomNavbar/CustomNavbar";
import CustomFooter from "../../components/CustomFooter/CustomFooter"
import Modul from "../../components/Modul/Modul"
import HeaderCarousel from "../../components/HeaderCarousel/HeaderCarousel"
import NewsCarousel from "../../components/NewsCarousel/NewsCarousel"

const Homepage = () => {
  return (
    <div style={{"backgroundColor":"#18B1E0"}}>
      <CustomNavbar />
      <HeaderCarousel />
      <Modul />
      <NewsCarousel />
      <CustomFooter />
    </div>
  );
};

export default Homepage;
