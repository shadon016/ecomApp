import Link from "next/link";
import { ShoppingBasket } from "lucide-react";
import Length from "../app/(home)/cart/components/length.jsx";
const Nav = () => {
  return (
    <nav className=" p-4 bg-gray-800  text-white">
      <div className="mx-auto w-[calc(100vw-120px)] flex justify-between items-center">
        <div className="text-lg font-bold uppercase">
          <Link href="/">shopapp</Link>
        </div>
        <ul className="flex space-x-4">
          <Link href="/cart">
            <ShoppingBasket />
            <span className="ml-2">
              <Length />
            </span>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
