import "./App.css";
import AllRoute from "./router/router";
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <AllRoute />
    </BrowserRouter>
  );
}

export default App;
