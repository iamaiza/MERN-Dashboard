require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("./models/userModel.js");
const userRouter = require("./routes/userRoutes.js");

const app = express();

app.use(express.json());
app.use(cors());
app.use(userRouter);

mongoose.connect(process.env.MONGO_CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.get("/api", (req, res) => {
    res.json("test ok");
});

app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    const pass = bcrypt.compareSync(password, user.password);
    if (user) {
        if (pass) {
            res.json("Successfully logged in");
        } else {
            res.json("Entered password is invalid");
        }
    } else {
        res.json("User doesn't exist");
    }
});

app.post("/newUser", async (req, res) => {
    const { name, email, password, contact, type } = req.body;

    const user = await User.create({
        name,
        email,
        password: password !== "" && bcrypt.hashSync(password, 10),
        contact,
        type,
    });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
