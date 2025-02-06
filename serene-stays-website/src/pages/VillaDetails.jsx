import * as React from "react";
import { useLocation } from "react-router-dom";
import Lightbox from "yet-another-react-lightbox";
import { MasonryPhotoAlbum } from "react-photo-album";
import "react-photo-album/masonry.css";
import "yet-another-react-lightbox/styles.css"
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import {Zoom, Thumbnails, Fullscreen} from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/plugins/thumbnails.css"


function VillaDetails() {
    const [index, setIndex] = React.useState(-1);
    const location = useLocation();
    const [displayedImages, setDisplayedImages] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const initialLoadCount = 8;
    const { villa } = location.state || {}; 
    // console.log(villa);

    if (!villa) {
        return <div>No villa details available!</div>;
    }

    const [processedImages, setProcessedImages] = React.useState([]);

    const getImageDimensions = (src) => {
        return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => {
                resolve({
                    src,
                    width: img.width,
                    height: img.height
                });
            };
            img.src = src;
        });
    };

    React.useEffect(() => {
        const rawImages = [
            '/images/CasaDeFlores-WebP/IMG_0001.webp',
            '/images/CasaDeFlores-WebP/IMG_0002.webp',
            '/images/CasaDeFlores-WebP/IMG_0003.webp',
            '/images/CasaDeFlores-WebP/IMG_0004.webp',
            '/images/CasaDeFlores-WebP/IMG_0005.webp',
            '/images/CasaDeFlores-WebP/IMG_0006.webp',
            '/images/CasaDeFlores-WebP/IMG_0007.webp',
            '/images/CasaDeFlores-WebP/IMG_0008.webp',
            '/images/CasaDeFlores-WebP/IMG_0009.webp',
            '/images/CasaDeFlores-WebP/IMG_0010.webp',
            '/images/CasaDeFlores-WebP/IMG_0011.webp',
            '/images/CasaDeFlores-WebP/IMG_0012.webp',
            '/images/CasaDeFlores-WebP/IMG_0013.webp'
        ];
        const loadImages = async () => {
            setLoading(true);
            const imagesWithDimensions = await Promise.all(
                rawImages.map(src => getImageDimensions(src))
            );
            setProcessedImages(imagesWithDimensions);
            setDisplayedImages(imagesWithDimensions.slice(0, initialLoadCount));
            setLoading(false);
        };

        loadImages();
    }, []);

    const loadMore = () => {
        const currentLength = displayedImages.length;
        const nextBatch = processedImages.slice(
            currentLength,
            currentLength + initialLoadCount
        );
        setDisplayedImages(prev => [...prev, ...nextBatch]);
    };

    const loadLess = () => {
        const newLength = Math.max(
            initialLoadCount,
            displayedImages.length - initialLoadCount
        );
        setDisplayedImages(prev => prev.slice(0, newLength));
    };

    const hasMore = displayedImages.length < processedImages.length;
    const canLoadLess = displayedImages.length > initialLoadCount;

    return (
        <div className="p-20">
            <div className="flex flex-col justify-between">
                <div className="flex flex-row justify between gap-4">
                    <img className='h-80 w-80' src={villa.image} alt="villa" />
                    <div className="text-left flex flex-col gap-4">
                        <div>
                            <h1 className="text-[var(--font-header)] text-3xl inline-block">{villa.name}</h1>
                        </div>
                        <div className="text-left text-[var(--font-body)]">
                            <span>{villa.numVillas} {villa.numVillas > 1 ? "villas" : "villa"} | </span>
                            <span>{villa.space} {villa.numVillas > 1 ? "each" : ""}</span>
                        </div>
                        {villa.occasions && (
                            <div className="flex flex-wrap gap-1.5 space-y-1">
                                <span className="text-[var(--color-text)] text-[var(--font-navigation)] italic">
                                    Perfect for all occasions like {villa.occasions.join(", ")}
                                </span>
                            </div>
                        )}
                        {villa.specialEvents && (
                            <div className="flex flex-wrap gap-1.5 space-y-1">
                                <span className="text-[var(--color-text)] font-[var(--font-navigation)] italic">
                                    Special events include: {villa.specialEvents.join(", ")}
                                </span>
                            </div>
                        )}
                        <div className="flex flex-wrap gap-1.5 space-y-1">
                            {villa.amenities.map((item, index) => (
                                <span className="bg-transparent w-fit border-1 text-sm text-[var(--color-secondary)] font-[var(--font-navigation)] border-[var(--color-primary)] rounded-xl py-1 px-2">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
                <hr className="border-t border-[var(--color-primary)] my-4" />
            </div>
            <div className="mt-10 space-y-6">
                {loading ? (
                    <div className="text-center">Loading images...</div>
                ) : (
                    <>
                        <MasonryPhotoAlbum
                            photos={displayedImages}
                            targetRowHeight={150}
                            onClick={({ index: current }) => setIndex(current)}
                        />
                        <Lightbox
                            plugins={[Zoom, Thumbnails, Fullscreen]}
                            index={index}
                            slides={displayedImages}
                            open={index >= 0}
                            close={() => setIndex(-1)}
                        />
                        <div className="flex justify-center gap-4">
                            {canLoadLess && (
                                <button onClick={loadLess} className="font-bold text-[var(--color-secondary)] font-[var(--font-navigation)] cursor-pointer">
                                    Show Less
                                </button>
                            )}
                            {hasMore && (
                                <span onClick={loadMore} className="font-bold text-[var(--color-secondary)] font-[var(--font-navigation)] cursor-pointer">
                                    Show More
                                </span>
                            )}
                        </div>
                        <div className="text-center text-sm text-gray-500">
                            Showing {displayedImages.length} of {processedImages.length} images
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default VillaDetails;