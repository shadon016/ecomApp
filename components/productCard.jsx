import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const ProductCard = ({ product }) => {
  return (
    <Card className="min-w-[18rem]">
      <CardHeader>
        <CardTitle>{product?.title}</CardTitle>
        <CardDescription>
          <Image
            src={product?.thumbnail}
            alt={product?.title}
            width={100}
            height={100}
          />
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
