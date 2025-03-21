const express = require("express");
const textToSpeech = require("@google-cloud/text-to-speech");
const fs = require("fs");
const util = require("util");
const Language = require("../models/Language");

const router = express.Router();
const client = new textToSpeech.TextToSpeechClient();

// Mapping languages to Google TTS codes
const languageCodes = {
  en: "en-US",
  gu: "gu-IN",
  hi: "hi-IN",
};

// ✅ Generate Speech from Text
router.post("/generate-speech", async (req, res) => {
  const { text, email } = req.body;

  try {
    // Get user's preferred language
    const userLanguage = await Language.findOne({ email });
    if (!userLanguage) return res.status(404).json({ message: "Language not set" });

    const langCode = languageCodes[userLanguage.language]; // Get correct language code

    const request = {
      input: { text },
      voice: { languageCode: langCode, ssmlGender: "NEUTRAL" },
      audioConfig: { audioEncoding: "MP3" },
    };

    const [response] = await client.synthesizeSpeech(request);
    const filePath = `./public/audio/${email}.mp3`;

    const writeFile = util.promisify(fs.writeFile);
    await writeFile(filePath, response.audioContent, "binary");

    res.status(200).json({ message: "Speech generated", file: `/audio/${email}.mp3` });
  } catch (error) {
    res.status(500).json({ message: "Error generating speech", error });
  }
});

module.exports = router;
