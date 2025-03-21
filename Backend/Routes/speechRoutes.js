const express = require('express');
const { generateSpeech } = require('../Controller/speechController');

const router = express.Router();

// Route: Translate text and generate speech
router.post('/speak', generateSpeech);

module.exports = router;
