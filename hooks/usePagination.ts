import { useEffect, useState } from "react";
import { Products } from "@/app/(products)/definitions";
import { useSearch } from "@/providers/searchContext";
import { getProducts } from "@/app/(products)/actions";

export function usePagination() {
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

  return {
    paginatedProducts,
    filteredProducts,
    page,
    limit,
    isLoading,
    handleNextPage,
    handlePrevPage,
    handleLimitChange,
  };
}
