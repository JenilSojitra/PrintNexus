import React, { useContext, useEffect, useState, Suspense } from "react";
import { ProductsContext } from "../context/ProductsContext";

// Lazy load components
const Title = React.lazy(() => import("./Title"));
const ProductItems = React.lazy(() => import("./ProductItems"));

// Loading component for individual items
const ItemLoadingFallback = () => (
  <div className="w-full h-64 bg-gray-100 rounded-md animate-pulse">
    <div className="h-40 bg-gray-200 rounded-t-md"></div>
    <div className="p-4 space-y-2">
      <div className="h-4 bg-gray-200 rounded w-2/3"></div>
      <div className="h-4 bg-gray-200 rounded w-1/3"></div>
    </div>
  </div>
);

// Loading component for title
const TitleLoadingFallback = () => (
  <div className="space-y-4 text-center">
    <div className="h-8 bg-gray-200 rounded w-48 mx-auto"></div>
    <div className="h-20 bg-gray-100 rounded w-3/4 mx-auto"></div>
  </div>
);

const BestSellers = () => {
  const { products } = useContext(ProductsContext);
  const [bestSellers, setBestSellers] = useState([]);

  useEffect(() => {
    const bestProducts = products.filter((item) => item.bestseller);
    setBestSellers(bestProducts.slice(0, 4));
  }, [products]); // Added products as dependency

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Suspense fallback={<TitleLoadingFallback />}>
          <Title text1="BEST" text2="SELLERS" />
          <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
            Featuring the most-loved and top-rated products chosen by our
            customers. These standout pieces combine style, quality, and
            performance, making them must-haves for every wardrobe.
          </p>
        </Suspense>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-6">
        {bestSellers.map((item, index) => (
          <Suspense key={item._id || index} fallback={<ItemLoadingFallback />}>
            <ProductItems
              id={item._id}
              name={item.name}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          </Suspense>
        ))}
      </div>
    </div>
  );
};

export default BestSellers;
