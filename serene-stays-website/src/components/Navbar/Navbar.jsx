import * as React from "react";
import DrawerMenu from "./DrawerMenu";
import { Link } from "react-router-dom";
import Virar from "../../pages/VillaPages/Virar";
import logo from "../../assets/SSlogo_page-0001.jpg";

function Navbar() {
    return (
        <div className="flex flex-row justify-between items-center px-4 py-2 shadow-xl" style={{ backgroundColor: '#0a1a19', boxShadow: '0 0.5rem 2rem rgba(244,178,154, 0.1)' }}>
            <div className="flex flex-row items-center space-x-6 ml-6">
                <img src={logo} alt="Serene Stays Logo" className="w-12 h-12 rounded-full" />
                <h1 className="text-4xl">Serene Stays</h1>
            </div>
            
            <div className="flex flex-row items-center space-x-10 mr-6">
                <nav>
                    <ul className="flex flex-row space-x-6 text-xl font-header">
                        <li className="cursor-pointer hover:text-[rgb(244,178,154)]" ><Link to="/virar">Virar</Link></li>
                        <li className="cursor-pointer hover:text-[rgb(244,178,154)]" >Mahabaleshwar</li>
                        <li className="cursor-pointer hover:text-[rgb(244,178,154)]" ><Link to="/goa">Goa</Link></li>
                        <li className="cursor-pointer hover:text-[rgb(244,178,154)]" >Thailand</li>

                    </ul>
                </nav>
                <DrawerMenu />
            </div>
        </div>
    );
}

export default Navbar;


