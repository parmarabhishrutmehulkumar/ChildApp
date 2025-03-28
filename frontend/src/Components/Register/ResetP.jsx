import React, { useState } from "react";
import "./ResetP.css";
import Caterpillar from "../../Img/ResetP/Caterpillar.png"; // Replace with the actual path to your caterpillar image

const ResetP = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = () => {
    if (password.length >= 6 && password === confirmPassword) {
      alert("Password reset successfully!"); // Placeholder for reset logic
    } else {
      alert("Passwords do not match or are too short!");
    }
  };

  return (
    <div className="reset-password-container">
      <div className="reset-password-card">
        {/* Title */}
        <h2 className="reset-password-title">Reset Password</h2>
        <p className="reset-password-subtitle">
          Please enter your new password
        </p>

        {/* Form */}
        <form className="reset-password-form">
          <div className="form-group">
            <label htmlFor="new-password">New Password</label>
            <input
              type="password"
              id="new-password"
              placeholder="Enter your new password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password">Old Password</label>
            <input
              type="password"
              id="confirm-password"
              placeholder="Enter your old password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
            <p className="password-hint">
              <span className={password.length >= 6 ? "valid" : "invalid"}>
                Your password must contain at least 6 characters
              </span>
            </p>
          </div>
          <button
            type="button"
            className="done-button"
            onClick={handleSubmit}
          >
            Done
          </button>
        </form>

        {/* Caterpillar Image */}
        <img src={Caterpillar} alt="Caterpillar" className="caterpillar-image" />
      </div>
    </div>
  );
};

export default ResetP;