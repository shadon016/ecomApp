import Link from "next/link";
import { ShoppingBasket } from "lucide-react";
const Nav = () => {
  return (
    <nav className=" p-4 bg-gray-800  text-white">
      <div className="mx-auto w-[calc(100vw-120px)] flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link href="/">My Website</Link>
        </div>
        <ul className="flex space-x-4">
          <Link href="/cart">
            <ShoppingBasket />
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
