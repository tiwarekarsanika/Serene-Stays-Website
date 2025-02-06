import React, { useEffect, useState } from "react";
import img2 from '../assets/CasaDeFlores/CasaDeFlores-WebP/IMG_0002.webp';
import { Link } from 'react-router-dom';

function AboutPreview() {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const element = document.getElementById("about-preview-section");
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight * 0.75) {
            setIsVisible(true);
        }
        else {
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
        <div>
            <h1 className="text-6xl text-center mt-20 mb-20 font-header">About Us</h1>
            <div id="about-preview-section" className="flex flex-row items-center justify-center mx-20 space-x-6">
                <div
                    className={`w-1/2 h-full transition-all duration-3000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
                        }`}
                >
                    <img
                        src={img2}
                        alt="About Us"
                        className="w-full h-full object-contain"
                    />
                </div>
                <div
                    className={`w-1/2 flex flex-col justify-between transition-all duration-3000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
                        }`}
                >
                    <p className="text-left text-xl font-body">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mauris
                        arcu, finibus quis pellentesque sit amet, vestibulum sit amet ante.
                        Praesent eu commodo metus. Integer ac magna vitae odio dignissim
                        facilisis eu nec metus. Pellentesque ultricies ante tristique malesuada
                        congue. Fusce feugiat urna enim, eget hendrerit justo ornare eu.
                        Vestibulum eu dolor ligula. Quisque in aliquam nulla. Praesent urna
                        ligula, pulvinar in eros non, ullamcorper bibendum nulla. Donec
                        ultricies feugiat nibh vel fringilla. Maecenas in ligula tempor,
                        maximus diam eget, eleifend ipsum. Proin porta elit elit, nec venenatis
                        quam venenatis sed.
                    </p>
                    <div className="flex justify-end">
                        <Link to="/about"><button className="custom-button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                            Read More
                        </button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutPreview;


