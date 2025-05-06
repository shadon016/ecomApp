"use client";
import React from "react";

const Quantity = ({ quantity, setQuantity }) => {
  return (
    <div className="shadow-sm rounded-md w-fit">
      <button
        className="px-4 py-1"
        onClick={() => setQuantity((prev) => prev - 1)}
        disabled={quantity <= 1}
      >
        -
      </button>
      <span>{quantity}</span>
      <button
        className="px-4 py-1"
        onClick={() => setQuantity((prev) => prev + 1)}
      >
        +
      </button>
    </div>
  );
};

export default Quantity;
