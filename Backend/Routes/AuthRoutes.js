const express = require("express");
const { Login, Signup, Email, ResetPassword } = require("../Controller/AuthController");

const router = express.Router();

router.post("/login", Login )
router.post("/signup", Signup )
router.post("/sendemail", Email)
router.post("/resetpassword", ResetPassword)


module.exports = router