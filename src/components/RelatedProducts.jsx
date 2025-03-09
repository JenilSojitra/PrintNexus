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

const RelatedProducts = ({ category, subCategory }) => {
  const { products } = useContext(ProductsContext);
  const [related, setRelated] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (products.length > 0) {
      let pCopy = products.slice();
      pCopy = pCopy.filter((item) => item.category == category);
      pCopy = pCopy.filter((item) => item.subCategory == subCategory);

      setRelated(pCopy.slice(0, 4));
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
    <div className="my-24">
      <div className="text-center text-3xl py-2">
        <Suspense
          fallback={
            <div className="h-8 bg-gray-200 rounded w-48 mx-auto"></div>
          }
        >
          <Title text1="RELATED" text2="PRODUCTS" />
        </Suspense>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-6">
        {related.map((item, index) => (
          <Suspense key={item._id} fallback={<ProductItemFallback />}>
            <ProductItems
              key={index}
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

export default RelatedProducts;
