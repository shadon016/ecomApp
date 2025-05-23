import React from "react";
import Image from "next/image";
import ProductInfo from "./components/productInfo.jsx";
const Page = async ({ params }) => {
  const { id } = await params;
  const response = await fetch("https://dummyjson.com/products");
  const products = await response.json();
  const product = products?.products?.find(
    (product) => product.id === Number(id)
  );
  return (
    <div className="mx-auto w-[calc(100vw-120px)] flex py-4 gap-6">
      <div className=" w-1/3 h-1/2">
        <Image
          className="object-cover shadow-sm rounded-md"
          src={product?.thumbnail}
          alt={product?.title}
          width={1000}
          height={1000}
        />
        <div className="flex gap-2 py-5 w-full justify-between">
          {product?.images?.map((image, index) => (
            <Image
              key={index}
              className="w-32 shadow-sm rounded-md"
              src={image}
              alt={product?.title}
              width={1000}
              height={1000}
            />
          ))}
        </div>
      </div>
      <div className="flex-1">
        <ProductInfo product={product} />
      </div>
    </div>
  );
};

export default Page;
