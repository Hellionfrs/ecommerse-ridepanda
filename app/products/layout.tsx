import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React from "react";

export default function ProductsLayout({ children }: React.PropsWithChildren) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="h-max-screen flex-1 flex flex-col">{children}</div>
      <Footer />
    </div>
  );
}
