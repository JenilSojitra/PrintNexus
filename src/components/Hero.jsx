import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="block relative mt-5">
      {/* Right Side */}
      <img
        src={assets.header_image}
        alt="Hero"
        className="w-full h-[70vh] bg-center rounded-lg object-cover brightness-50"
      />
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white">
        <p className="font-bold text-5xl sm:text-7xl flex text-center leading-1 sm:leading-[80px]">
          Level up your style with our collections
        </p>
        <p className="text-sm sm:text-xl flex text-center mt-10">
          Elevate your style with our exclusive clothing collection! Discover
          the latest fashion trends for men, women, and kids. From casual wear
          to statement pieces, we offer premium quality and timeless designs.
          Shop now and redefine your wardrobe!
        </p>
      </div>
    </div>
  );
};

export default Hero;
