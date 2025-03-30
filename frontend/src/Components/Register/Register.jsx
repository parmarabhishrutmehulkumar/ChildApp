import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // Import Framer Motion
import "./Register.css";
import Giraffe from "../../Img/Register/Giraffe.png";
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
    <motion.div 
      id="MainRegister"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Blurred Background Elements */}
      <motion.div className="blurred-mark red-blur" animate={{ scale: [0.9, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity }} />
      <motion.div className="blurred-mark green-blur" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2.5, repeat: Infinity }} />
      <motion.div className="blurred-mark blue-blur" animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 3, repeat: Infinity }} />

      {/* Irregular Shapes */}
      <div className="irregular-shape shape-1"></div>
      <div className="irregular-shape shape-2"></div>

      <motion.div 
        id="MainSectionInRegister"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Curved Top Edge */}
        <div className="curved-edge1InRegister"></div>

        {/* Giraffe Image with Animation */}
        <motion.img 
          src={Giraffe} 
          alt="Giraffe" 
          className="giraffeInRegister"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        {/* Form */}
        <form className="signup-form" onSubmit={handleSignUp}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <motion.input 
              type="text" 
              id="username" 
              placeholder="Enter your username" 
              required
              whileFocus={{ scale: 1.05 }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <motion.input 
              type="password" 
              id="password" 
              placeholder="Enter your password" 
              required
              whileFocus={{ scale: 1.05 }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <motion.input 
              type="email" 
              id="email" 
              placeholder="Enter your email" 
              required
              whileFocus={{ scale: 1.05 }}
            />
          </div>

          <motion.button 
            type="submit" 
            className="btn1InRegister"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Sign Up
          </motion.button>

          <motion.button 
            type="button" 
            className="btn2InRegister" 
            onClick={handleBack}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Back
          </motion.button>
        </form>

        {/* Caterpillar & Bee Animations */}
        <motion.img 
          src={Caterpillar} 
          alt="Caterpillar" 
          className="CaterpillarInRegister"
          animate={{ x: [0, 10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.img 
          src={Bee} 
          alt="Bee" 
          className="BeeInRegister"
          animate={{ y: [-5, 5, -5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        {/* Social Media Sign-in */}
        <div className="line1InRegister"></div>
        <div className="text1InRegister">OR</div>
        <div className="line2InRegister"></div>

        <motion.div 
          className="socialMedia1InRegister"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <img src={GoogleIcon} alt="Google" className="googleInRegister" />
        </motion.div>
        
        <motion.div 
          className="socialMedia2InRegister"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <img src={FacebookIcon} alt="Facebook" className="facebookInRegister" />
        </motion.div>

        {/* Curved Bottom Edge */}
        <div className="curved-edge2InRegister"></div>
      </motion.div>
    </motion.div>
  );
};

export default Register;
