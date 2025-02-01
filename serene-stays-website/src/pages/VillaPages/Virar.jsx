import React from "react";
import VillaCard from "../../components/VillaCard";
import img1 from "../../assets/WilderNest/Wildernest-WebP/IMG_0001.webp"

function Virar() {

  const items = [
    {
      name: "WilderNest Villa",
      location: "Virar",
      numVillas: 1,
      space: "4 bhk",
      image: img1,
      amenities: ["Wifi", "Air Conditioner", "Parking", "Swimming Pool", "Lawn", "Balcony", "Generator Backup", "Veg Nonveg"],
    },
    {
      name: "Casa De Flores Villa",
      location: "Virar",
      numVillas: 4,
      space: "4 bhk",
      image: img1,
      amenities: ["Wifi", "Air Conditioner", "Parking", "Swimming Pool", "Lift Facility", "Generator Backup", "Veg Nonveg", "Barbecue", "Inhouse Speaker System"],
      occasions: ["Engagement", "Birthday Party", "Anniversary", "Sangeets", "Bachelorette"],
      specialEvents: ["Ghazal Night", "Karaoke Night"],
    },
  ];


  return (
    <div className="m-20">
      <h1 className="text-[var(--font-header)] text-5xl text-left">Select Your Ideal Stay</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((item, index) => (
          <VillaCard key={index} villa={item} />
        ))}
      </div>
    </div>
  );
}

export default Virar;