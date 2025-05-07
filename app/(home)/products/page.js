import React from "react";
import Products from "@/components/products.jsx";

const Page = async () => {
  const response = await fetch("https://dummyjson.com/products");
  const products = await response.json();
  return (
    <div>
      <Products products={products} />
    </div>
  );
};

export default Page;
