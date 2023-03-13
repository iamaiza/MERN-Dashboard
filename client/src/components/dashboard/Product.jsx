import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Product = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getAllProducts();
    }, []);

    async function getAllProducts() {
        const res = await axios.get("/products");
        setProducts(res.data);
    }

    const addNewProductHandler = (e) => {
        e.preventDefault();
        navigate("/dashboard/createProduct", {
            state: { prevPage: "/dashboard/products" },
        });
    };

    const deleteProductHandler = async (id) => {
        await axios.delete(`/deleteProduct/${id}`);

        const tableRow = document.getElementById(id);
        const table = document.getElementById("productTable");
        const tbody = document.getElementById("tbody");
        tableRow.remove();

        if (tbody.innerHTML === "") {
            table.remove();
        }
    };

    const updateProductHandler = async (id, name, description, purchasePrice, salePrice, supplierId, totalCount) => {
      navigate("/dashboard/updateProduct", { state: { prevPage: "/dashboard/products", data: { id, name, description, purchasePrice, salePrice, supplierId, totalCount } } })

      await axios.put(`/updateProduct/${id}`, { name, description, purchasePrice, salePrice, supplierId, totalCount })
    }

    return (
      <div className="pt-16 h-screen w-full userList px-14 pb-5">
        <h1 className="mb-5 font-bold text-3xl">Products</h1>
        <div className="text-right mb-3" onClick={addNewProductHandler}>
          <button className="bg-gray-500 py-2 px-5 mr-1 text-white">
            Add product
          </button>
        </div>
        {products.length > 0 && (
          <table className="w-full" id="productTable">
            <thead>
              <tr className="text-left">
                <th className="py-2 pl-2 pr-5 leading-5">Id</th>
                <th className="py-2 pl-2 pr-5 leading-5">Name</th>
                <th className="py-2 pl-2 pr-5 leading-5">Description</th>
                <th className="py-2 pl-2 pr-5 leading-5">Purchase Price</th>
                <th className="py-2 pl-2 pr-5 leading-5">Sales Price</th>
                <th className="py-2 pl-2 pr-5 leading-5">Supplier_id</th>
                <th className="py-2 pl-2 pr-5 leading-5">Total Count</th>
                <th className="py-2 pl-2 pr-5 leading-5">Action</th>
              </tr>
            </thead>
          <tbody id="tbody">
            {products.map((el) => (
              <tr key={el._id} id={el._id}>
                <td className="text-sm py-2 pl-2 pr-5">{el._id}</td>
                <td className="text-sm py-2 pl-2 pr-5">{el.name}</td>
                <td className="text-sm py-2 pl-2 pr-5">{el.description}</td>
                <td className="text-sm py-2 pl-2 pr-5">{el.purchasePrice}</td>
                <td className="text-sm py-2 pl-2 pr-5">{el.salePrice}</td>
                <td className="text-sm py-2 pl-2 pr-5">{el.supplierId}</td>
                <td className="text-sm py-2 pl-2 pr-5">{el.totalCount}</td>
                <td className="text-sm py-2 pl-2 pr-5">
                  <div className="flex items-center justify-center gap-2">
                    <div
                      onClick={() => {
                        deleteProductHandler(el._id);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4 text-red-600 cursor-pointer"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                        </div>
                        <div onClick={() => {
                          updateProductHandler(el._id, el.name, el.description, el.purchasePrice, el.salePrice, el.supplierId, el.totalCount)
                        }}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-4 h-4 text-blue-900 cursor-pointer"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                            />
                          </svg>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
    );
};

export default Product;
