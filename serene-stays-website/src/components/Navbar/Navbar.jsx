import React from "react";
import DrawerMenu from "./DrawerMenu";

function Navbar() {
    return (
        <div className="flex flex-row justify-between items-center px-4 py-2 shadow-xl" style={{ backgroundColor: 'var(--color--background)', boxShadow: '0 0.5rem 2rem rgba(244,178,154, 0.2)' }}>
            {/* Left section */}
            <div className="flex flex-row items-center space-x-6 ml-6">
                {/* <img src="/path-to-logo.png" alt="Logo" className="h-8 w-8" /> */}
                <h4 className="font-bold text-xl">Logo</h4>
                <h1 className="text-4xl">Serene Stays</h1>
            </div>

            {/* Right section */}
            <div className="flex flex-row items-center space-x-10 mr-6">
                <nav>
                    <ul className="flex flex-row space-x-6 text-xl" style={{ fontFamily: 'var(--font-header)' }}>
                        <li className="cursor-pointer hover:text-[rgb(244,178,154)]" >Virar</li>
                        <li className="cursor-pointer hover:text-[rgb(244,178,154)]" >Mahabaleshwar</li>
                        <li className="cursor-pointer hover:text-[rgb(244,178,154)]" >Goa</li>
                        <li className="cursor-pointer hover:text-[rgb(244,178,154)]" >Thailand</li>

                    </ul>
                </nav>
                <DrawerMenu />
            </div>
        </div>
    );
}

export default Navbar;


