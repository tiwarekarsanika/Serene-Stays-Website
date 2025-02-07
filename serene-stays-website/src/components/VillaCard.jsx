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
        .resize(fill().width(800).height(600))
        .quality("auto:best")

    return (
        <div className="flex flex-col justify-between border-1 border-[var(--color-primary)] rounded-xl p-8 text-left m-10 transition-all duration-300 hover:shadow-[0_0_16px_#fed6be] hover:scale-105 hover:z-10">
            <div className="flex flex-col gap-4 mb-6">
                <AdvancedImage
                    cldImg={headerImage}
                    className="w-full h-full object-cover"
                />
                <div>
                    <h1 className="font-header text-3xl inline-block">{villa.name}</h1>
                </div>
                <div className="text-left font-body text-xl">
                    {villa.numVillas ? (
                        <>
                            <span>{villa.numVillas} {villa.numVillas > 1 ? "villas" : "villa"} | </span>
                            <span>{villa.space} {villa.numVillas > 1 ? "each" : ""}</span>
                        </>
                    ) : (
                        <span>{villa.numRooms} Rooms</span>
                    )}
                </div>
                <div className="flex flex-wrap gap-1.5 space-y-1">
                    {villa.amenities.map((item, index) => (
                        <span key={index} className="text-sm bg-transparent w-fit border-1 text-[var(--color-secondary)] font-navigation border-[var(--color-primary)] rounded-xl py-1 px-2">
                            {item}
                        </span>
                    ))}
                </div>
            </div>
            <Link to={`/${villa.location.toLowerCase()}/villa-details`} state={{ villa }}>
                <div onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="flex-end cursor-pointer hover:text-[var(--color-primary)]" >Image Gallery & More Details <KeyboardDoubleArrowRightIcon /> </div>
            </Link>
        </div>
    );
}

export default VillaCard;