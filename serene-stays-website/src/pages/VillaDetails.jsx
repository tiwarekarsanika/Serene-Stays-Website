import React from "react";
import { useLocation } from "react-router-dom";
import { ReactPhotoCollage } from "react-photo-collage";

function VillaDetails() {

    const location = useLocation();
    console.log(location);

    const { villa } = location.state || {}; // Access villa data
    console.log(villa);

    if (!villa) {
        return <div>No villa details available!</div>;
    }

    const setting = {
        width: '600px',
        height: ['250px', '170px'],
        layout: [1, 4],
        photos: [
          { source: 'url/image-1.jpg' },
          { source: 'url/image-2.jpg' },
          { source: 'url/image-3.jpg' },
          { source: 'url/image-4.jpg' },
          { source: 'url/image-5.jpg' },
          { source: 'url/image-6.jpg' },
        ],
        showNumOfRemainingPhotos: true
      };

    return (
        <div className="flex flex-col justify-between p-20">
            <div className="flex flex-row justify between gap-4">
                <img className='h-50 w-50' src={villa.image} alt="villa" />
                <div className="text-left flex flex-col gap-4">
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
            </div>
            <hr className="border-t border-[var(--color--secondary)] my-4" />
            <ReactPhotoCollage {...setting} />
        </div>
    );
}

export default VillaDetails;