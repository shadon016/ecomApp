import React from "react";
import Link from "next/link";
import ProductCard from "./productCard";
import Viewall from "../app/(home)/products/components/viewall";

const Products = async ({ products }) => {
  return (
    <div className="">
      <div className="flex gap-4 py-8 justify-center flex-wrap ">
        {products?.products?.map((product) => (
          <Link href={`/${product.id}`} key={product?.id}>
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
      <div className="flex justify-center py-8">
        <Viewall />
      </div>
    </div>
  );
};

export default Products;
