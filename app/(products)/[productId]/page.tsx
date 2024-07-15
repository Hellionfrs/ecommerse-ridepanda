import Product from "@/components/product";
import { Suspense } from "react";

export default function Page({ params }: { params: { productId: string } }) {
  const { productId } = params;
  return (
    <Suspense fallback={<h1>Loading product...</h1>}>
      <Product id={productId} />
    </Suspense>
  );
}
