// import React from "react";

// const App = () => {
//   return (
//     <div className="h-screen w-full flex justify-center items-center bg-gray-800">
//       <h1 className="text-red-200 text-3xl">Hello World</h1>
//     </div>
//   );
// };

// export default App;

import { BrowserRouter, Route } from "react-router-dom";
// import NavigationBar from './components/NavigationBar';
import { Routes } from "react-router-dom";
import LoginPages from "./pages/LoginPages";
import HomePages from "./pages/HomePages";
import Navbar from "./components/organisms/Navbar";
import Footer from "./components/organisms/Footer";


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
          <Route path="*" element={<h1>Pages not Found</h1>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

