import React, { useContext, useEffect, useState, Suspense } from "react";
import { ProductsContext } from "../context/ProductsContext";
const Title = React.lazy(() => import("./Title"));
const ProductItems = React.lazy(() => import("./ProductItems"));

const ProductItemFallback = () => (
  <div className="animate-pulse">
    <div className="h-64 bg-gray-200 rounded-lg mb-4"></div>
    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
    <div className="h-4 bg-gray-200 rounded w-1/4"></div>
  </div>
);

const LatestCollection = () => {
  const { products } = useContext(ProductsContext);
  const [latestProducts, setLatestProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (products.length > 0) {
      // Get the latest products by date if available, otherwise slice
      const sorted = [...products].sort(
        (a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0)
      );
      setLatestProducts(sorted.slice(0, 6));
      setIsLoading(false);
    }
  }, [products]);

  if (isLoading) {
    return (
      <div className="my-20">
        <div className="text-center py-8">
          <div className="h-8 bg-gray-200 rounded w-48 mx-auto mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {[...Array(6)].map((_, index) => (
            <ProductItemFallback key={index} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Suspense
          fallback={
            <div className="h-8 bg-gray-200 rounded w-48 mx-auto"></div>
          }
        >
          <Title text1="LATEST" text2="COLLECTIONS" />
        </Suspense>
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Each piece is thoughtfully curated to reflect the season's most
          stylish designs while maintaining the quality and value you expect.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {latestProducts.map((item) => (
          <Suspense key={item._id} fallback={<ProductItemFallback />}>
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

export default LatestCollection;
