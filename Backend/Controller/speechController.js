const axios = require('axios');
const gtts = require('gtts');
const fs = require('fs');
const path = require('path');

const LIBRE_TRANSLATE_URL = "https://libretranslate.com/translate"; // Free Translation API

exports.generateSpeech = async (req, res) => {
    try {
        const { text, targetLang } = req.body;

        // Translate text using LibreTranslate (No API Key Needed)
        const response = await axios.post(LIBRE_TRANSLATE_URL, {
            q: text,
            source: "en",
            target: targetLang,
            format: "text"
        });

        const translatedText = response.data.translatedText;
        console.log(`Translated: ${translatedText}`);

        // Generate Speech
        const speech = new gtts(translatedText, targetLang);
        const filePath = path.join(__dirname, '../public/audio.mp3');

        speech.save(filePath, (err) => {
            if (err) return res.status(500).json({ message: 'Speech generation failed' });

            res.json({ message: 'Speech generated', audio: 'http://localhost:4545/audio.mp3' });
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
