import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardMenu from "../components/CardMenu/CardMenu";
import Modul from "../components/Modul/Modul";
import NewsCarousel from "../components/NewsCarousel/NewsCarousel";
import Homepage from "../pages/Homepage/Homepage";
import CustomFooter from "../components/CustomFooter/CustomFooter";
import Project from "../pages/Project/Project";

const AllRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/project" element={<Project />} />
      <Route path="/modul" element={<Modul />} />
      <Route path="/CardMenu" element={<CardMenu />} />
      <Route path="/NewsCarousel" element={<NewsCarousel />} />
      <Route path="/CustomFooter" element={<CustomFooter />} />

    </Routes>
  );
};

export default AllRoute;
