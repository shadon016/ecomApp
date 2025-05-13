import React from "react";

import Wrapper from "./components/wrapper.jsx";

const Page = async () => {
  const response = await fetch("https://dummyjson.com/products");
  const products = await response.json();

  return <Wrapper products={products} />;
};

export default Page;
