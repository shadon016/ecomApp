import React from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
const Categories = async () => {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  const grouped = data?.products.reduce((acc, item) => {
    const key = item.category;
    if (!acc[key]) acc[key] = [];
    acc[key].push(item);
    return acc;
  }, {});
  const categories = Object.keys(grouped);

  return (
    <div>
      <h2 className="mx-auto w-[calc(100vw-120px)] py-8 ">choose category</h2>
      <div className="flex gap-4 flex-wrap justify-center ">
        {categories?.map((category, index) => (
          <Link href="/products" key={index}>
            <Card className="min-w-[18rem]">
              <CardHeader>
                <CardTitle>{category}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{grouped[category].length}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
