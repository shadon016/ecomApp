"use client";
import React from "react";
import Link from "next/link";
import ProductCard from "../../../../components/productCard.jsx";

const Allproducts = ({ products, selectedCategory }) => {
  const filtered = selectedCategory
    ? products?.products?.filter((p) => p.category === selectedCategory)
    : products.products;

  return (
    <div>
      <div className="flex gap-4 py-8 justify-center flex-wrap ">
        {filtered?.map((product) => (
          <Link href={`/${product.id}`} key={product?.id}>
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Allproducts;
