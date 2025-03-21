const express = require("express");
const router = express.Router();
const Language = require("../models/Language")

// ✅ Set Language Preference
router.post("/set-language", async (req, res) => {
  const { email, language } = req.body;

  if (!["en", "gu", "hi"].includes(language)) {
    return res.status(400).json({ message: "Invalid language selection" });
  }

  try {
    const userLanguage = await Language.findOneAndUpdate(
      { email },
      { language },
      { new: true, upsert: true }
    );

    res.status(200).json({ message: "Language updated", language: userLanguage.language });
  } catch (error) {
    res.status(500).json({ message: "Error updating language", error });
  }
});

// ✅ Get Language Preference
router.get("/get-language/:email", async (req, res) => {
  try {
    const userLanguage = await Language.findOne({ email: req.params.email });

    console.log(userLanguage);

    if (!userLanguage) return res.status(404).json({ message: "Language not set" });

    res.status(200).json({ language: userLanguage.language });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
});

module.exports = router;
