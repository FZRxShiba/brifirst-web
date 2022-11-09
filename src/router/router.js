import { BrowserRouter, Routes, Route } from "react-router-dom";
import Modul from "../components/Modul/Modul";
import Homepage from "../pages/Homepage/Homepage";

const AllRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/modul" element={<Modul />} />
    </Routes>
  );
};

export default AllRoute;
