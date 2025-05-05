import React from "react";
import Quantity from "./quantity";
import AddCart from "./addcart";

const ProductInfo = ({ product }) => {
  return (
    <div>
      <h1 className="text-3xl">{product?.title}</h1>
      <p className="text-sm text-gray-500">{product?.description}</p>
      <p>
        <span className="text-gray-500">Price:</span> ${product?.price}
      </p>
      <div className="flex gap-4 items-center">
        <Quantity />
        <AddCart />
      </div>
    </div>
  );
};

export default ProductInfo;
