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
            className={`transition-all duration-2000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
            <div>
                <span>
                    <FormatQuoteRoundedIcon
                        sx={{
                            fontSize: "5rem",
                            color: "var(--color--secondary)",
                            margin: "-1rem",
                            opacity: 0.9,
                        }}
                        className="transform scale-x-[-1] inline-block align-top"
                    />
                </span>
                <span
                    style={{
                        fontFamily: "Tangerine, cursive",
                        fontSize: "4rem",
                        color: "var(--color--primary)",
                    }}
                    className="ml-8"
                >
                    Where every stay is a story, and every moment is a memory.
                </span>
            </div>
            <div>
                <span
                    style={{
                        fontFamily: "Tangerine, cursive",
                        fontSize: "4rem",
                        color: "var(--color--primary)",
                    }}
                    className="mr-8"
                >
                    Welcome to your dream getaway at our handpicked luxury resorts!
                </span>
                <span>
                    <FormatQuoteRoundedIcon
                        sx={{
                            fontSize: "5rem",
                            color: "var(--color--secondary)",
                            margin: "-1rem",
                            opacity: 0.9,
                        }}
                        className="text-4xl inline-block"
                    />
                </span>
            </div>
        </div>
    );
}

export default WelcomeText;

