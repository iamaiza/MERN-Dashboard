const User = require("../models/userModel.js");
const bcrypt = require("bcrypt");

const createNewUser = async (req, res) => {
    const { name, email, password, contact, type } = req.body;
    await User.create({
        name,
        email,
        password: password !== "" && bcrypt.hashSync(password, 10),
        contact,
        type,
    });
};

const getAllCustomers = async (req, res) => {
    const customers = await User.find({ type: "customer" });
    res.status(200).json(customers);
};
const getAllAdmins = async (req, res) => {
    const staff = await User.find({ type: "admin" });
    res.status(200).json(staff);
};
const getAllSuppliers = async (req, res) => {
    const suppliers = await User.find({ type: "supplier" });
    res.status(200).json(suppliers);
};

const updateUser = async (req, res) => {
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
        res.json(error);
    }
};

const deleteUser = async (req, res) => {
    const id = req.params.id;

    await User.findByIdAndRemove(id).exec();
    res.send("Successfully deleted");
};

const filterUsers = async (req, res) => {
    try {
        const { search } = req.query;
        const query = await User.find({
            name: { $regex: ".*" + search + ".*" },
        });
        // console.log('query:',query)
        return res.json(query).end();
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getAllAdmins,
    getAllCustomers,
    getAllSuppliers,
    createNewUser,
    updateUser,
    deleteUser,
    filterUsers,
};
