import Link from "next/link";
import { Button } from "./ui/button";
import { Search, ShoppingCartIcon } from "lucide-react";
import { SearchBar } from "./searchProducts";

export default function Navbar() {
  return (
    <header className="p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">RidePanda</Link>
        <SearchBar />
        <Button>
          <ShoppingCartIcon className="h-6 w-6" />
        </Button>
      </div>
    </header>
  );
}