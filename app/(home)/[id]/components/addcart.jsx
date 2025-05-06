"use client";

import React from "react";
import { useState } from "react";
import Quantity from "./quantity";

const Addcart = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  console.log(product, quantity);
  return (
    <div className="flex gap-4 items-center">
      <Quantity quantity={quantity} setQuantity={setQuantity} />
      <button className="bg-slate-300 text-slate-500 px-4 py-1 rounded-md">
        Add to Cart
      </button>
    </div>
  );
};

export default Addcart;
