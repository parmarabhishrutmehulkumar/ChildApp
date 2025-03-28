import React from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import Giraffe from "../../Img/Register/Giraffe.png"; // Replace with the actual path
import Caterpillar from "../../Img/Register/Caterpillar.png";
import Bee from "../../Img/Register/Bee.png";
import GoogleIcon from "../../Img/Register/Google.png";
import FacebookIcon from "../../Img/Register/Facebook.png";

const Register = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    alert("Sign-up functionality to be implemented!");
  };

  return (
    <div id="MainRegister">
      {/* Blurred Background Elements */}
      <div className="blurred-mark red-blur"></div>
      <div className="blurred-mark green-blur"></div>
      <div className="blurred-mark blue-blur"></div>

      {/* Irregular Shapes */}
      <div className="irregular-shape shape-1"></div>
      <div className="irregular-shape shape-2"></div>

      <div id="MainSectionInRegister">
        {/* Curved Top Edge */}
        <div className="curved-edge1InRegister"></div>

        {/* Giraffe Image */}
        <img src={Giraffe} alt="Giraffe" className="giraffeInRegister" />

        {/* Form */}
        <form className="signup-form" onSubmit={handleSignUp}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" placeholder="Enter your username" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>

          <button type="submit" className="btn1InRegister">Sign Up</button>
          <button type="button" className="btn2InRegister" onClick={handleBack}>
            Back
          </button>
        </form>

        {/* Caterpillar & Bee */}
        <img src={Caterpillar} alt="Caterpillar" className="CaterpillarInRegister" />
        <img src={Bee} alt="Bee" className="BeeInRegister" />

        {/* Social Media Sign-in */}
        <div className="line1InRegister"></div>
        <div className="text1InRegister">OR</div>
        <div className="line2InRegister"></div>

        <div className="socialMedia1InRegister">
          <img src={GoogleIcon} alt="Google" className="googleInRegister" />
        </div>
        <div className="socialMedia2InRegister">
          <img src={FacebookIcon} alt="Facebook" className="facebookInRegister" />
        </div>

        {/* Curved Bottom Edge */}
        <div className="curved-edge2InRegister"></div>
      </div>
    </div>
  );
};

export default Register;
