"use server";

const filterAction = async (products, categoryName) => {
  return products?.products?.filter(
    (product) => product.category === categoryName
  );
};

export { filterAction };
