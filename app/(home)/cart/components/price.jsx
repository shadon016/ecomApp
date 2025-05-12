import React from "react";

const Price = ({ totalPrice }) => {
  return (
    <div>
      <p>Total Price:{totalPrice.toFixed(2)}</p>
    </div>
  );
};

export default Price;
