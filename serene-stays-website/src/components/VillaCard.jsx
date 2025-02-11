import React from "react";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from '@cloudinary/react';
import { fill } from "@cloudinary/url-gen/actions/resize";
import { Link } from "react-router-dom";

function VillaCard({ villa }) {
    const cld = new Cloudinary({
        cloud: {
            cloudName: "sanikaDemo",
        },
    });

    const headerImage = cld.image(villa.headerImg)
        .resize(fill().width(900).height(700))
        .quality("auto:best");

    return (
        <div className="w-full border border-[var(--color-primary)] rounded-xl p-4 md:p-5 text-left mt-2 md:mt-4 transition-all duration-300 hover:shadow-[0_0_16px_#fed6be] hover:scale-105 hover:z-5">
            <div className="flex flex-col gap-2 md:gap-3 mb-3 md:mb-5">
                <AdvancedImage
                    cldImg={headerImage}
                    className="w-full h-[250px] md:h-[350px] lg:h-[450px] object-cover rounded-lg"
                />
                <div>
                    <h1 className="font-header text-2xl md:text-3xl">{villa.name}</h1>
                </div>
                <div className="text-left font-body text-sm md:text-lg">
                    {villa.numVillas ? (
                        <>
                            <span>{villa.numVillas} {villa.numVillas > 1 ? "villas" : "villa"} | </span>
                            <span>{villa.space} {villa.numVillas > 1 ? "each" : ""}</span>
                        </>
                    ) : (
                        <span>{villa.numRooms} Rooms</span>
                    )}
                </div>
                <div className="flex flex-wrap gap-2">
                    {villa.amenities.map((item, index) => (
                        <span key={index} className="text-xs md:text-sm bg-transparent border border-[var(--color-primary)] text-[var(--color-secondary)] font-navigation rounded-xl py-1 px-3">
                            {item}
                        </span>
                    ))}
                </div>
            </div>
            <Link to={`/${villa.location.toLowerCase()}/villa-details`} state={{ villa }}>
                <div onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="flex items-center gap-2 cursor-pointer text-sm md:text-base hover:text-[var(--color-primary)]">
                    Image Gallery & More Details <KeyboardDoubleArrowRightIcon fontSize="small" />
                </div>
            </Link>
        </div>
    );
}

export default VillaCard;


