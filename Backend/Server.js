const express = require("express");
const Cors = require("cors");
const Db = require("./Config/Db");
const dotenv = require("dotenv").config();
const AuthRoutes = require("./Routes/AuthRoutes");
const speechRoutes = require("./Routes/speechRoutes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(Cors());

app.use("/api/auth", AuthRoutes)
app.use('/api/tts', speechRoutes);


app.listen(process.env.PORT, () => console.log(`http://localhost:${process.env.PORT}`));

Db();
