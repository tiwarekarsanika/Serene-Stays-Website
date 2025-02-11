// import React from "react";
// import CopyrightIcon from "@mui/icons-material/Copyright";
// import InstagramIcon from '@mui/icons-material/Instagram';
// import { Link } from "react-router-dom";
// import logo from "../assets/SSlogo_page-0001.jpg";

// function Footer() {
//     const [hover, setHover] = React.useState(false);

//     return (
//         <div className="mb-4 bg-black pt-4 pl-6 pr-6">
//             <div>
//                 <div className="flex flex-col pl-12 gap-4">
//                     <div className="flex flex-row items-center space-x-6 mt-6">
//                         <img src={logo} alt="Serene Stays Logo" className="w-15 h-15 rounded-full" />
//                         <h1 className="text-4xl font-bold">Serene Stays</h1>
//                     </div>
//                     <div className="flex flex-row justify-between items-center">
//                         <div className="flex flex-row space-x-4 justify-center items-center">
//                             <Link to="https://www.instagram.com/_serenestays_" target="_blank">
//                                 <InstagramIcon className={`text-2.5rem cursor-pointer ${hover ? "text-[var(--color-primary)]" : "text-white"}`}
//                                     onMouseEnter={() => setHover(true)}
//                                     onMouseLeave={() => setHover(false)}
//                                     sx={{ fontSize: 40 }}
//                                 /></Link>
//                             <span className="text-xl font-body">Lets Stay Connected !</span>
//                         </div>
//                         <div className="flex flex-row space-x-8 font-navigation pr-12">
//                             <Link to="/about"><span className="cursor-pointer hover:text-[var(--color-primary)]" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>About</span></Link>
//                             <Link to="/contact"><span className="cursor-pointer hover:text-[var(--color-primary)]" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Contact Us</span></Link>
//                             <Link to="/policypage"><span className="cursor-pointer hover:text-[var(--color-primary)]" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} >FAQs & Booking Policy</span></Link>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <hr className="border-t border-[var(--color-primary)] my-4" />
//             <div className="text-center font-navigation pb-4 text-[var(--color-primary)]">
//                 Copyright <CopyrightIcon className="inline-block text-sm" /> 2025 Serene Stays | Made with ❤ by Sanika
//             </div>
//         </div>
//     );
// }

// export default Footer;

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
            <div className="flex flex-col md:flex-row md:items-center md:justify-between md:px-12 gap-6">
                {/* Logo & Name */}
                <div className="flex flex-col md:flex-row items-center space-x-4">
                    <img src={logo} alt="Serene Stays Logo" className="w-16 h-16 rounded-full" />
                    <h1 className="text-2xl md:text-4xl font-bold text-white mt-2 md:mt-0">Serene Stays</h1>
                </div>

                {/* Instagram Link */}
                <div className="flex flex-col md:flex-row items-center space-x-4">
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
                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8 font-navigation text-white">
                    <Link to="/about" className="cursor-pointer hover:text-[var(--color-primary)]" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>About</Link>
                    <Link to="/contact" className="cursor-pointer hover:text-[var(--color-primary)]" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Contact Us</Link>
                    <Link to="/policypage" className="cursor-pointer hover:text-[var(--color-primary)]" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>FAQs & Booking Policy</Link>
                </div>
            </div>

            {/* Divider */}
            <hr className="border-t border-[var(--color-primary)] my-4" />

            {/* Copyrights */}
            <div className="text-center font-navigation text-[var(--color-primary)] text-xs md:text-sm lg:text-base pb-4">
                Copyright <CopyrightIcon className="inline-block text-xs md:text-sm" /> 2025 Serene Stays | 
                <span className="text-xs md:text-sm"> Made with ❤ by Sanika</span>
            </div>
        </div>
    );
}

export default Footer;

