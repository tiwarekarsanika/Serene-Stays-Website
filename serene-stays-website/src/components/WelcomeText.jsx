import React, { useEffect, useState } from "react";
import FormatQuoteRoundedIcon from "@mui/icons-material/FormatQuoteRounded";

function WelcomeText() {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const element = document.getElementById("welcome-text-section");
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
        <div
            id="welcome-text-section"
            className={`transition-all duration-3000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
            <div>
                <span>
                    <FormatQuoteRoundedIcon
                        sx={{
                            fontSize: "5rem",
                            margin: "-1rem",
                        }}
                        className="transform scale-x-[-1] inline-block align-top text-[var(--color-primary)] opacity-0.9"
                    />
                </span>
                <span
                    style={{
                        fontFamily: "Tangerine, cursive"
                    }}
                    className="ml-8 text-[var(--color-secondary)] text-7xl"
                >
                    Where every stay is a story, and every moment is a memory.
                </span>
            </div>
            <div>
                <span
                    style={{
                        fontFamily: "Tangerine, cursive"
                    }}
                    className="mr-8 text-[var(--color-secondary)] text-7xl"
                >
                    Welcome to your dream getaway at our handpicked luxury resorts!
                </span>
                <span>
                    <FormatQuoteRoundedIcon
                        sx={{
                            fontSize: "5rem",
                            margin: "-1rem",
                        }}
                        className="text-4xl inline-block text-[var(--color-primary)] opacity-0.9"
                    />
                </span>
            </div>
        </div>
    );
}

export default WelcomeText;

