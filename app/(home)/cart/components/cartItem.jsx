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
    <div>
      {cart?.map((item) => (
        <div key={item.id} className="flex gap-4 items-center">
          <div>
            <h2>{item.title}</h2>
            <p>{item.price}</p>
            <p>Quantity: {item.quantity}</p>
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
