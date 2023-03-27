import React from 'react';
import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./login.scss";

const Login = () => {

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
);


  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [err, setErr] = useState("");

  const navigate = useNavigate();

  const { setAuthData } = useContext(AuthContext);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const { login } = useContext(AuthContext);

  // const handleLogin = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await login(inputs);

  //     const { token } = response.data;
  //     localStorage.setItem("token", token);
  //     navigate("/")
  //   } catch (err) {
  //     // setErr(err.response.data);
  //   }
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8888/api/v1/authenticate", inputs);
      const { token, user } = res.data;
      localStorage.setItem("user", JSON.stringify({ token, user }));
      setCurrentUser({ token, user });
      navigate("/");
    } catch (err) {
      setErr(err.response.data);
    }

  };


  return (
    <div className='login'>
      <div className="card">
        <div className="left">
          <h1>Hello!</h1>
          <p>lasnckjcakjcn</p>
          <span>Bạn không có tài khoản ?</span>
          <Link to="/register">
            <button>Đăng Kí</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
            {err && err}
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
