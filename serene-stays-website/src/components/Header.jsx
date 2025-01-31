import { LazyLoadImage } from "react-lazy-load-image-component";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import '../App.css';
import { Navigation, Autoplay } from 'swiper/modules';

import img1 from '../assets/CasaDeFlores/CasaDeFlores-WebP/IMG_0001.webp';
import img2 from '../assets/CasaDeFlores/CasaDeFlores-WebP/IMG_0002.webp';
import img3 from '../assets/CasaDeFlores/CasaDeFlores-WebP/IMG_0003.webp';
import img4 from '../assets/WilderNest/Wildernest-WebP/IMG_0001.webp';
import img5 from '../assets/WilderNest/Wildernest-WebP/IMG_0002.webp';
import img6 from '../assets/WilderNest/Wildernest-WebP/IMG_0003.webp';

function Header() {
    const images = [img1, img2, img3, img4, img5, img6]

    return (
        <>
            <Swiper navigation={true} modules={[Navigation, Autoplay]} className="mySwiper"
                autoplay={{ delay: 4000, disableOnInteraction: false }}>
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <LazyLoadImage
                            src={image}
                            alt={`Slide ${index + 1}`}
                            // effect="blur"
                            className="slide-image"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}

export default Header;
