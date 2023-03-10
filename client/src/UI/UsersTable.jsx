import axios from "axios";
import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserTableBody from "./UserTableBody";

const UsersTable = ({ users, setUsers, createUser }) => {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const deleteUserHandler = async (id) => {
        await axios.delete(`/delete/${id}`);

        const tableRow = document.getElementById(id);
        const table = document.querySelector("table");
        const tbody = document.querySelector("tbody");
        tableRow.remove();

        if (tbody.innerHTML === "") {
            table.remove();
        }
    };

    const updateUserHandler = async (
        id,
        name,
        email,
        password,
        contact,
        type
    ) => {
        navigate("/dashboard/updateUser", {
            state: {
                title: type,
                data: { id, name, email, password, contact },
            },
        });

        await axios.put(`/update/${id}`, { name, email, password, contact });
    };

    const filterUserHandler = async () => {
        const res = await axios({
            url: "/users",
            method: "GET",
            params: {
                search,
            },
        });
        setUsers(res.data)
    };

    return (
        <Fragment>
            <div className="flex items-center mb-7 mx-auto search">
                <form action="" className="flex">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="border w-full mr-1 py-1 px-2 outline-none"
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value);
                        }}
                    />
                    <button
                        className="bg-gray-500 py-1 px-5 mr-1 text-white"
                        onClick={(e) => {
                            e.preventDefault();
                            filterUserHandler();
                        }}
                    >
                        Search
                    </button>
                </form>

                <button
                    className="bg-gray-500 py-1 px-7 text-white"
                    onClick={createUser}
                >
                    Add
                </button>
            </div>
            {users.length !== 0 && (
                <table className="w-full">
                    <thead>
                        <tr className="text-left">
                            <th className="p-2">Id</th>
                            <th className="p-2">Name</th>
                            <th className="p-2">Email</th>
                            <th className="p-2">Contact</th>
                            <th className="p-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                                <UserTableBody
                                    key={user._id}
                                    id={user._id}
                                    name={user.name}
                                    email={user.email}
                                    password={user.password}
                                    type={user.type}
                                    contact={user.contact}
                                    deleteHandler={deleteUserHandler}
                                    updateHandler={updateUserHandler}
                                />
                            ))}
                    </tbody>
                </table>
            )}
        </Fragment>
    );
};

export default UsersTable;
