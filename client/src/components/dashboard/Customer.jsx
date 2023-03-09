import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './dashboard.css'
import UsersTable from "../../UI/UsersTable";

const Customer = () => {
    const [customers, setCustomers] = useState([]);
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

        navigate("/dashboard/createUser", { state: { title: "customer" } });
    };

    return (
        <div className="pt-16 h-screen w-full userList px-24 pb-5">
            <h1 className="mb-5 font-bold text-3xl">Customers</h1>
            <UsersTable users={customers} createUser={createNewUser} />
        </div>
    );
};

export default Customer;
