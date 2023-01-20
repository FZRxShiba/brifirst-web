import "./App.css";
import AllRoute from "./router/router";
import { BrowserRouter } from "react-router-dom";
import CustomNavbar from "./components/CustomNavbar/CustomNavbar";
import CustomFooter from "./components/CustomFooter/CustomFooter";

function App() {
  return (
    <BrowserRouter>
      <CustomNavbar />
      <AllRoute />
      <CustomFooter />
    </BrowserRouter>
  );
}

export default App;
