import React from "react";
import VillaCard from "../../components/VillaCard";
import propertiesData from "../../data/properties.json";

function Virar() {

  const virarProperties = propertiesData.Virar.properties;

  return (
    <div className="m-20">
      <h1 className="text-[var(--font-header)] text-5xl text-left">Select Your Ideal Stay</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {virarProperties.map((villa, index) => (
          <VillaCard key={index} villa={villa} />
        ))}
      </div>
    </div>
  );
}

export default Virar;
