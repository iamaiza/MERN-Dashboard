import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ProductsForm = ({ name, des, purchase, sales, supplierId, setName, setDes, setPurchase, setSales, setSupplierId, totalCount, setTotalCount, formHandler, text }) => {
    const [suppliers, setSuppliers] = useState([]);
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        getSuppliers();
    }, []);

    const getSuppliers = async () => {
        const res = await axios.get("/supplier");
        setSuppliers(res.data);
    };

    const prevPageHandler = () => {
        navigate(`${location.state.prevPage}`);
    };

    return (
        <div className="px-4 pb-4 pt-9 flex min-h-screen w-full relative">
            <div
                className="absolute top-16 text-gray-600 hover:bg-gray-50 p-2 rounded-full"
                onClick={prevPageHandler}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                    />
                </svg>
            </div>
            <div className="grow flex items-center justify-around">
                <form className="" onSubmit={formHandler}>
                    <div>
                        <label htmlFor="" className="font-semibold">
                            Name
                        </label>
                        <input
                            type="text"
                            placeholder="Product name"
                            className="block w-full border mt-1 mb-3 p-1 outline-none"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="" className="font-semibold">
                            Description
                        </label>
                        <textarea
                            rows="1"
                            className="block w-full border mt-1 mb-3 p-1 outline-none text-sm"
                            placeholder="Product description..."
                            value={des}
                            onChange={(e) => setDes(e.target.value)}
                        ></textarea>
                    </div>
                    <div>
                        <label htmlFor="" className="font-semibold">
                            Purchase Price
                        </label>
                        <input
                            type="text"
                            placeholder="Purchase price"
                            className="block w-full border mt-1 mb-3 p-1 outline-none"
                            value={purchase}
                            onChange={(e) => setPurchase(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="" className="font-semibold">
                            Sales Price
                        </label>
                        <input
                            type="text"
                            placeholder="Sales price"
                            className="block w-full border mt-1 mb-3 p-1 outline-none"
                            value={sales}
                            onChange={(e) => setSales(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="" className="font-semibold">
                            Supplier
                        </label>
                        <select
                            className="block w-full border mt-1 mb-3 p-1 outline-none text-sm"
                            value={supplierId}
                            onChange={(e) => setSupplierId(e.target.value)}
                        >
                            <option value="" disabled>Select supplier</option>
                            {suppliers.map((sup) => (
                                <option key={sup._id} value={sup._id}>
                                    {sup.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="" className="font-semibold">
                            Total Count
                        </label>
                        <input
                            type="number"
                            placeholder="Total count"
                            className="block w-full border mt-1 mb-3 p-1 outline-none"
                            value={totalCount}
                            onChange={(e) => setTotalCount(e.target.value)}
                        />
                    </div>
                    <div>
                        <button className="py-3 px-3 text-white mt-3 w-full flex justify-center bg-gray-500">
                            {text}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProductsForm;
