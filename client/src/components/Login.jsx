import React, { useEffect, useState } from "react";
import "./login.css";
import axios from "axios";
import { Navigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(false);

    const loginUserHandler = async (e) => {
        e.preventDefault();
        try {
            if (email !== "" && password !== "") {
                await axios.post("/login", {
                    email,
                    password,
                });
                setRedirect(true);
                setEmail("");
                setPassword("");
            } else {
                alert("Invalid Data");
                return;
            }
        } catch (error) {
            console.log(error);
        }

        if (redirect) {
            return <Navigate to="/dashboard" />;
        }
    };

    return (
        <div className="p-4 flex flex-col min-h-screen">
            <div className="grow flex items-center justify-around">
                <form className="" onSubmit={loginUserHandler}>
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
                    <div>
                        <label htmlFor="" className="font-semibold">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="block w-full border mt-1 mb-1 p-1 outline-none"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                        />
                    </div>
                    <div>
                        <button className="py-3 px-3 text-white mt-3 w-full flex justify-center bg-green-500">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
