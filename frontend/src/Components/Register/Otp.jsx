import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Otp.css";
import Chick from "../../Img/Otp/Chick.png"; // Replace with the actual path to your chick image

const Otp = () => {
  const navigate = useNavigate();
  const [timer, setTimer] = useState(47); // Countdown timer

  // Simulate countdown timer
  React.useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleVerify = () => {
    navigate("/reset-password"); // Placeholder for OTP verification logic
  };

  const handleSendAgain = () => {
    alert("OTP Resent!"); // Placeholder for resend OTP logic
    setTimer(47); // Reset the timer
  };

  const handleBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <div className="otp-container">
      <div className="otp-card">
        {/* Back Button */}
        <button className="back-button" onClick={handleBack}>
          &#8592;
        </button>

        {/* Title */}
        <h2 className="otp-title">Check your phone</h2>
        <p className="otp-subtitle">
          We’ve sent a code to your phone
        </p>

        {/* OTP Input */}
        <div className="otp-inputs">
          <input type="text" maxLength="1" />
          <input type="text" maxLength="1" />
          <input type="text" maxLength="1" />
          <input type="text" maxLength="1" />
        </div>

        {/* Timer */}
        <p className="otp-timer">Code expires in: 00:{timer < 10 ? `0${timer}` : timer}</p>

        {/* Buttons */}
        <button className="verify-button" onClick={handleVerify}>
          Verify
        </button>
        <button className="send-again-button" onClick={handleSendAgain}>
          Send Again
        </button>

        {/* Chick Image */}
        <img src={Chick} alt="Chick" className="chick-image" />
      </div>
    </div>
  );
};

export default Otp;