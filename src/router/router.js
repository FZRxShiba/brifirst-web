import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardMenu from "../components/CardMenu/CardMenu";
import Modul from "../components/Modul/Modul";
import NewsCarousel from "../components/NewsCarousel/NewsCarousel";
import Homepage from "../pages/Homepage/Homepage";
import StrukturOrganisasi from "../pages/StrukturOrganisasi/StrukturOrganisasi";
import CustomFooter from "../components/CustomFooter/CustomFooter";
import Project from "../pages/Project/Project";
import News from "../pages/News/News";
import ReadMore from "../pages/ReadMore/ReadMore";
import OrganizationChartDemo from "../pages/OrganizationChartDemo/OrganizationChartDemo";

const AllRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/project" element={<Project />} />
      <Route path="/modul" element={<Modul />} />
      <Route path="/struktur-organisasi" element={<OrganizationChartDemo />} />
      <Route path="/CardMenu" element={<CardMenu />} />
      <Route path="/NewsCarousel" element={<NewsCarousel />} />
      <Route path="/CustomFooter" element={<CustomFooter />} />
      <Route path="/news" element={<News />} />
      <Route path="/brifirst" element={<ReadMore/>} />
    </Routes>
  );
};

export default AllRoute;
