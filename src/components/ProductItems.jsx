import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductsContext } from "../context/ProductsContext";
import StarRating from "./StarRating";

const ProductItems = ({ id, name, image, price, rating = 4.5 }) => {
  const { currency } = useContext(ProductsContext);

  return (
    <Link className="cursor-pointer group" to={`/product/${id}`}>
      <div className="w-full overflow-hidden rounded-lg bg-gray-200">
        <img
          className="h-[400px] w-full object-cover object-center productImage"
          src={image[0]}
          alt={`Jenil Sojitra`}
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{name}</h3>
      <div className="mt-1 mb-1">
        <StarRating rating={rating} />
      </div>
      <p className="text-lg font-medium text-gray-900">
        {currency} {price.toFixed(2)}
      </p>
    </Link>
  );
};

export default ProductItems;
