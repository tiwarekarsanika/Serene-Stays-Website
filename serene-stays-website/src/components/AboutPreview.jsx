import React, { useEffect, useState } from "react";
import img2 from '../assets/CasaDeFlores/CasaDeFlores-WebP/IMG_0002.webp';
import { Link } from 'react-router-dom';

function AboutPreview() {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const element = document.getElementById("about-preview-section");
        if (!element) return;

        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight * 0.75) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="px-4 md:px-10 lg:px-20">
            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-center mt-12 md:mt-20 mb-10 font-header">
                About Us
            </h1>

            {/* Content Section */}
            <div 
                id="about-preview-section"
                className="flex flex-col md:flex-row items-center justify-center space-y-10 md:space-y-0 md:space-x-6"
            >
                {/* Image Section */}
                <div 
                    className={`w-full md:w-1/2 transition-all duration-1000 ease-in-out ${
                        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                    }`}
                >
                    <img 
                        src={img2} 
                        alt="About Us" 
                        className="w-full h-auto object-contain rounded-lg shadow-lg"
                    />
                </div>

                {/* Text Content Section */}
                <div 
                    className={`w-full md:w-1/2 flex flex-col space-y-6 transition-all duration-1000 ease-in-out ${
                        isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                    }`}
                >
                    <p className="text-lg md:text-xl text-justify font-body leading-relaxed">
                        At Serene Stays by Prasad Hospitality, we redefine luxury and comfort with our exclusive collection of villas and resort rooms across Virar, Karjat, Goa, Mahabaleshwar, and Thailand.
                        With over 20 years of experience in the hospitality industry, we have mastered the art of creating unforgettable stays tailored to your needs.
                        Whether you are looking for a peaceful retreat, a family vacation, or a grand celebration, our properties offer the perfect setting.
                        Each villa is thoughtfully designed with private pools, lush green lawns, and spacious interiors, ensuring a blend of opulence and relaxation.
                        Our resort rooms provide a cozy yet elegant ambiance.
                    </p>

                    {/* Button */}
                    <div className="flex justify-center md:justify-end">
                        <Link to="/about">
                            <button 
                                className="custom-button"
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            >
                                Read More
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutPreview;

