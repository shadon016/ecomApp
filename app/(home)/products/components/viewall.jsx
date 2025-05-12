"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Viewall = () => {
  const pathname = usePathname();
  return (
    <div>
      {pathname !== "/products" ? (
        <Link
          href="/products"
          className="px-6 py-1 shadow-md bg-gray-200 rounded-md"
        >
          view all
        </Link>
      ) : null}
    </div>
  );
};

export default Viewall;
