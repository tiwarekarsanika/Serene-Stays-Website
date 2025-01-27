import React from "react";
import DrawerMenu from "./DrawerMenu";

function Navbar() {
    return (
        <div className="flex flex-row justify-between items-center px-4 py-2 bg-primary">
            {/* Left section */}
            <div className="flex flex-row items-center space-x-6 ml-6">
                {/* <img src="/path-to-logo.png" alt="Logo" className="h-8 w-8" /> */}
                <h4 className="font-bold text-xl">Logo</h4>
                <h1 className="text-4xl font-family: var(--font-header)">Serene Stays</h1>
            </div>

            {/* Right section */}
            <div className="flex flex-row items-center space-x-10 mr-6">
                <nav>
                    <ul className="flex flex-row space-x-6 text-lg font-medium">
                        <li className="hover:text-blue-500 cursor-pointer">Virar</li>
                        <li className="hover:text-blue-500 cursor-pointer">Mahabaleshwar</li>
                        <li className="hover:text-blue-500 cursor-pointer">Goa</li>
                        <li className="hover:text-blue-500 cursor-pointer">Thailand</li>
                    </ul>
                </nav>
                <DrawerMenu />
            </div>
        </div>
    );
}

export default Navbar;


