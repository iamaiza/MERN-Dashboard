import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './dashboard.css'
import UsersTable from "../../UI/UsersTable";

const Customer = () => {
    const [customers, setCustomers] = useState([]);
    const [searchCustomer, setSearchCustomer] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        getCustomers();
    }, []);

    async function getCustomers() {
        const res = await axios.get("/customer");
        setCustomers(res.data);
    }

    const createNewUser = (e) => {
        e.preventDefault();

        navigate("/createUser", { state: { title: "customer" } });
    };

    return (
        <div className="pt-16 h-screen w-full userList px-24 pb-5">
            <h1 className="mb-5 font-bold text-3xl">Customers</h1>
            <div className="flex items-center mb-7 mx-auto search">
                <form action="" className="flex">
                    <input
                        type="text"
                        placeholder="Search customers....."
                        className="border w-full mr-1 py-1 px-2 outline-none"
                        value={searchCustomer}
                        onChange={(e) => {setSearchCustomer(e.target.value)}}
                    />
                    <button className="bg-gray-500 py-1 px-5 mr-1 text-white">
                        Search
                    </button>
                </form>

                <button
                    className="bg-gray-500 py-1 px-7 text-white"
                    onClick={createNewUser}
                >
                    Add
                </button>
            </div>
            <UsersTable users={customers} />
        </div>
    );
};

export default Customer;
