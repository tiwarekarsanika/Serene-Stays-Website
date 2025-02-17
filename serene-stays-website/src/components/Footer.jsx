import React from "react";
import CopyrightIcon from "@mui/icons-material/Copyright";
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from "react-router-dom";
import logo from "../assets/SSlogo_page-0001.jpg";

function Footer() {
    const [hover, setHover] = React.useState(false);

    return (
        <div className="bg-black pt-6 px-6">
            {/* Responsive Wrapper */}
            <div className="flex flex-col gap-6 px-12">
                {/* Logo & Name */}
                <div className="flex flex-col md:flex-row items-center space-x-4">
                    <img src={logo} alt="Serene Stays Logo" className="w-16 h-16 rounded-full" />
                    <h1 className="text-2xl md:text-4xl font-bold text-white mt-2 md:mt-0">Serene Stays</h1>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Instagram Link */}
                    <div className="flex flex-col md:flex-row items-center space-x-4 mb-4">
                        <Link to="https://www.instagram.com/_serenestays_" target="_blank">
                            <InstagramIcon
                                className={`text-3xl cursor-pointer ${hover ? "text-[var(--color-primary)]" : "text-white"}`}
                                onMouseEnter={() => setHover(true)}
                                onMouseLeave={() => setHover(false)}
                            />
                        </Link>
                        <span className="text-lg md:text-xl text-white font-body">Let's Stay Connected!</span>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8 font-navigation text-white mb-2">
                        <Link to="/about" className="cursor-pointer hover:text-[var(--color-primary)]" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>About</Link>
                        <Link to="/contact" className="cursor-pointer hover:text-[var(--color-primary)]" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Contact Us</Link>
                        <Link to="/policypage" className="cursor-pointer hover:text-[var(--color-primary)]" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>FAQs & Booking Policy</Link>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <hr className="border-t border-[var(--color-primary)] my-4" />

            {/* Copyrights */}
            <div className="text-center font-navigation text-[var(--color-primary)] text-[10px] md:text-sm lg:text-base pb-4">
                <span> Copyright <CopyrightIcon className="inline-block" style={{fontSize: "1rem"}} /> 2025 Serene Stays |</span> 
                <span> Made with ❤ by Sanika</span>
            </div>
        </div>
    );
}

export default Footer;

