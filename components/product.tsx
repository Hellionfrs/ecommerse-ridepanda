import { getProductById } from "@/app/products/[productId]/actions";
import { Product as ProductType } from "@/app/products/definitions";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { Skeleton } from "./ui/skeleton";
import blur from "@/app/assets/blur.png";

export default async function Product({ id }: { id: string }) {
  const { image, title, price, category, description } = await getProductById(
    id
  );
  return (
    <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-7xl mt-6 px-4 mx-auto py-6">
      <div className="flex flex-1 justify-center self-center">
        <Image
          src={image}
          alt={title}
          width={400}
          height={400}
          priority={true}
          blurDataURL={
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII="
          }
          placeholder="blur"
          className="w-auto h-[400px] object-cover md:h-[600px]"
        />
      </div>
      <div className="grid gap-4 md:gap-10 items-start">
        <div className="grid gap-2">
          <h1 className="text-3xl font-bold">{title}</h1>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-0.5">
              <StarIcon className="w-5 h-5 fill-primary" />
              <StarIcon className="w-5 h-5 fill-primary" />
              <StarIcon className="w-5 h-5 fill-primary" />
              <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
              <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
            </div>
            <span className="text-sm text-muted-foreground">(12 reviews)</span>
          </div>
        </div>
        <div className="grid gap-4 text-sm leading-loose">
          <p>{description}</p>
        </div>
        <div className="grid gap-2">
          <div className="flex items-center gap-4">
            <span className="text-4xl font-bold">${price}</span>
            <Button size="lg">Add to Cart</Button>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Category:</span>
            <Link
              href="#"
              className="font-medium hover:underline"
              prefetch={false}
            >
              {category}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function StarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

export function ProductSkeleton() {
  return (
    <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-7xl mt-6 px-4 mx-auto py-6">
      <Skeleton className="w-300px h-[300px] md:h-[400px] md:w-[400px] "></Skeleton>
      <div className="grid gap-4 md:gap-10 items-start">
        <Skeleton className="w-[200px] h-6  md:h-8"></Skeleton>
        <Skeleton className="w-[180x] h-6 md:h-8"></Skeleton>
        <Skeleton className="w-[180x] h-6 md:h-8"></Skeleton>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Skeleton className="w-full h-4 rounded-md"></Skeleton>
        </div>
        <div className="grid gap-2">
          <div className="flex items-center gap-4">
            <span className="text-4xl font-bold">$ 19.99</span>
            <Button size="lg">Add to Cart</Button>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Category:</span>
            <Skeleton className="w-full h-4 rounded-md"></Skeleton>
          </div>
        </div>
      </div>
    </div>
  );
}
