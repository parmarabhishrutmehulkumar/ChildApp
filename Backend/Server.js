require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const authRoutes = require("./Routes/AuthRoutes");
require("./config/passport");
const db = require("./config/Db");

const app = express();
app.use(express.json());
db();
app.use(session({ secret: process.env.SESSION_SECRET, resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use("/api/auth", authRoutes)

app.listen(process.env.PORT, () => {
    console.log(`http://localhost:${process.env.PORT}`);
});