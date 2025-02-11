import React from "react";
import CopyrightIcon from "@mui/icons-material/Copyright";
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from "react-router-dom";
import logo from "../assets/SSlogo_page-0001.jpg";

function Footer() {
    const [hover, setHover] = React.useState(false);

    return (
        <div className="mb-4 bg-black pt-4 pl-6 pr-6">
            <div>
                <div className="flex flex-col pl-12 gap-4">
                    <div className="flex flex-row items-center space-x-6 mt-6">
                        <img src={logo} alt="Serene Stays Logo" className="w-15 h-15 rounded-full" />
                        <h1 className="text-4xl font-bold">Serene Stays</h1>
                    </div>
                    <div className="flex flex-row justify-between items-center">
                        <div className="flex flex-row space-x-4 justify-center items-center">
                            <Link to="https://www.instagram.com/_serenestays_" target="_blank">
                                <InstagramIcon className={`text-2.5rem cursor-pointer ${hover ? "text-[var(--color-primary)]" : "text-white"}`}
                                    onMouseEnter={() => setHover(true)}
                                    onMouseLeave={() => setHover(false)}
                                    sx={{ fontSize: 40 }}
                                /></Link>
                            <span className="text-xl font-body">Lets Stay Connected !</span>
                        </div>
                        <div className="flex flex-row space-x-8 font-navigation pr-12">
                            <Link to="/about"><span className="cursor-pointer hover:text-[var(--color-primary)]" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>About</span></Link>
                            <Link to="/contact"><span className="cursor-pointer hover:text-[var(--color-primary)]" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Contact Us</span></Link>
                            <Link to="/policypage"><span className="cursor-pointer hover:text-[var(--color-primary)]" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} >FAQs & Booking Policy</span></Link>
                        </div>
                    </div>
                </div>

                {/* <div className="flex flex-row justify-around space-x-6 pr-12">
                    <div className="h-50 w-100">
                        <div className="text-2xl font-header mb-4 text-left">Find Us Here !</div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.152934861814!2d72.8260966742591!3d19.232165482004827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b13804e8c9e5%3A0x714ffd89977f7d1d!2sMaxus%20Cinemas!5e0!3m2!1sen!2sin!4v1738845535810!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div> */}
            </div>

            <hr className="border-t border-[var(--color-primary)] my-4" />
            <div className="text-center font-navigation pb-4 text-[var(--color-primary)]">
                Copyright <CopyrightIcon className="inline-block text-sm" /> 2025 Serene Stays | Made with ❤ by Sanika
            </div>
        </div>
    );
}

export default Footer;
