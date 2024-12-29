import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductsContext } from "../context/ProductsContext";

const ProductItems = ({ id, name, image, price }) => {
  const { currency } = useContext(ProductsContext);

  return (
    <Link className="cursor-pointer group" to={`/product/${id}`}>
      <div className="w-full overflow-hidden rounded-lg bg-gray-200">
        <img
          className="h-full w-full object-cover object-center productImage"
          src={image[0]}
          alt={`Product_Image_${name}`}
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{name}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">
        {currency} {price.toFixed(2)}
      </p>
    </Link>
  );
};

export default ProductItems;
