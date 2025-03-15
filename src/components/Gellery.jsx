import React, { Suspense } from "react";
import Title from "./Title";
import { gallery } from "../assets/assets";

const Gallery = () => {
  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Suspense
          fallback={
            <div className="h-8 bg-gray-200 rounded w-48 mx-auto"></div>
          }
        >
          <Title text1="OUR" text2="GALLERY" />
        </Suspense>
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Explore our stunning collection of moments captured through the lens.
          From breathtaking landscapes to urban adventures, each image tells a
          unique story and invites you into a world of visual inspiration.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {gallery.map((image, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2"
          >
            <div className="aspect-w-4 aspect-h-3">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white text-xl font-medium">{image.alt}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
