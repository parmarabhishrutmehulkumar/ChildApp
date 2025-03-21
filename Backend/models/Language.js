
const mongoose = require("mongoose");

const LanguageSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  language: { 
    type: String, 
    enum: ["en", "gu", "hi"], // Only these three languages
    required: true 
  },
});

const Language = mongoose.model("Language", LanguageSchema);
module.exports = Language;
