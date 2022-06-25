import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import MakeDishes from "./pages/MakeDishes";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import OurDishes from "./pages/OurDishes";
import Register from "./pages/Register";
import "./styles/main.scss";
function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="dishes" element={<OurDishes />} />
          <Route path="cart" element={<Cart />} />
          <Route path="make-dish" element={<MakeDishes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
