"use client";
import React, { useContext } from "react";
import { cartContext } from "../../../context/context.js";

const CartItem = () => {
  const { cart } = useContext(cartContext);
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  return (
    <div className="flex flex-col gap-4">
      {cart?.map((item) => (
        <div
          key={item.id}
          className="flex gap-4 items-center bg-red-400 w-1/4 "
        >
          <div className="">
            <h2>{item.title}</h2>
            <p>price ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
          </div>
          <div className="flex gap-2">
            

          </div>
        </div>
      ))}
      <div className="flex gap-2">
        <h2>Total Price:</h2>
        <p>{totalPrice}</p>
      </div>
    </div>
  );
};

export default CartItem;
