"use client";

import React from "react";
import { useState, useContext } from "react";
import Quantity from "./quantity";
import { cartContext } from "../../../context/context.js";

const Addcart = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const { cart, setCart } = useContext(cartContext);

  const handleAddToCart = () => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
  };

  return (
    <>
      <p className={product?.stock > quantity ? "bg-green-400" : "bg-red-400"}>
        {product.stock > quantity ? "in stock" : "out stock"}
      </p>
      <div className="flex gap-4 items-center">
        <Quantity
          quantity={quantity}
          setQuantity={setQuantity}
          product={product}
        />
        <button
          className="bg-slate-300 text-slate-500 px-4 py-1 rounded-md"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </>
  );
};

export default Addcart;
