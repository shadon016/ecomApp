import React from "react";
import Link from "next/link";
import ProductCard from "./productCard";

const Products = async () => {
  const response = await fetch("https://dummyjson.com/products?limit=12");
  const products = await response.json();
  return (
    <div className="mx-auto w-[calc(100vw-120px)]">
      <div className="flex gap-8 py-8">
        <p>latest product</p>
        <p>all products</p>
      </div>
      <div className="flex gap-4 py-8 justify-center flex-wrap ">
        {products?.products?.map((product) => (
          <Link href={`/${product.id}`} key={product?.id}>
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
