import React from "react";

const Category = ({ products }) => {
  const grouped = products?.products.reduce((acc, item) => {
    const key = item.category;
    if (!acc[key]) acc[key] = [];
    acc[key].push(item);
    return acc;
  }, {});
  const categories = Object.keys(grouped);
  return (
    <div className="sticky top-20 right-0 py-7">
      <h1>Category</h1>
      {categories?.map((category, index) => (
        <div key={index}>
          <p>{category}</p>
        </div>
      ))}
    </div>
  );
};

export default Category;
