import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UsersTable from "../../UI/UsersTable";
import "./dashboard.css";

const Staff = () => {
    const [staff, setStaff] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        getStaff();
    }, []);

    async function getStaff() {
        const res = await axios.get("/admin");
        setStaff(res.data);
    }

    const createNewUser = (e) => {
        e.preventDefault();

        navigate("/dashboard/createUser", { state: { title: "admin" } });
    };

    return (
        <div className="pt-16 h-screen w-full userList px-24 pb-5">
            <h1 className="mb-5 font-bold text-3xl">Admin</h1>
            <UsersTable users={staff} setUsers={setStaff} createUser={createNewUser} />
        </div>
    );
};

export default Staff;
