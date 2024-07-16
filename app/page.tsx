"use client";

import Footer from "@/components/footer";
import Header from "@/components/lading-page/header";
import Hero from "@/components/lading-page/hero";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  const user = useUser();
  console.log(user);
  return (
    <div className="flex flex-col min-h-dvh">
      <Header user={!!user.isSignedIn} />
      <Hero user={!!user.isSignedIn}/>
      <Footer />
      {/* {user.isSignedIn ? (
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
      )} */}
    </div>
  );
}
