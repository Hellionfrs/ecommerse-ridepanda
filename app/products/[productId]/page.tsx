import Product, { ProductSkeleton } from "@/components/product";
import { Suspense } from "react";

export default function Page({ params }: { params: { productId: string } }) {
  const { productId } = params;
  return (
    <Suspense fallback={<ProductSkeleton />}>
      <Product id={productId} />
    </Suspense>
  );
}
