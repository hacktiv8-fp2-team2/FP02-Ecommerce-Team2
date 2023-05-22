import React, { useEffect } from "react";
import { Link, NavLink, useNavigate  } from "react-router-dom";
import Button from "../../Atoms/Button";
import IconLogin from "../../icons/IconLogin";
import { Logo } from "../../Atoms/Logo";
import IconLogout from "../../icons/IconLogout";

const Navbar = () => {
  let activeStyle = {
    color: "#000000",
    fontWeight: "bold",
    backgroundColor: "#fff",
    borderRadius: "10%",
  };

  let navigate = useNavigate();

  const logOut = () => {
    localStorage.clear();
    navigate("/home");
  };

  useEffect(() => { }, []);

  return (
    <div id="navbar" className="navbar bg-base-100">
      <div className="flex-1 ml-11">
        <Logo />
      </div>
      <div className="mr-12">
        <ul tabIndex={0} className="menu menu-horizontal flex-1">
          <li className="mr-5">
            <NavLink
              as={Link}
              end
              to="/"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Home
            </NavLink>
          </li>
          {localStorage.getItem("token") && localStorage.getItem("isAdmin") && (
            <li className="mr-5">
              <NavLink
                as={Link}
                to="/update"
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
                to="/rekap"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Rekap
              </NavLink>
            </li>
          )}
          <li className="mr-5">
            <NavLink
              as={Link}
              to="/cart"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Cart
            </NavLink>
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
