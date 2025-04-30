import React from "react";
import CustomCard from "./customCard";

const Products = () => {
  return (
    <div className="mx-auto w-[calc(100vw-120px)]">
      <div className="flex gap-8 ">
        <p>latest product</p>
        <p>all products</p>
      </div>
      <div className="flex gap-4 py-8 justify-center flex-wrap ">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <CustomCard key={item} title="product title" />
        ))}
      </div>
    </div>
  );
};

export default Products;
