import React from "react";

const Header = () => {
    return (
        <div className="flex items-center justify-between py-3 px-5 fixed w-full bg-white">
            <h1 className="font-bold text-2xl">Dashboard</h1>
            <div>
                <h1 className="-mb-1 font-semibold">Jane Doe</h1>
                <p className="text-xs">janedoe22@gmail.com</p>
            </div>
        </div>
    );
};

export default Header;
