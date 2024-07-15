import { getProducts } from "@/app/(products)/actions";
import Product from "./product";

export default async function ProductsList() {
  const products = await getProducts();
  console.log(products);
  return (
    <>
      {products.map((product) => (
        <Product key={product.id} data={product} />
      ))}
    </>
  );
}

export function ProductsListSkeleton() {
  return <h1>Loading...</h1>;
}
