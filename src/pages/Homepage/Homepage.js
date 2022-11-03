import React from "react";
import CustomNavbar from "../../components/CustomNavbar/CustomNavbar";
import Modul from "../../components/Modul/Modul";

const Homepage = () => {
  return (
    <div>
      <CustomNavbar />
      <div className="modul">
        <Modul />
      </div>
    </div>
  );
};

export default Homepage;
