const User = require("../models/userModel.js")

const getAllCustomers = async(req, res) => {
    const customers = await User.find({ type: "customer" });
    res.status(200).json(customers);
}
const getAllAdmins = async(req, res) => {
    const staff = await User.find({ type: "admin" });
    res.status(200).json(staff);
}
const getAllSuppliers = async(req, res) => {
    const suppliers = await User.find({ type: "supplier" });
    res.status(200).json(suppliers);
}

module.exports = { getAllAdmins, getAllCustomers, getAllSuppliers }