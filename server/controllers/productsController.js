const Product = require("../models/productModel");

const createNewProduct = async (req, res) => {
    const {
        name,
        description,
        purchasePrice,
        salesPrice,
        supplierId,
        totalCount,
    } = req.body;

    await Product.create({
        name,
        description,
        purchasePrice,
        salePrice: salesPrice,
        supplierId,
        totalCount,
    });
};

const getAllProducts = async (req, res) => {
    try {
        const product = await Product.find();
        res.status(200).json(product);
    } catch (error) {
        res.json(error);
    }
};

const deleteProducts = async (req, res) => {
    const id = req.params.id;
    await Product.findByIdAndRemove(id).exec();
    res.send("Successfull deleted the product");
};

const updateProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const {
            name,
            description,
            purchasePrice,
            salePrice,
            supplierId,
            totalCount,
        } = req.body;

        const updateProducts = await Product.findOneAndUpdate(
            { _id: id },
            {
                name,
                description,
                purchasePrice,
                salePrice,
                supplierId,
                totalCount,
            },
            { new: true },
            (err, foundProduct) => {
                if (!err) {
                    foundProduct.name = name;
                    foundProduct.description = description;
                    foundProduct.purchasePrice = purchasePrice;
                    foundProduct.salePrice = salePrice;
                    foundProduct.supplierId = supplierId;
                    foundProduct.totalCount = totalCount;

                    foundProduct.save();
                }
            }
        );

        res.send(updateProducts);
    } catch (error) {
        res.json(error);
    }
};

module.exports = {
    createNewProduct,
    getAllProducts,
    deleteProducts,
    updateProduct,
};
