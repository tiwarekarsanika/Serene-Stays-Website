import React from "react";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import VillaDetails from "../pages/VillaDetails";
import { Link } from "react-router-dom";

function VillaCard({ villa }) {
    return (
        <div className="flex flex-col justify-between border-1 border-[var(--color--secondary)] rounded-xl p-8 text-left m-10 transition-all duration-300 hover:shadow-[0_0_16px_#fed6be] hover:scale-105 hover:z-10">
            <div className="flex flex-col gap-4 mb-6">
                <img src={villa.image} alt="villa" />
                <div>
                    <h1 className="text-[var(--font-header)] text-3xl inline-block">{villa.name}, </h1>
                    <p className="text-2xl inline-block" style={{
                        fontFamily: 'var(--font-body)'
                    }}>{villa.location}</p>
                </div>
                <div className="text-left text-[var(--font-body)]">
                    <span>{villa.numVillas} {villa.numVillas > 1 ? "villas" : "villa"} | </span>
                    <span>{villa.space} {villa.numVillas > 1 ? "each" : ""}</span>
                </div>
                <div className="flex flex-wrap gap-1.5 space-y-1">
                    {villa.amenities.map((item, index) => (
                        <span className="bg-transparent w-fit border-1 text-[var(--color--primary)] font-[var(--font-navigation)] border-[var(--color--secondary)] rounded-xl py-1 px-2">
                            {item}
                        </span>
                    ))}
                </div>
            </div>
            <Link to={`/${villa.location.toLowerCase()}/villa-details`} state={{ villa }}>
                <div onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="flex-end cursor-pointer hover:text-[var(--color--secondary)]" >Image Gallery & More Details <KeyboardDoubleArrowRightIcon /> </div>
            </Link>
        </div>
    );
}

export default VillaCard;