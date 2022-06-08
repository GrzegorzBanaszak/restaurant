import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import OurDishes from "./components/OurDishes";
import Register from "./components/Register";
import "./styles/main.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dishes" element={<OurDishes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
