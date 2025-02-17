import * as React from "react";
import { useLocation } from "react-router-dom";
import Lightbox from "yet-another-react-lightbox";
import { MasonryPhotoAlbum } from "react-photo-album";
import "react-photo-album/masonry.css";
import "yet-another-react-lightbox/styles.css"
import "react-lazy-load-image-component/src/effects/blur.css";
import { Zoom, Thumbnails, Fullscreen } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/plugins/thumbnails.css"
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from '@cloudinary/react';
import { fill } from "@cloudinary/url-gen/actions/resize";

function VillaDetails() {
    const [index, setIndex] = React.useState(-1);
    const location = useLocation();
    const [displayedImages, setDisplayedImages] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const initialLoadCount = 8;
    const { villa } = location.state || {};
    const [currentSlides, setCurrentSlides] = React.useState([]);

    if (!villa) {
        return <div>No villa details available!</div>;
    }

    const [processedImages, setProcessedImages] = React.useState([]);

    const cld = new Cloudinary({
        cloud: {
            cloudName: "sanikaDemo",
        },
    });

    const headerImage = cld.image(villa.headerImg)
        .resize(fill().width(800).height(600))
        .quality("auto:best")

    const getCloudinaryUrl = (publicId) => {
        try {
            const img = cld.image(publicId).quality("auto:best");
            const url = img.toURL();
            console.log("Generated Cloudinary URL:", url);
            return url;
        } catch (error) {
            console.error("Error generating Cloudinary URL for", publicId, error);
            return "";
        }
    };

    // Need Image Dimensions for the Photo Album component
    const getImageDimensions = (publicId) => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            const url = getCloudinaryUrl(publicId);

            img.onload = () => {
                // console.log("Loaded image:", url);
                resolve({
                    src: url,
                    width: img.width,
                    height: img.height,
                    publicId: publicId
                });
            };

            img.onerror = (error) => {
                console.error("Error loading image:", publicId, error);
                reject(error);
            };

            img.src = url;
        });
    };

    //Loading the gallery images
    React.useEffect(() => {
        const loadImages = async () => {
            setLoading(true);
            let allProcessedImages = {};

            for (let singleVilla of villa.villas) {
                const safeImages = singleVilla.images || [];
                console.log(`Total images for Villa ${singleVilla.villaNumber}:`, safeImages.length);

                const imagesWithDimensions = await Promise.all(
                    safeImages.map(publicId => getImageDimensions(publicId))
                );

                allProcessedImages[singleVilla.villaNumber] = imagesWithDimensions;
            }

            setProcessedImages(allProcessedImages);

            // Initial display logic
            const initialDisplay = {};
            Object.keys(allProcessedImages).forEach(villaNumber => {
                initialDisplay[villaNumber] = allProcessedImages[villaNumber].slice(0, initialLoadCount);
            });

            setDisplayedImages(initialDisplay);
            setLoading(false);
        };

        loadImages();
    }, [villa.villas, location.state]);

    const loadMore = (villaNumber) => {
        setDisplayedImages(prev => ({
            ...prev,
            [villaNumber]: processedImages[villaNumber],
        }));
    };

    const loadLess = (villaNumber) => {
        setDisplayedImages(prev => ({
            ...prev,
            [villaNumber]: prev[villaNumber].slice(0, initialLoadCount),
        }));
    };

    const hasMore = (villaNumber) =>
        displayedImages[villaNumber]?.length < processedImages[villaNumber]?.length;

    const canLoadLess = (villaNumber) =>
        displayedImages[villaNumber]?.length > initialLoadCount;

    return (
        <div className="p-4 md:p-8 lg:p-20">
            <div className="flex flex-col justify-between">
                <div className="flex flex-col md:flex-row justify-start gap-10">
                    {/* Header image - responsive width */}
                    <AdvancedImage
                        cldImg={headerImage}
                        className="w-full md:w-80 h-48 md:h-60 object-cover rounded-lg"
                    />

                    {/* Villa details section */}
                    <div className="text-left flex flex-col gap-2 mt-4 md:mt-0">
                        <div>
                            <h1 className="text-[var(--font-header)] text-2xl md:text-3xl inline-block">{villa.name}</h1>
                        </div>
                        <div className="text-left font-body text-lg md:text-xl">
                            {villa.numVillas ? (
                                <>
                                    <span>{villa.numVillas} {villa.numVillas > 1 ? "villas" : "villa"} | </span>
                                    <span>{villa.space} {villa.numVillas > 1 ? "each" : ""}</span>
                                </>
                            ) : (
                                <span>{villa.numRooms} Rooms</span>
                            )}
                        </div>

                        {/* Responsive text for additional info */}
                        {villa.hotspots?.length > 0 && (
                            <span className="text-[var(--color-text)] text-sm md:text-base text-[var(--font-navigation)] italic">
                                Property is located {villa.hotspots.join(", ")}
                            </span>
                        )}
                        {villa.occasions?.length > 0 && (
                            <span className="text-[var(--color-text)] text-sm md:text-base text-[var(--font-navigation)] italic">
                                Perfect for all occasions like {villa.occasions.join(", ")}
                            </span>
                        )}
                        {villa.specialEvents?.length > 0 && (
                            <span className="text-[var(--color-text)] text-sm md:text-base font-[var(--font-navigation)] italic">
                                Special events include: {villa.specialEvents.join(", ")}
                            </span>
                        )}

                        {/* Responsive amenities grid */}
                        <div className="flex flex-wrap gap-1.5 space-y-1 mt-4">
                            {villa.amenities.map((item, index) => (
                                <span
                                    key={index}
                                    className="bg-transparent w-fit border-1 text-xs md:text-sm text-[var(--color-secondary)] font-navigation border-[var(--color-primary)] rounded-xl py-1 px-2"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
                <hr className="border-t border-[var(--color-primary)] my-4" />
            </div>

            {/* Gallery section */}
            <div className="mt-6 lg:mt-10 space-y-4 md:space-y-6">
                {loading ? (
                    <div className="text-center">Loading images...</div>
                ) : (
                    villa.villas.map((singleVilla, idx) => (
                        <div key={idx}>
                            {villa.numVillas > 1 && (
                                <h2 className="text-left font-header text-xl md:text-2xl mb-3 md:mb-4">
                                    Villa No. {singleVilla.villaNumber}
                                </h2>
                            )}
                            {/* Responsive photo album */}
                            <MasonryPhotoAlbum
                                photos={displayedImages[singleVilla.villaNumber] || []}
                                targetRowHeight={100}
                                spacing={4}
                                onClick={({ index: current }) => {
                                    const allVillaImages = villa.villas.flatMap(v =>
                                        displayedImages[v.villaNumber] || []
                                    );
                                    setCurrentSlides(allVillaImages);
                                    const globalIndex = allVillaImages.findIndex(
                                        img => img.publicId === displayedImages[singleVilla.villaNumber][current].publicId
                                    );
                                    setIndex(globalIndex);
                                }}
                            />

                            {/* Show more/less buttons */}
                            <div className="flex justify-center gap-4 mt-4">
                                {!canLoadLess(singleVilla.villaNumber) && hasMore(singleVilla.villaNumber) && (
                                    <span
                                        onClick={() => loadMore(singleVilla.villaNumber)}
                                        className="font-bold text-sm md:text-base text-[var(--color-secondary)] font-[var(--font-navigation)] cursor-pointer"
                                    >
                                        Show More
                                    </span>
                                )}
                                {canLoadLess(singleVilla.villaNumber) && (
                                    <button
                                        onClick={() => loadLess(singleVilla.villaNumber)}
                                        className="font-bold text-sm md:text-base text-[var(--color-secondary)] font-[var(--font-navigation)] cursor-pointer"
                                    >
                                        Show Less
                                    </button>
                                )}
                            </div>
                        </div>
                    ))
                )}

                {/* Lightbox remains unchanged as it's already responsive */}
                <Lightbox
                    plugins={[Zoom, Thumbnails, Fullscreen]}
                    index={index}
                    slides={currentSlides}
                    open={index >= 0}
                    close={() => setIndex(-1)}
                />
            </div>

            {/* Map section */}
            <hr className="border-t border-[var(--color-primary)] my-4" />
            <div>
                <h2 className="text-2xl text-left mb-4">Spot the Location on Map</h2>
                <div className="flex flex-col md:flex-row gap-6 lg:gap-10">
                    <iframe
                        src={villa.gmaps}
                        width="w-2/3"
                        height="300"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>
        </div>
    );
}

export default VillaDetails;
