export default function Page({ params }: { params: { productId: string } }) {
    const { productId } = params;
  return <h1>My Page from {productId}</h1>;
}
