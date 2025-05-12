import CartItem from "./components/cartItem.jsx";
import Cartimg from "./components/cartimg.jsx";
const Page = () => {
  return (
    <div className="flex h-[calc(100vh-10rem)]">
      <div className="flex-1">
        <Cartimg />
      </div>
      <div className="flex-1">
        <CartItem />
      </div>
    </div>
  );
};

export default Page;
