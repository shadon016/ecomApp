"use client";

import React, { useState } from "react";
import Allproducts from "./allproduct.jsx";
import Category from "./category.jsx";

const Wrapper = ({ products }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  return (
    <div className="flex justify-between gap-4 w-[calc(100vw-120px)] mx-auto">
      <div className="">
        <Category
          products={products}
          onSelectedCategory={setSelectedCategory}
        />
      </div>
      <div>
        <Allproducts products={products} selectedCategory={selectedCategory} />
      </div>
    </div>
  );
};

export default Wrapper;
