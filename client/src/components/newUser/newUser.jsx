import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const NewUser = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [contact, setContact] = useState("");

    const location = useLocation();
    const navigate = useNavigate();


    const createNewUserHandler = async (e) => {
        e.preventDefault();
        const con = name !== "" && email !== "" && contact !== "";

        if (con && (password === "" || password !== "")) {
            navigate(`/dashboard/${location.state.title}`);
        } else return;

        try {
            if (con && (password === "" || password !== "")) {
                await axios.post("/newUser", {
                    name,
                    email,
                    password,
                    contact,
                    type: location.state.title,
                });
                setName("");
                setEmail("");
                setPassword("");
                setContact("");
            } else return;
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="p-4 flex flex-col min-h-screen">
            <div className="grow flex items-center justify-around">
                <form className="" onSubmit={createNewUserHandler}>
                    <div>
                        <label htmlFor="" className="font-semibold">
                            Name
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="block w-full border mt-1 mb-3 p-1 outline-none"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                        />
                    </div>
                    <div>
                        <label htmlFor="" className="font-semibold">
                            Email Address
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="block w-full border mt-1 mb-3 p-1 outline-none"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        />
                    </div>
                    <div
                        className={`${
                            location.state.title === "admin"
                                ? "block"
                                : "hidden"
                        }`}
                    >
                        <label htmlFor="" className="font-semibold">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="block w-full border mt-1 mb-3 p-1 outline-none"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                        />
                    </div>
                    <div>
                        <label htmlFor="" className="font-semibold">
                            Phone No.
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your phone number"
                            className="block w-full border mt-1 mb-3 p-1 outline-none"
                            value={contact}
                            onChange={(e) => {
                                setContact(e.target.value);
                            }}
                        />
                    </div>
                    <div>
                        <button className="py-3 px-3 text-white mt-3 w-full flex justify-center bg-green-500">
                            Create User
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default NewUser;
