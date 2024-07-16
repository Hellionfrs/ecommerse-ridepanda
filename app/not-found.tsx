import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-4xl font-bold">404</h2>
      <p className="text-lg">Page not found</p>
      <Link href="/" className="mt-6">
        <Button className="btn btn-primary">Go to Home</Button>
      </Link>
    </div>
  );
}
