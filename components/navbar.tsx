import Link from "next/link";
import { Button } from "./ui/button";
import { PawPrint, Search, ShoppingCartIcon } from "lucide-react";
import { SearchBar } from "./searchProducts";

export default function Navbar() {
  return (
    <header className="p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/"><PawPrint className="h-6 w-6" /></Link>
        <SearchBar />
        <Button>
          <ShoppingCartIcon className="h-6 w-6" />
        </Button>
      </div>
    </header>
  );
}