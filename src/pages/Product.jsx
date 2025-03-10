import React, { useContext, useEffect, useState, Suspense } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../context/ProductsContext";

// Lazy load RelatedProducts component
const LazyRelatedProducts = React.lazy(() =>
  import("../components/RelatedProducts")
);

const Product = () => {
  const { id } = useParams();
  const { products, currency } = useContext(ProductsContext);
  const [productData, setProductData] = useState(null); // Initially set to null for loading state
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchData = () => {
    const product = products.find((item) => item._id === id); // Use find instead of map
    if (product) {
      setProductData(product);
      setImage(product.image[0]);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id, products]); // Re-fetch when products or id changes

  if (!productData) {
    return <div>Loading...</div>; // Display loading until productData is available
  }

  return (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                src={item}
                onClick={() => setImage(item)}
                key={index}
                alt={productData.name + "_" + index}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer h-[150px]"
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img
              src={image}
              alt={productData.name}
              className="w-full h-[750px]"
            />
          </div>
        </div>
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <p className="mt-5 text-3xl font-medium">
            {currency} {productData.price.toFixed(2)}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p>Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  key={index}
                  className={`border py-2 px-4 bg-gray-100 ${
                    item === size ? "border-orange-500" : ""
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>
            This e-commerce website serves as a virtual marketplace designed to
            facilitate the buying and selling of products and services online,
            offering customers a seamless and convenient shopping experience.
            With leadership by Jenil Sojitra and powered by the innovation of
            PrintNexus, this platform enables businesses and individuals to
            showcase their products, connect with customers, and conduct secure
            transactions without the need for a physical storefront.
          </p>
          <p>
            Each product listed on our platform includes detailed descriptions,
            high-quality images, accurate pricing, and available variations such
            as sizes or colors to help customers make informed decisions. While
            we strive to maintain accuracy and clarity in all product listings,
            slight variations may occur depending on suppliers or manufacturing
            batches. We are committed to providing reliable, transparent, and
            customer-focused service to ensure a smooth and satisfying shopping
            journey for every user.
          </p>
        </div>
      </div>

      {/* Suspense to handle lazy loading of RelatedProducts */}
      <Suspense fallback={<div>Loading related products...</div>}>
        <LazyRelatedProducts
          category={productData.category}
          subCategory={productData.subCategory}
        />
      </Suspense>
    </div>
  );
};

export default Product;
