import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "../Atoms/Button";
import loginpage from "../../assets/images/ilustration.png";

const LoginForm = () => {
  let navigate = useNavigate();
  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const handleInput = (event) => {
    let value = event.target.value;
    let name = event.target.name;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let { username, password } = input;
    if ((username === "admin") & (password === "admin")) {
      let token = 12345;
      localStorage.setItem("token", token);
      localStorage.setItem("isAdmin", true);

      navigate("/home");
    } else {
      axios
        .post(`https://fakestoreapi.com/auth/login`, { username, password })
        .then((res) => {
          let { token } = res.data;

          localStorage.setItem("token", token);

          navigate("/home");
        })
        .catch((error) => {
          alert(error.message);
        });
    }
  };
  return (
    <section id="login">
      <div className="flex items-center justify-center min-h-screen bg-gray-100 mt-20">
        <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
          {/* <!-- left side --> */}
          <div className="flex flex-col justify-center p-8 md:p-14">
            <span className="mb-3 text-4xl font-bold">Welcome back</span>
            <span className="font-light text-gray-400 mb-8">
              Don’t have a account, Sign up
            </span>
            <form className="card-body" onSubmit={handleSubmit}>
              <div className="py-4">
                <span className="mb-2 text-md">Username</span>
                <input
                  value={input.username}
                  onChange={handleInput}
                  type={"text"}
                  name="username"
                  className="input input-bordered w-full"
                  placeholder="Username"
                />
              </div>
              <div className="py-4">
                <span className="mb-2 text-md">Password</span>
                <input
                  value={input.password}
                  onChange={handleInput}
                  type={"password"}
                  name="password"
                  className="input input-bordered w-full"
                  placeholder="Password"
                />
              </div>
              <div className="flex justify-between w-full py-4">
                <div className="mr-24">
                  <input type="checkbox" name="ch" id="ch" className="mr-2" />
                  <span className="text-md">Remember me</span>
                </div>
                <span
                  className="font-bold text-md "
                  style={{ color: "#3D85C6" }}
                >
                  Forgot password
                </span>
              </div>
              <Button type={"submit"} buttonPrimary isFullWidth>
                Login
              </Button>
            </form>
          </div>

          {/* <!-- right side --> */}
          <div className="relative">
            <img
              className="py-8 "
              src={loginpage}
              alt="img"
              width={675.54}
              height={454.17}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
