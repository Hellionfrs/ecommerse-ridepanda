import Image from "next/image";
import Link from "next/link";
import heroImage from "@/app/assets/panda-waving.jpg";

export default function Hero({ user }: { user: boolean }) {
  return (
    <section className="w-full flex-1 pt-12 md:pt-24 lg:pt-32 border-y">
      <div className="container grid max-w-[1300px] gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
        <div className="flex flex-col justify-center items-center gap-2 lg:items-start">
          <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
            Discover the Panda-monium at RidePanda Ecommerse
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Explore our curated collection of panda-themed products and
            accessories.
          </p>
          <div className="space-x-4 mt-6">
            {user ? (
              <Link
                href="/products"
                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Shop Now
              </Link>
            ) : (
              <div className="flex gap-4">
                <Link
                  href="/sign-up"
                  className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Register
                </Link>
                <Link
                  href="/sign-in"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Login
                </Link>
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            src={heroImage}
            width="500"
            height="500"
            alt="Panda Emporium Hero"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
