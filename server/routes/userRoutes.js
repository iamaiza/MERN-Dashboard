const express = require("express");
const { getAllCustomers, getAllAdmins, getAllSuppliers } = require("../controllers/userController.js");
const router = new express.Router();
const User = require("../models/userModel")

router.get("/customer", getAllCustomers);
router.get("/admin", getAllAdmins);
router.get("/supplier", getAllSuppliers);

module.exports = router;
