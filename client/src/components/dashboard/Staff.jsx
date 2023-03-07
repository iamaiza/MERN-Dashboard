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
            <div className="search flex items-center mb-7 mx-auto">
                <form action="" className="flex">
                    <input
                        type="text"
                        placeholder="Search admin....."
                        className="border w-full mr-1 py-1 px-2 outline-none"
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
            <UsersTable users={staff} />
        </div>
    );
};

export default Staff;
