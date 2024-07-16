import Image from "next/image";
import { Button } from "./ui/button";
import { Card, CardFooter, CardHeader } from "./ui/card";
import Link from "next/link";

type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
};

export default function ProductCard({ data }: { data: Product }) {
  const { id, title, price, category, description, image } = data;
  return (
    <Card
      key={id}
      className="bg-background rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-all flex flex-col justify-between"
    >
      {/* swap to Link when we have a product page */}
      <CardHeader className="p-4">
        <h3 className="text-lg font-bold">{title}</h3>
      </CardHeader>
      <Link href={`/products/${id}`} className="flex justify-center">
        <Image
          src={image}
          alt={title}
          width={250}
          height={250}
          priority={true}
          className="w-auto h-64 object-cover"
        />
      </Link>

      <CardFooter className="p-4 flex justify-between">
        <span className="text-primary font-bold">${price}</span>
        <Button size="sm">Add to Cart</Button>
      </CardFooter>
    </Card>
  );
}
