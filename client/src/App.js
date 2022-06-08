import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Login from "./pages/Login";
import OurDishes from "./pages/OurDishes";
import Register from "./pages/Register";
import "./styles/main.scss";

function App() {
  return (
    <BrowserRouter>
      <Nav />
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
