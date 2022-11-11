import { BrowserRouter, Routes, Route } from "react-router-dom";
import Modul from "../components/Modul/Modul";
import Homepage from "../pages/Homepage/Homepage";
import StrukturOrganisasi from "../pages/StrukturOrganisasi/StrukturOrganisasi";

const AllRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/modul" element={<Modul />} />
      <Route path="/struktur-organisasi" element={<StrukturOrganisasi />} />
    </Routes>
  );
};

export default AllRoute;
