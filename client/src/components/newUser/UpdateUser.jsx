import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const NewUser = () => {
    const location = useLocation();

    const [name, setName] = useState(location.state.data.name);
    const [email, setEmail] = useState(location.state.data.email);
    const [password, setPassword] = useState(location.state.data.password);
    const [contact, setContact] = useState(location.state.data.contact);

    const navigate = useNavigate();

    const updateUserHandler = async (e) => {
        e.preventDefault();

        try {
            await axios.put(`/update/${location.state.data.id}`, {
                name,
                email,
                password,
                contact,
            });
        } catch (error) {
            console.log(error);
        }
    };

    const prevPageHandler = () => {
        navigate(`/dashboard/${location.state.title}`);
    };

    return (
        <div className="p-4 flex min-h-screen w-full relative">
            <div className="absolute top-16 text-gray-600 hover:bg-gray-50 p-2 rounded-full" onClick={prevPageHandler}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
            </div>
            <div className="grow flex items-center justify-around">
                <form className="" onSubmit={updateUserHandler}>
                    <div>
                        <label htmlFor="" className="font-semibold">
                            Name
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="block w-full border mt-1 mb-3 p-1 outline-none"
                            value={name}
                            onChange={(e) => {setName(e.target.value)}}
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
                            onChange={(e) => {setEmail(e.target.value)}}
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
                            onChange={(e) => {setPassword(e.target.value)}}
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
                            onChange={(e) => {setContact(e.target.value)}}
                        />
                    </div>
                    <div>
                        <button className="py-3 px-3 text-white mt-3 w-full flex justify-center bg-gray-500">
                            Update User
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default NewUser;
