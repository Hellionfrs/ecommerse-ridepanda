"use client";

import { useEffect, useState } from "react";

import ProductCard from "./productCard";
import { getProducts } from "@/app/(products)/actions";
import { Products } from "@/app/(products)/definitions";
import { Button } from "./ui/button";
import { useSearch } from "@/providers/searchContext";

export default function ProductsList() {
  const [products, setProducts] = useState<Products>([]);
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(5); // Default limit per page
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const { query } = useSearch();

  useEffect(() => {
    setIsLoading(true);
    getProducts().then((products) => {
      setProducts(products);
      setIsLoading(false);
    });
  }, [limit]);
  
  // Filter products based on the query
  const filteredProducts = products.filter((product) => {
    if (query === "") return true;
    return product.title.toLowerCase().includes(query.toLowerCase());
  });

  // Get products for the current page
  const paginatedProducts = filteredProducts.slice(
    (page - 1) * limit,
    page * limit
  );

  const handleNextPage = () => setPage((prevPage) => prevPage + 1);
  const handlePrevPage = () => setPage((prevPage) => Math.max(prevPage - 1, 1));

  const handleLimitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLimit(parseInt(e.target.value));
    setPage(1); // Reset to the first page when the limit changes
  };

  return (
    <>
      <div className="flex-1 py-8">
        <div className="flex justify-between p-4 md:p-6">
          <Button onClick={handlePrevPage} disabled={page === 1}>
            Previous
          </Button>
          <div className="flex items-center gap-2">
            <span>
              Showing {paginatedProducts.length * page} of {filteredProducts.length}
            </span>
            <select
              className="w-12 rounded p-2"
              onChange={handleLimitChange}
              defaultValue={limit.toString()}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
            </select>
          </div>
          <Button
            onClick={handleNextPage}
            disabled={page * limit >= products.length}
          >
            Next
          </Button>
        </div>
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
  return <h1>Loading...</h1>;
}
