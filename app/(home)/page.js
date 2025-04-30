import Carousel from "@/components/carousel.jsx";

import Categories from "@/components/categories.jsx";
import Products from "@/components/products.jsx";
export default function Home() {
  return (
    <div className="">
      <Carousel />

      {/* start category list */}
      <Categories />
      {/* end category list */}
      {/*start products list */}
      <Products />
      {/*end products list */}
    </div>
  );
}
