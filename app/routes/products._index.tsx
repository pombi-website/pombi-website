import { Layout } from '~/components/layout';
import { getAllProducts } from '@/models/product.server';
import { json } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';

export const loader = async () => {
  return json({ products: await getAllProducts() });
};

export default function Products() {
  const { products } = useLoaderData<typeof loader>();

  return (
    <Layout>
      <div className="bg-gray-100 min-h-screen p-8">
        <h1 className="text-2xl font-bold mb-8">Semua Produk</h1>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <li
              key={product.slug}
              className="border rounded-lg overflow-hidden shadow-lg bg-white"
            >
              <Link to={`/products/${product.slug}`}>
                <img
                  src={product.imageURL}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
              </Link>
              <div className="p-4">
                <h2 className="text-lg font-semibold">
                  {product.name}
                </h2>
                <p className="text-xl text-blue-600">
                  Rp {product.price}
                </p>
                <p className="text-gray-700 text-sm mt-2">
                  {product.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
