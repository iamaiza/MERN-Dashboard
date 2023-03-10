const express = require("express");
const { getAllCustomers, getAllAdmins, getAllSuppliers, createNewUser, updateUser, deleteUser, filterUsers } = require("../controllers/userController.js");
const router = new express.Router();

router.post("/newUser", createNewUser)
router.get("/customer", getAllCustomers);
router.get("/admin", getAllAdmins);
router.get("/supplier", getAllSuppliers);
router.put("/update/:id", updateUser)
router.delete("/delete/:id", deleteUser)
router.get("/users", filterUsers)

module.exports = router;
