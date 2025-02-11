import * as React from "react";
import DrawerMenu from "./DrawerMenu";
import { Link } from "react-router-dom";
import logo from "../../assets/SSlogo_page-0001.jpg";

function Navbar() {
    return (
        <div className="flex flex-row justify-between items-center px-4 py-2 shadow-xl w-full"
            style={{ backgroundColor: '#0a1a19', boxShadow: '0 0.5rem 2rem rgba(244,178,154, 0.1)' }}>
            
            {/* Logo & Title */}
            <div className="flex flex-row items-center space-x-4 md:space-x-6 ml-2 md:ml-6">
                <img src={logo} alt="Serene Stays Logo" className="w-10 h-10 md:w-12 md:h-12 rounded-full" />
                <h1 className="text-2xl md:text-4xl cursor-pointer text-white">
                    <Link to="/">Serene Stays</Link>
                </h1>
            </div>

            {/* Navigation for larger screens */}
            <div className="hidden md:flex flex-row items-center space-x-4 lg:space-x-10 mr-2 md:mr-6">
                <nav>
                    <ul className="flex flex-row space-x-4 md:space-x-6 text-base md:text-xl font-header text-white">
                        <li className="cursor-pointer hover:text-[rgb(244,178,154)]">
                            <Link to="/virar">Virar</Link>
                        </li>
                        <li className="cursor-pointer hover:text-[rgb(244,178,154)]">
                            <Link to="/mahabaleshwar">Mahabaleshwar</Link>
                        </li>
                        <li className="cursor-pointer hover:text-[rgb(244,178,154)]">
                            <Link to="/goa">Goa</Link>
                        </li>
                    </ul>
                </nav>
                <DrawerMenu />
            </div>

            {/* Mobile Drawer */}
            <div className="md:hidden">
                <DrawerMenu />
            </div>
        </div>
    );
}

export default Navbar;
