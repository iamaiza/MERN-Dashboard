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

app.post("/newUser", async (req, res) => {
    const { name, email, password, contact, type } = req.body;

    await User.create({
        name,
        email,
        password: password !== "" && bcrypt.hashSync(password, 10),
        contact,
        type,
    });
});

app.put("/update/:id", async (req, res) => {
    const id = req.params.id;
    const { name, email, password, contact } = req.body;

    try {
        const updateUser = await User.findOneAndUpdate(
            { _id: id },
            { name, email, password, contact },
            { new: true },
            (err, foundUser) => {
                if (!err) {
                    foundUser.name = name;
                    foundUser.email = email;
                    foundUser.password = bcrypt.hashSync(password, 10);
                    foundUser.contact = contact;

                    foundUser.save();
                }
            }
        );
        res.send(updateUser);
    } catch (error) {
        return res.json(error);
    }
});

app.get("/users", async (req, res) => {
    try {
        const { search } = req.query;
        const query = await User.find({ name: { $regex: '.*' + search + '.*' }});
        console.log('query:',query)
        return res.json(query).end();
    } catch (error) {
        console.log(error);
    }
});

app.delete("/delete/:id", async (req, res) => {
    const id = req.params.id;

    await User.findByIdAndRemove(id).exec();
    res.send("Successfully deleted");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
