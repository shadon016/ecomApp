import React from "react";
import Products from "@/components/products.jsx";
import Category from "./components/category.jsx";

const Page = async () => {
  const response = await fetch("https://dummyjson.com/products");
  const products = await response.json();

  return (
    <div className="flex justify-between gap-4 w-[calc(100vw-120px)] mx-auto">
      <div className="">
        <Category products={products} />
      </div>
      <div>
        <Products products={products} />
      </div>
    </div>
  );
};

export default Page;
