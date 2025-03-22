import React, { useEffect, useState } from "react";
import FormatQuoteRoundedIcon from "@mui/icons-material/FormatQuoteRounded";
 
function WelcomeText() {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const element = document.getElementById("welcome-text-section");
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
        <div 
            id="welcome-text-section"
            className={`transition-all duration-[1500ms] ease-in-out transform ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
            <div className="flex flex-col lg:flex-row items-center justify-center gap-4 text-center lg:text-left px-4">
                <FormatQuoteRoundedIcon
                    sx={{ fontSize: "3rem" }}
                    className="transform scale-x-[-1] text-[var(--color-primary)] opacity-90"
                />
                <span
                    style={{ fontFamily: "Tangerine, cursive" }}
                    className="text-[var(--color-secondary)] text-5xl md:text-6xl lg:text-6xl leading-tight"
                >
                    Where every stay is a story, and every moment is a memory.
                </span>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-center gap-4 text-center lg:text-right mt-6 px-4">
                <span
                    style={{ fontFamily: "Tangerine, cursive" }}
                    className="text-[var(--color-secondary)] text-5xl md:text-6xl lg:text-6xl leading-tight"
                >
                    Welcome to your dream getaway at our handpicked luxury resorts!
                </span>
                <FormatQuoteRoundedIcon
                    sx={{ fontSize: "3rem" }}
                    className="text-[var(--color-primary)] opacity-90"
                />
            </div>
        </div>
    );
}

export default WelcomeText;
