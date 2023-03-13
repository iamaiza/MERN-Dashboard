const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const productSchema = new Schema({
    name: String,
    description: String,
    purchasePrice: String,
    salePrice: String,
    supplierId: String,
    totalCount: Number,
});

const Product = mongoose.model("Products", productSchema)

module.exports = Product