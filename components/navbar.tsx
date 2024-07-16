import Link from "next/link";
import { Button } from "./ui/button";
import { Loader2, PawPrint, Search, ShoppingCartIcon } from "lucide-react";
import { SearchBar } from "./searchProducts";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";

export default function Navbar() {
  return (
    <header className="p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex gap-4 justify-center items-center">
          <Link href="/">
            <PawPrint className="h-6 w-6" />
          </Link>
          <Link href="/products">
          <Button variant="outline">

            Shop
          </Button>
          </Link>
          <SearchBar />
        </div>
        <div className="flex gap-4">
          <Button>
            <ShoppingCartIcon className="h-4 w-4" />
          </Button>
          <ClerkLoaded>
            <UserButton />
          </ClerkLoaded>
          <ClerkLoading>
            <Loader2 className="annimate-spin text-slate-100 size-8" />
          </ClerkLoading>
        </div>
      </div>
    </header>
  );
}
