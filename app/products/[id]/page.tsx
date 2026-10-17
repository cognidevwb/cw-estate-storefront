import { notFound } from "next/navigation";
import { getProduct } from "@/lib/catalog";
import { AddToCart } from "./AddToCart";

export const dynamic = "force-dynamic";

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = await getProduct(id);
  if (!product) notFound();
  return (
    <article>
      <h1>{product.name}</h1>
      <p>SKU {product.sku}</p>
      <p>{product.price.toFixed(2)}</p>
      <AddToCart productId={product.id} />
    </article>
  );
}
