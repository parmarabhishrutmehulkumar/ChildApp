import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import Dino from "../../Img/Login/Dino.png";

const Login = () => (
  <div className="container">
    <div className="login-box">
      <h2>Welcome Back!</h2>
      <form>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email here" />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password here"
          />
        </div>
        <Link to="/forgot-password" className="forgot-password">
          Forgot your password?
        </Link>
        <button type="submit" className="login-btn">
          Log In
        </button>
        <p className="signup-text">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      <img src={Dino} alt="Dinosaur illustration" />
    
      </form>
    </div>

     
  </div>
);

export default Login;