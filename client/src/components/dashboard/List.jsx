import React from "react";
import { Link } from "react-router-dom";
const List = () => {
    return (
        <div className="pt-16 min-h-screen bg-gray-500">
            <ul className=" py-5 -mt-2 dashboard-list">
                <li className="py-2 px-5 text-white">
                    <Link to='/dashboard/board'>Dashboard</Link>
                </li>
                <li className="py-2 px-5 text-white">
                    <Link to='/dashboard/customer'>Customers</Link>
                </li>
                <li className="py-2 px-5 text-white ">
                    <Link to='/dashboard/orders'>Orders</Link>
                </li>
                <li className="py-2 px-5 text-white ">
                    <Link to='/dashboard/products'>Products</Link>
                </li>
                <li className="py-2 px-5 text-white ">
                    <Link to='/dashboard/sales'>Sales</Link>
                </li>
                <li className="py-2 px-5 text-white ">
                    <Link to='/dashboard/admin'>Staff</Link>
                </li>
                <li className="py-2 px-5 text-white ">
                    <Link to='/dashboard/supplier'>Suppliers</Link>
                </li>
            </ul>
        </div>
    );
};

export default List;
