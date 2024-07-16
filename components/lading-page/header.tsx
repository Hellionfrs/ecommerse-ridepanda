import { Divide, PawPrint } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Header({ user }: { user: boolean }) {
  return (
    <header className="bg-primary text-primary-foreground px-4 py-2 lg:px-6 flex items-center justify-between ">
      <Link href="#" className="flex items-center gap-2" prefetch={false}>
        <PawPrint className="h-6 w-6" />
        <span className="font-bold text-lg">Panda Emporium</span>
      </Link>
      <nav className="flex items-center gap-4 sm:gap-6">
        {user ? (
          <Link
            href="/products"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Shop
          </Link>
        ) : (
          <div className="flex gap-4">
            <Link
              href="/sign-in"
              className="text-black text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              <Button variant="outline" size={"sm"}>
                Sign In
              </Button>
            </Link>
            <Link
              href="/sign-up"
              className="text-sm text-black font-medium hover:underline underline-offset-4"
              prefetch={false}

            >
              <Button variant="outline" size={"sm"}>
                Sign Up
              </Button>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
