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
    useFindAndModify: false,
});

mongoose.set("debug", (collectionName, method, query, doc) => {
    console.log(`${collectionName}.${method}`, JSON.stringify(query), doc);
});

app.get("/api", (req, res) => {
    return res.json("test ok");
});

app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    const pass = bcrypt.compareSync(password, user.password);
    if (user) {
        if (pass) {
            return res.json("Successfully logged in");
        } else {
            return res.json("Entered password is invalid");
        }
    } else {
        return res.json("User doesn't exist");
    }
});


app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
