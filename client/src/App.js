import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Login from "./pages/Login";
import OurDishes from "./pages/OurDishes";
import Register from "./pages/Register";
import "./styles/main.scss";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const handleIfManuOpen = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };
  return (
    <BrowserRouter>
      <Nav isOpen={isOpen} setIsOpen={setIsOpen} />
      <div onClick={handleIfManuOpen}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dishes" element={<OurDishes />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
