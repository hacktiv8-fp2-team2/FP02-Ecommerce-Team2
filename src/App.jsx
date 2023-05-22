import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import LoginPages from "./pages/LoginPages";
import HomePages from "./pages/HomePages";
import Cart from "./pages/Cart";
import Navbar from "./components/organisms/Navbar";
import Footer from "./components/organisms/Footer";
import { ProductDetail } from "./components/Templates/ProductDetail";

function App() {
  window.onscroll = () => {
    const header = document.getElementById("navbar");
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav) {
      header.classList.add("navbar-fixed");
    } else {
      header.classList.remove("navbar-fixed");
    }
  };

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePages />} />
          <Route path="/home" element={<HomePages />} />
          <Route path="/login" element={<LoginPages />} />
          <Route path="/product-detail" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<h1>Pages not Found</h1>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
