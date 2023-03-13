const express = require("express")
const { createNewProduct, getAllProducts, deleteProducts, updateProduct } = require("../controllers/productsController")
const router = express.Router()

router.post("/createProduct", createNewProduct)
router.get("/products", getAllProducts)
router.delete("/deleteProduct/:id", deleteProducts)
router.put("/updateProduct/:id", updateProduct)

module.exports = router