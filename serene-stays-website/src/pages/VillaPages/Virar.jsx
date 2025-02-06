// import React from "react";
// import VillaCard from "../../components/VillaCard";
// import img1 from "../../assets/CasaDeFlores/CasaDeFlores-WebP/IMG_0001.webp"
// import {Cloudinary} from "@cloudinary/url-gen";
// import {AdvancedImage} from '@cloudinary/react';
// import {fill} from "@cloudinary/url-gen/actions/resize";

// function Virar() {

//   const cld = new Cloudinary({
//     cloud: {
//       cloudName: 'demo'
//     }
//   });

//   const myImage = cld.image('samples/people/jazz'); 

//   myImage.resize(fill().width(250).height(250));

//   const items = [
//     {
//       name: "WilderNest Villa",
//       location: "Virar",
//       numVillas: 1,
//       space: "4 bhk",
//       image: img1,
//       amenities: ["Wifi", "Air Conditioner", "Parking", "Swimming Pool", "Lawn", "Balcony", "Generator Backup", "Veg Nonveg"],
//     },
//     {
//       name: "Casa De Flores Villa",
//       location: "Virar",
//       numVillas: 4,
//       space: "4 bhk",
//       image: img1,
//       amenities: ["Wifi", "Air Conditioner", "Parking", "Swimming Pool", "Lift Facility", "Generator Backup", "Veg Nonveg", "Barbecue", "Inhouse Speaker System"],
//       occasions: ["Engagement", "Birthday Party", "Anniversary", "Sangeets", "Bachelorette"],
//       specialEvents: ["Ghazal Night", "Karaoke Night"],
//     },
//   ];


//   return (
//     <div className="m-20">
//       <AdvancedImage cldImg={myImage} />
//       <h1 className="text-[var(--font-header)] text-5xl text-left">Select Your Ideal Stay</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         {items.map((item, index) => (
//           <VillaCard key={index} villa={item} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Virar;

import * as React from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from '@cloudinary/react';
import { fill } from "@cloudinary/url-gen/actions/resize";
import { useEffect } from "react";
import { useState } from "react";


function Virar() {
  // const cld = new Cloudinary({
  //   cloud: {
  //     cloudName: 'sanikaDemo'
  //   }
  // });

  // const myImage = cld.image('IMG_0008_qvtn6f'); 

  // myImage.resize(fill().width(250).height(250));

  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    const cloudName = "sanikaDemo";
    const folderName = "CasaDeFlores-WebP";

    // fetch(
    //   `https://res.cloudinary.com/${cloudName}/image/list/${folderName}.json`
    // )
    //   .then((res) => res.json())
    //   .then((data) =>
    //     setImageUrls(data.resources.map((img) => img.secure_url))
    //   )
    //   .catch((err) => console.error("Error fetching images:", err));

    fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/resources/search?expression=folder:${folderName}`,
      {
        headers: {
          Authorization: `Basic ${btoa("528565665629117:PObQur9faq2PScVtlHXvk0GPpE4")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => console.log("Images:", data.resources))
      .catch((err) => console.error("Error fetching images:", err));
  }, []);


  return (
    // <div className="m-20">
    //   <AdvancedImage cldImg={myImage} />
    // </div>
    <div className="grid grid-cols-3 gap-4 p-10">
      {imageUrls.map((url, index) => (
        <img key={index} src={url} alt={`CasaDeFlores ${index}`} className="w-64 h-64 object-cover" />
      ))}
    </div>
  );
}

export default Virar;