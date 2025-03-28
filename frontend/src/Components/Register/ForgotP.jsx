import React from "react";
import { useNavigate } from "react-router-dom";
import "./ForgotP.css";
import Ghost from "../../Img/ForgotP/Ghost.png"; // Replace with the actual path to your ghost image
import Bee from "../../Img/ForgotP/Bee.png"; // Replace with the actual path to your bee icon

const ForgotP = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  const handleSend = () => {
    navigate("/otp-verification"); // Navigate to the OTP verification page
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-card">
        {/* Back Button */}
        <button className="back-button" onClick={handleBack}>
          &#8592;
        </button>

        {/* Title */}
        <h2 className="forgot-password-title">Forgot password</h2>
        <p className="forgot-password-subtitle">
          Please enter your Email Address to receive a verification code.
        </p>

        {/* Form */}
        <form className="forgot-password-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email here"
            />
          </div>
          <a href="#" className="try-another-way">
            Try another way
          </a>
          <button type="button" className="send-button" onClick={handleSend}>
            Send <img src={Bee} alt="Bee" className="bee-icon" />
          </button>
        </form>

        {/* Ghost Image */}
        <img src={Ghost} alt="Ghost" className="ghost-image" />
      </div>
    </div>
  );
};

export default ForgotP;