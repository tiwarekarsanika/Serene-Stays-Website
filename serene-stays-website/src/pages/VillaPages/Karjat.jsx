import React from "react";
import VillaCard from "../../components/VillaCard";
import propertiesData from "../../data/properties.json";

function Karjat() {
    const karjatProperties = propertiesData.Karjat.properties;

    return (
        <div className="m-10 lg:m-20">
            <h1 className="text-[var(--font-header)] text-5xl text-left mb-4">Select Your Ideal Stay</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {karjatProperties.map((villa, index) => (
                    <VillaCard key={index} villa={villa} />
                ))}
            </div>
        </div>
    );
}

export default Karjat;