"use client";

import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  const user = useUser();
  console.log(user);
  return (
    <div className="flex mt-10 items-center h-screen flex-col gap-4">
      <h1 className="text-4xl font-bold text-center">
        Welcome to RidePanda Ecommerce
      </h1>
      {user.isSignedIn ? (
        <div>
          <Link href="/products">
            <Button>Go to Products</Button>
          </Link>
        </div>
      ) : (
        <div className="flex gap-4">
          <Link href="sign-up">
            <Button>{`-> Register`}</Button>
          </Link>
          <Link href="sign-in">
            <Button variant="outline">Log in</Button>
          </Link>
        </div>
      )}
    </div>
  );
}
