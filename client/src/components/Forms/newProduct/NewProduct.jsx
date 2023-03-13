import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ProductsForm from "../../../UI/ProductsForm";

const newProduct = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [salesPrice, setSalesPrice] = useState("");
    const [purchasePrice, setPurchasePrice] = useState("");
    const [totalCount, setTotalCount] = useState("");
    const [supplierId, setSupplierId] = useState("");
    const navigate = useNavigate()
    const location = useLocation()
    
    const createNewProductHandler = async (e) => {
        e.preventDefault();

        try {
            if (
                name === "" &&
                description === "" &&
                purchasePrice === "" &&
                salesPrice === "" &&
                supplierId === "" &&
                totalCount === ""
            ) {
                return;
            }

            await axios.post("/createProduct", {
                name,
                description,
                purchasePrice,
                salesPrice,
                supplierId,
                totalCount,
            });

            setName("");
            setDescription("");
            setPurchasePrice("");
            setSalesPrice("");
            setTotalCount("");

            navigate(`${location.state.prevPage}`);

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <ProductsForm
            name={name}
            setName={setName}
            des={description}
            setDes={setDescription}
            purchase={purchasePrice}
            setPurchase={setPurchasePrice}
            sales={salesPrice}
            setSales={setSalesPrice}
            supplierId={supplierId}
            setSupplierId={setSupplierId}
            totalCount={totalCount}
            setTotalCount={setTotalCount}
            formHandler={createNewProductHandler}
            text="Create"
        />
    );
};

export default newProduct;
