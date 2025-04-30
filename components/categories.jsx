import React from "react";
import CustomCard from "@/components/customCard.jsx";
const Categories = () => {
  return (
    <div>
      <h2 className="mx-auto w-[calc(100vw-120px)] py-8 ">choose category</h2>
      <div className="flex gap-4 flex-wrap justify-center ">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <CustomCard key={item} title="category title" />
        ))}
      </div>
    </div>
  );
};

export default Categories;
