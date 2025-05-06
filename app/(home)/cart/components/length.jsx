"use client";
import React, { useContext } from "react";
import { cartContext } from "../../../context/context.js";

const Length = () => {
  const { cart } = useContext(cartContext);
  return (
    <div>
      <p>{cart.length}</p>
    </div>
  );
};

export default Length;
