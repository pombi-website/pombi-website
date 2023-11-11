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
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-8">Semua Produk</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg overflow-hidden shadow-lg bg-white"
          >
            <img
              src={product.imageURL}
              alt={product.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-xl text-blue-600">Rp {product.price}</p>
              <p className="text-gray-700 text-sm mt-2">
                {product.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
