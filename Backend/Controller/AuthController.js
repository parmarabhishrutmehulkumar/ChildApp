const generateToken = require("../Config/Token");
// const LoginSchema = require("../models/LoginSchema");
const SignupSchema = require("../models/UserSchema");
const bcrypt = require("bcrypt");
const SendEmail = require("../Config/SendMail");

const Signup = async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    return res.status(400).json({ message: "Password does not match" });
  }

  try {
    // const salt = bcrypt.genSalt(10);
    // const hanshedpassword = await bcrypt.hash(password, salt);

    const user = await SignupSchema.create({
      name,
      email,
      password,
      confirmPassword,
    });

    console.log(user);
    const token = generateToken(user._id);
    res.status(201).json({ message: "User created successfully", user, token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const Login = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);

  try {
    const user = await SignupSchema.findOne({email});
    console.log(user);
    res
      .status(200)
      .json({ message: "User logged in successfully", user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const Email = async (req, res) => {
  const { email } = req.body;
  const user = await SignupSchema.findOne({ email });

  if (!user) return res.status(404).json({ message: "User not found" });

  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  user.otp = otp;
  user.otpExpiry = Date.now() + 5 * 60 * 1000; // OTP valid for 5 minutes
  await user.save();

  await SendEmail(email, "Password Reset OTP", `Your OTP is: ${otp}`);

  res.json({ message: "OTP sent to your email" });
};

const ResetPassword = async (req, res) => {
  const { email, newPassword } = req.body;

  const user = await SignupSchema.findOne({ email });
  if (!user) return res.status(404).json({ message: "User not found" });

  user.password = await newPassword
  user.confirmPassword = await newPassword
  await user.save();

  res.json({ message: "Password has been reset successfully" });
};

module.exports = {
  Signup,
  Login,
  Email,
  ResetPassword,
};
