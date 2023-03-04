require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.get("/api", (req, res) => {
    res.json("test ok");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});