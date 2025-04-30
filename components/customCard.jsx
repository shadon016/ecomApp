import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const CustomCard = ({ title, footer = null }) => {
  return (
    <Card className="min-w-[18rem]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      {footer && (
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      )}
    </Card>
  );
};

export default CustomCard;
