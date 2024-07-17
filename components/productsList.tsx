"use client";

import { PaginationControls } from "./paginationControls";
import ProductCard from "./productCard";
import { usePagination } from "@/hooks/usePagination";

export default function ProductsList() {
  const {
    paginatedProducts,
    filteredProducts,
    page,
    limit,
    isLoading,
    handleNextPage,
    handlePrevPage,
    handleLimitChange,
  } = usePagination();
  
  return (
    <>
      <div className="flex-1 py-8">
        <PaginationControls
          page={page}
          limit={limit}
          totalProducts={filteredProducts.length}
          onPrevPage={handlePrevPage}
          onNextPage={handleNextPage}
          onLimitChange={handleLimitChange}
        />
        {isLoading ? (
          <ProductsListSkeleton />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 md:p-6">
            {paginatedProducts.map((product) => (
              <ProductCard key={product.id} data={product} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export function ProductsListSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 md:p-6">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="flex flex-col justify-center">
          <div className="w-full h-64 bg-gray-200 rounded-lg"></div>
        </div>
      ))}
    </div>
  );
}
