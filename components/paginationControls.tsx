import React from "react";
import { Button } from "./ui/button";

interface PaginationControlsProps {
  page: number;
  limit: number;
  totalProducts: number;
  onPrevPage: () => void;
  onNextPage: () => void;
  onLimitChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const PaginationControls: React.FC<PaginationControlsProps> = ({
  page,
  limit,
  totalProducts,
  onPrevPage,
  onNextPage,
  onLimitChange,
}) => {
  const productPerPage = limit * page >= totalProducts ? totalProducts : limit * page;
  return (
    <div className="flex justify-between p-4 md:p-6">
      <Button onClick={onPrevPage} disabled={page === 1}>
        Previous
      </Button>
      <div className="flex items-center gap-2">
        <span>
          Showing {productPerPage} of {totalProducts}
        </span>
        <select
          className="w-12 rounded p-2"
          onChange={onLimitChange}
          defaultValue={limit.toString()}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
      </div>
      <Button onClick={onNextPage} disabled={page * limit >= totalProducts}>
        Next
      </Button>
    </div>
  );
};
