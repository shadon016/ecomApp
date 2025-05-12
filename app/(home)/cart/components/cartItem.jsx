"use client";
import React, { useContext } from "react";
import { cartContext } from "../../../context/context.js";
import Price from "./price.jsx";

const CartItem = () => {
  const { cart, setCart } = useContext(cartContext);
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleDelete = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };
  const handleIncrement = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  };
  const handleDecrement = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(updatedCart);
  };
  return (
    <div className="flex flex-col gap-4">
      {cart.length === 0 && (
        <div className="flex justify-center items-center h-full">
          <h1 className="text-2xl">Your cart is empty</h1>
        </div>
      )}
      {cart?.map((item) => (
        <div key={item.id} className="flex gap-4 items-center bg-red-400">
          <div className="">
            <h2>{item.title}</h2>
            <p>price ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
          </div>
          <div className="flex gap-2">
            <button onClick={() => handleIncrement(item.id)}>+</button>
            <button onClick={() => handleDecrement(item.id)}>-</button>
            <button onClick={() => handleDelete(item.id)}>delete</button>
          </div>
        </div>
      ))}
      <div className="">
        {cart.length > 0 && <Price totalPrice={totalPrice} />}
      </div>
    </div>
  );
};

export default CartItem;
