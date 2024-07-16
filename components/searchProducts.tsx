"use client";
import { useSearch } from "@/providers/searchContext";
import { Input } from "@/components/ui/input";

export function SearchBar() {
  const { query, setQuery } = useSearch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <div className="flex justify-center p-2 md:p-4">
      <Input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search for products..."
        className="w-full p-2 rounded"
      />
    </div>
  );
}
