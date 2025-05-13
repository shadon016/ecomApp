"use client";
import React from "react";

const Category = ({ products, onSelectedCategory }) => {
  const grouped = products?.products?.reduce((acc, item) => {
    const key = item.category;
    if (!acc[key]) acc[key] = [];
    acc[key].push(item);
    return acc;
  }, {});
  const categories = Object.keys(grouped);

  console.log(products);
  return (
    <div className="sticky top-20 right-0 py-7">
      {categories?.map((category, index) => (
        <div key={index} className="w-full py-3">
          <button
            className="py-3 shadow px-6"
            onClick={() => onSelectedCategory(category)}
          >
            {category}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Category;
