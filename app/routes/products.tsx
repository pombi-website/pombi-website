import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { prisma } from "~/db.server";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const products = await prisma.product.findMany({});
  return json({ products });
};

export default function ProductsRoute() {
  const { products } = useLoaderData<typeof loader>();

  return (
    <div>
      <h1>Semua Produk</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>Rp {product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
