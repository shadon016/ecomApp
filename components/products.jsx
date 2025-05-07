import React from "react";
import Link from "next/link";
import ProductCard from "./productCard";

const Products = async ({ products }) => {
  return (
    <div className="mx-auto w-[calc(100vw-120px)]">
      <div className="flex gap-4 py-8 justify-center flex-wrap ">
        {products?.products?.map((product) => (
          <Link href={`/${product.id}`} key={product?.id}>
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
      <div className="flex justify-center py-8">
        <Link
          href="/products"
          className="px-6 py-1 shadow-md bg-gray-200 rounded-md"
        >
          view all
        </Link>
      </div>
    </div>
  );
};

export default Products;
