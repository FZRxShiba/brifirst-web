import React from "react";
import CustomNavbar from "../../components/CustomNavbar/CustomNavbar";
import CustomFooter from "../../components/CustomFooter/CustomFooter"
import Modul from "../../components/Modul/Modul"

const Homepage = () => {
  return (
    <div style={{"backgroundColor":"#18B1E0"}}>
      <CustomNavbar />
      <div className="modul">
        <Modul />
      </div>
      <CustomFooter />
    </div>
  );
};

export default Homepage;
