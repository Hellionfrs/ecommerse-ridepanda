import React, { Suspense } from "react";

import ProductsList, { ProductsListSkeleton } from "@/components/productsList";

export default function Landing() {
  return (
    <main className="flex-1 py-8">
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 md:p-6">
        <Suspense fallback={<ProductsListSkeleton />}>
          <ProductsList />
        </Suspense>
      </div>
    </main>
  );
}

function ShoppingCartIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
}
