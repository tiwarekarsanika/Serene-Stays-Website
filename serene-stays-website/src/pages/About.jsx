import React from "react";
import img1 from "../assets/CasaDeFlores/CasaDeFlores-WebP/IMG_0001.webp";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      {/* Header Image */}
      <div className="relative w-full h-[40vh] sm:h-[30vh] md:h-[35vh] lg:h-[40vh]">
        <img
          src={img1}
          alt="About Us"
          className="w-full h-full object-cover brightness-50"
        />
        <h1 className="absolute inset-0 flex items-center justify-center text-white text-3xl sm:text-4xl md:text-5xl font-bold">
          About Us
        </h1>
      </div>

      {/* Content Section */}
      <div className="font-body text-lg text-left px-6 sm:px-10 md:px-16 lg:px-20 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 text-justify">
          <p className="text-base sm:text-lg md:text-xl leading-relaxed">
            At <span className="font-bold">Serene Stays by Prasad Hospitality</span>, we redefine luxury and comfort with our exclusive collection of villas and resort rooms across Virar, Goa, Mahabaleshwar, and Thailand. 
            With over 20 years of experience in the hospitality industry, we have mastered the art of creating unforgettable stays tailored to your needs. 
            Whether you are looking for a peaceful retreat, a family vacation, or a grand celebration, our properties offer the perfect setting. 
            Each villa is thoughtfully designed with private pools, lush green lawns, and spacious interiors, ensuring a blend of opulence and relaxation. 
            Our resort rooms provide a cozy yet elegant ambiance, catering to travelers who seek comfort with a touch of sophistication.
            Strategically located in some of the most sought-after destinations, our properties offer a unique blend of natural beauty and modern luxury. 
            Imagine waking up to the serene beaches of Goa, enjoying the scenic hill views of Mahabaleshwar, or unwinding amidst the tropical charm of Thailand.
          </p>

          <p className="text-base sm:text-lg md:text-xl leading-relaxed"> 
            Whether you prefer a secluded escape or an adventurous getaway, our locations promise an experience that is both stunning and memorable. 
            We take pride in offering personalized hospitality, ensuring that your stay is seamless and filled with delightful moments. 
            From intimate gatherings to grand events, our villas and resorts are designed to accommodate every occasion with elegance and ease. 
            At <span className="font-bold">Serene Stays</span>, we understand the importance of flexibility and convenience. 
            Our hassle-free booking process and flexible cancellation policies allow you to plan your vacation with confidence. 
            With our dedicated team handling every detail of your stay, you can focus on making memories with your loved ones. 
            Whether it's a weekend escape or a long vacation, we invite you to experience luxury, comfort, and exceptional service like never before.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;



