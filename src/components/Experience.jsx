import React, { Suspense } from "react";
const Title = React.lazy(() => import("./Title"));

// Loading component for title
const TitleLoadingFallback = () => (
  <div className="space-y-4 text-center">
    <div className="h-8 bg-gray-200 rounded w-48 mx-auto"></div>
    <div className="h-20 bg-gray-100 rounded w-3/4 mx-auto"></div>
  </div>
);

const Experience = () => {
  return (
    <div className="my-20">
      <div className="text-center py-8 text-3xl">
        <Suspense fallback={<TitleLoadingFallback />}>
          <Title text1="OUR" text2="SERVICES" />
          <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
            We provide best customer experiences and we offer premium quality
            and timeless designs.
          </p>
        </Suspense>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-6 mt-3">
        <div className="px-5">
          <span className="flex justify-center items-center border p-2 rounded-lg bg-black text-gray-100 w-[50px] h-[50px] serviceIcon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
              <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
              <path d="M17 17h-11v-14h-2" />
              <path d="M6 5l14 1l-1 7h-13" />
            </svg>
          </span>
          <p className="text-lg font-semibold text-black my-3">
            Original Products
          </p>
          <p className="text-gray-400 mb-3">
            We provide money back guarantee if the product are not original
          </p>
        </div>
        <div className="px-5">
          <span className="flex justify-center items-center border p-2 rounded-lg bg-black text-gray-100 w-[50px] h-[50px] serviceIcon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M17 12a5 5 0 1 0 -5 5" />
              <path d="M12 7v-4" />
              <path d="M11 3h2" />
              <path d="M15.536 8.464l2.828 -2.828" />
              <path d="M17.657 4.929l1.414 1.414" />
              <path d="M17 12h4" />
              <path d="M21 11v2" />
              <path d="M12 17v4" />
              <path d="M13 21h-2" />
              <path d="M8.465 15.536l-2.829 2.828" />
              <path d="M6.343 19.071l-1.413 -1.414" />
              <path d="M7 12h-4" />
              <path d="M3 13v-2" />
              <path d="M8.464 8.464l-2.828 -2.828" />
              <path d="M4.929 6.343l1.414 -1.413" />
              <path d="M17.5 17.5m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0" />
              <path d="M19.5 19.5l2.5 2.5" />
            </svg>
          </span>
          <p className="text-lg font-semibold text-black my-3">
            Satisfaction Guarantee
          </p>
          <p className="text-gray-400 mb-3">
            Exchange the products you've purchased if it doesn't fit on you
          </p>
        </div>
        <div className="px-5">
          <span className="flex justify-center items-center border p-2 rounded-lg bg-black text-gray-100 w-[50px] h-[50px] serviceIcon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 17l8 5l7 -4v-8l-4 -2.5l4 -2.5l4 2.5v4l-11 6.5l-4 -2.5v-7.5l-4 -2.5z" />
              <path d="M11 18v4" />
              <path d="M7 15.5l7 -4" />
              <path d="M14 7.5v4" />
              <path d="M14 11.5l4 2.5" />
              <path d="M11 13v-7.5l-4 -2.5l-4 2.5" />
              <path d="M7 8l4 -2.5" />
              <path d="M18 10l4 -2.5" />
            </svg>
          </span>
          <p className="text-lg font-semibold text-black my-3">
            New Arrival Everyday
          </p>
          <p className="text-gray-400 mb-3">
            We updates our collections almost everyday.
          </p>
        </div>
        <div className="px-5">
          <span className="flex justify-center items-center border p-2 rounded-lg bg-black text-gray-100 w-[50px] h-[50px] serviceIcon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
              <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
              <path d="M5 17h-2v-11a1 1 0 0 1 1 -1h9v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" />
            </svg>
          </span>
          <p className="text-lg font-semibold text-black my-3">
            Fast & Free Shipping
          </p>
          <p className="text-gray-400 mb-3">
            We offer fast and free shipping for our loyal customer
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
