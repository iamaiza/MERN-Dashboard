import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import "./dashboard.css";
import Header from "./Header";
import List from "./List";

const Dashboard = () => {
    return (
        <Fragment>
            <Header />
            <div className="flex">
                <List />
                <Outlet />
            </div>
        </Fragment>
    );
};

export default Dashboard;
