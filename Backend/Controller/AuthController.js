const User = require("../models/UserSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { sendEmail } = require("../config/SendMail");
const generateToken = require("../config/Token");

exports.signup = async (req, res) => {
  try {
    const { name, email, password, ageGroup, language } = req.body;
    if(!name || !email || !password || !ageGroup || !language) return res.status(400).json({ message: "All fields are required" });
    if(!["hindi", "english", "gujarati"].includes(language)) return res.status(400).json({ message: "Invalid language" });
    if(!["2-4", "5-6"].includes(ageGroup)) return res.status(400).json({ message: "Invalid age group" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword, ageGroup, language });
    await newUser.save();
    const token = jwt.sign({ userId: newUser._id, language: newUser.language }, process.env.JWT_SECRET, { expiresIn: "7d" });
    res.status(201).json({ message: "User registered successfully", user: newUser, token, language: newUser.language });
  } catch (error) {
    res.status(500).json({ message: "Error registering user" });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ userId: user._id, language: user.language }, process.env.JWT_SECRET, { expiresIn: "7d" });
    res.json({user, token, language: user.language });
  } catch (error) {
    res.status(500).json({ message: "Error logging in" });
  }
};

exports.forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const otp = Math.floor(100000 + Math.random() * 900000);

    sendEmail(email, "OTP for password reset", `Your OTP is: ${otp}`);
    user.otp = otp;
    await user.save();

    res.json({ message: "OTP sent to email", otp }); // Send OTP to frontend
  } catch (error) {
    res.status(500).json({ message: "Error in forgot password" });
  }
};

exports.resetPassword = async (req, res) => {
  try {
    const { email, newPassword } = req.body;
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await User.findOneAndUpdate({ email }, { password: hashedPassword });
    res.json({ message: "Password reset successful" });
  } catch (error) {
    res.status(500).json({ message: "Error resetting password" });
  }
};

exports.updateLanguage = async (req, res) => {
  try {
    const { language } = req.body;
    if (!["hindi", "english", "gujarati"].includes(language)) return res.status(400).json({ message: "Invalid language" });

    await User.findByIdAndUpdate(req.user.userId, { language });
    res.json({ message: "Language updated successfully", language });
  } catch (error) {
    res.status(500).json({ message: "Error updating language" });
  }
};
