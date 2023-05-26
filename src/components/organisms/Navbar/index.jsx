import React, { useEffect } from "react";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import Button from "../../Atoms/Button";
import IconLogin from "../../icons/IconLogin";
import { Logo } from "../../Atoms/Logo";
import IconLogout from "../../icons/IconLogout";
import { getAllCarts } from "../../../features/products/productSlice";
import { useSelector } from "react-redux";

const Navbar = () => {
  const location = useLocation().pathname;
  const totalQty = useSelector((state) => {
    const carts = useSelector(getAllCarts);
    return carts.reduce((total, item) => total + item.qty, 0);
  });

  let activeStyle = {
    color: "#000000",
    fontWeight: "bold",
    backgroundColor: "#fff",
    borderRadius: "10%",
  };

  let navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem("token");
    navigate("/home");
  };

  return (
    <div id="navbar" className="navbar bg-base-100 fixed mt-0 top-0">
      <div className="flex-1 ml-11">
        <NavLink as={Link} to={"/"}>
          <Logo />
        </NavLink>
      </div>
      <div className="mr-12">
        <ul tabIndex={0} className="menu menu-horizontal flex-1">
          <li className="mr-5">
            {location === "/" ? (
              <a
                href="#home"
                className="text-base py-2 mx-6 font-quicksand font-semibold group-hover:text-secondary"
              >
                Home
                <span className="block h-0.5 w-0 group-hover:w-full transition-all duration-500  bg-secondary"></span>
              </a>
            ) : (
              <NavLink
                as={Link}
                to="/"
                onClick={() => window.scrollTo(0, 0)}
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className="text-base py-2 mx-6 font-quicksand font-semibold group-hover:text-secondary"
              >
                Home
              </NavLink>
            )}
          </li>
          {localStorage.getItem("token") && localStorage.getItem("isAdmin") && (
            <li className="mr-5">
              <NavLink
                as={Link}
                to="/admin"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Update
              </NavLink>
            </li>
          )}
          {localStorage.getItem("token") && localStorage.getItem("isAdmin") && (
            <li className="mr-5">
              <NavLink
                as={Link}
                to="/admin/sales-recap"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Rekap
              </NavLink>
            </li>
          )}
          {localStorage.getItem("token") && (
            <li className="mr-5">
              <NavLink
                as={Link}
                to="/cart"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Cart
                <div className="absolute top-1 right-1 text-xs rounded-full bg-red-500 text-white px-1">
                  {totalQty}
                </div>
              </NavLink>
            </li>
          )}
          <li className="mr-5">
            {location === "/" ? (
              <a
                href="#contact"
                className="text-base py-2 mx-6 font-quicksand font-semibold group-hover:text-secondary"
              >
                Contact
                <span className="block h-0.5 w-0 group-hover:w-full transition-all duration-500  bg-secondary"></span>
              </a>
            ) : (
              <NavLink
                as={Link}
                to="/#contact"
                onClick={() => window.scrollTo(0, 792)}
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className="text-base py-2 mx-6 font-quicksand font-semibold group-hover:text-secondary"
              >
                Contact
              </NavLink>
            )}
          </li>
        </ul>
        <ul className="flex-none">
          {!localStorage.getItem("token") && (
            <li>
              <Link to="/login">
                <Button buttonPrimary>
                  <div className="flex text-xs">
                    <IconLogin />
                    <p className="m-auto mx-2 text-xs">Login</p>
                  </div>
                </Button>
              </Link>
            </li>
          )}
          {localStorage.getItem("token") && (
            <li onClick={() => logOut()}>
              <Button buttonDanger>
                <div className="flex text-xs">
                  <IconLogout />
                  <p className="m-auto mx-2 text-xs">Logout</p>
                </div>
              </Button>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
