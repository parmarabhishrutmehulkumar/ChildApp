const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  googleId: String,
  ageGroup: { type: String, enum: ["2-4", "5-6"], default: "2-4" },
  language: { type: String, enum: ["hindi", "english", "gujarati"], default: "english" },
  otp: Number,
});

module.exports = mongoose.model("User", UserSchema);
