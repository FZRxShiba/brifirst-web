import { Routes, Route } from "react-router-dom";
import CardMenu from "../components/CardMenu/CardMenu";
import Modul from "../components/Modul/Modul";
import NewsCarousel from "../components/NewsCarousel/NewsCarousel";
import Homepage from "../pages/Homepage/Homepage";
import CustomFooter from "../components/CustomFooter/CustomFooter";
import Project from "../pages/Project/Project";
import News from "../pages/News/News1";
import News2 from "../pages/News/News2";
import News4 from "../pages/News/News4";
import News5 from "../pages/News/News5";
import News6 from "../pages/News/News6";
import Berita from "../pages/Berita/Berita";
import ReadMore from "../pages/ReadMore/ReadMore";
import OrganizationChartDemo from "../pages/OrganizationChartDemo/OrganizationChartDemo";
import HomepageNews from "../pages/News/HomepageNews";

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
      <Route path="/news" element={<HomepageNews />} />
      <Route path="/news/news1" element={<News />} />
      <Route path="/news/news2" element={<News2 />} />
      <Route path="/news/news4" element={<News4 />} />
      <Route path="/news/news5" element={<News5 />} />
      <Route path="/news/news6" element={<News6 />} />
      <Route path="/berita/berita" element={<Berita />} />
      <Route path="/brifirst" element={<ReadMore/>} />
    </Routes>
  );
};

export default AllRoute;
