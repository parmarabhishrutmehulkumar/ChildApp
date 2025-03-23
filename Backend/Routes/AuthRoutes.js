const express = require("express");
const passport = require("passport");
const { signup, login, forgotPassword, resetPassword, updateLanguage } = require("../Controller/AuthController");
const authMiddleware = require("../Middleware/authMiddleware");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);
router.put("/update-language", authMiddleware, updateLanguage);

router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));
router.get("/google/callback", passport.authenticate("google", { session: false }), (req, res) => {
  res.json({ token: req.user.token, language: req.user.language });
});

module.exports = router;
