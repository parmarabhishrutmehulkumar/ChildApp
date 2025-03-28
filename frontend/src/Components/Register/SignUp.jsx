import React from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";
import Bunny from "../../Img/SignUp/Bunny.png"; // Replace with the actual path to your bunny image
import Butterfly from "../../Img/SignUp/Butterfly.png"; // Replace with the actual path to your butterfly icon

const SignUp = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  const handleSignUp = (e) => {
    e.preventDefault(); // Prevent default form submission
    alert("Sign-up functionality to be implemented!"); // Placeholder for sign-up logic
  };

  return (
    <div className="signup-container">
      {/* Blurred Background Elements */}
      <div className="blurred-mark red-blur"></div>
      <div className="blurred-mark green-blur"></div>
      <div className="blurred-mark blue-blur"></div>

      {/* Irregular Shapes */}
      <div className="irregular-shape shape-1"></div>
      <div className="irregular-shape shape-2"></div>

      <div className="signup-card">
        {/* Back Button */}
        <button className="back-button" onClick={handleBack} aria-label="Go back">
          &#8592;
        </button>

        {/* Title */}
        <h2 className="signup-title">Create Account</h2>

        {/* Form */}
        <form className="signup-form" onSubmit={handleSignUp}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" placeholder="Enter your username here" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password here" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email here" required />
          </div>
          <button type="submit" className="signup-button">
            Sign up <img src={Butterfly} alt="Butterfly icon" className="butterfly-icon" />
          </button>
        </form>

        {/* Bunny Image */}
        <img src={Bunny} alt="Bunny illustration" className="bunny-image" />
      </div>
    </div>
  );
};

export default SignUp;
