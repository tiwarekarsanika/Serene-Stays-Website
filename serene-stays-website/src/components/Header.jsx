import { LazyLoadImage } from "react-lazy-load-image-component";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import '../App.css';
import { Navigation, Autoplay } from 'swiper/modules';
import headerData from '../data/header.json';
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from '@cloudinary/react';
import { fill } from "@cloudinary/url-gen/actions/resize";

function Header() {
    const cld = new Cloudinary({
        cloud: {
            cloudName: "sanikaDemo",
        },
    });

    const images = headerData.headerImages.map(image => 
        cld.image(image)
            .quality("auto:best")
    );    

    // console.log(images)

    return (
        <>
            <Swiper navigation={true} modules={[Navigation, Autoplay]} className="mySwiper"
                autoplay={{ delay: 4000, disableOnInteraction: false }}>
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <AdvancedImage
                            cldImg={image}
                            className="w-full h-full object-cover"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}

export default Header;
