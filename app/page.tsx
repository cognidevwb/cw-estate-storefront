import Link from "next/link";
import { listProducts } from "@/lib/catalog";

export const dynamic = "force-dynamic";

export default async function Home() {
  const products = await listProducts();
  return (
    <section>
      <h1>Products</h1>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            <Link href={`/products/${p.id}`}>{p.name}</Link> · {p.price.toFixed(2)}
          </li>
        ))}
      </ul>
    </section>
  );
}
