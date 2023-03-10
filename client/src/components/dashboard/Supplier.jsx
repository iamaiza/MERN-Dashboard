import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UsersTable from "../../UI/UsersTable";
import "./dashboard.css";

const Supplier = () => {
    const [suppliers, setSuppliers] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        getSuppliers();
    }, []);

    async function getSuppliers() {
        const res = await axios.get("/supplier");
        setSuppliers(res.data);
    }

    const createNewUser = (e) => {
        e.preventDefault();
        navigate("/dashboard/createUser", { state: { title: "supplier" }});
    };

    return (
        <div className="pt-16 h-screen w-full userList px-24 pb-5">
            <h1 className="mb-5 text-3xl font-bold">Suppliers</h1> 
            <UsersTable users={suppliers} setUsers={setSuppliers} createUser={createNewUser} />
        </div>
    );
};

export default Supplier;
