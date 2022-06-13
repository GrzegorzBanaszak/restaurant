import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import OurDishes from "./pages/OurDishes";
import Register from "./pages/Register";
import "./styles/main.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="dishes" element={<OurDishes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
