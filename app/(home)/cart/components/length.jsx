"use client";
import React, { useContext } from "react";
import { cartContext } from "../../../context/context.js";

const Length = () => {
  const { cart } = useContext(cartContext);
  return (
    <div className="absolute top-1 right-9 bg-red-500 text-white p-2 rounded-full">
      <p className="text-xs">{cart.length}</p>
    </div>
  );
};

export default Length;
