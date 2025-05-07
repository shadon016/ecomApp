import Carousel from "@/components/carousel.jsx";

import Categories from "@/components/categories.jsx";
import Products from "@/components/products.jsx";
export default async function Home() {
  const response = await fetch("https://dummyjson.com/products?limit=12");
  const products = await response.json();
  return (
    <div className="">
      <Carousel />

      {/* start category list */}
      <Categories />
      {/* end category list */}
      {/*start products list */}
      <Products products={products} />
      {/*end products list */}
    </div>
  );
}
