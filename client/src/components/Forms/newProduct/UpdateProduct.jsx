import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ProductsForm from "../../../UI/ProductsForm";

const UpdateProduct = () => {
    const location = useLocation();
    const [name, setName] = useState(location.state.data.name);
    const [description, setDescription] = useState(location.state.data.desc);
    const [purchasePrice, setPurchasePrice] = useState(location.state.data.purchase);
    const [salesPrice, setSalesPrice] = useState(location.state.data.sales);
    const [supplierId, setSupplierId] = useState(location.state.data.supplierId);
    const [totalCount, setTotalCount] = useState(location.state.data.totalCount);

    const updateProductHandler = async (e) => {
        e.preventDefault()

        try {

            await axios.put(`/updateProduct/${location.state.data.id}`, {
                name, description, purchasePrice, salesPrice, supplierId, totalCount
            })

            setName("")
            setDescription("")
            setPurchasePrice("")
            setSalesPrice("")
            setSupplierId("")
            setTotalCount("")

        } catch (error) {
            console.log(error)
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
            formHandler={updateProductHandler}
            text="Update"
        />
    );
};

export default UpdateProduct;
