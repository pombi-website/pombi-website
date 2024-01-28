import { Layout } from '@/components/layout';
import { getProduct } from '@/models/product.server';
import type {
  LoaderFunctionArgs,
  MetaFunction,
} from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export const meta: MetaFunction = () => {
  return [
    { title: ' Detail Product' },
    { name: 'description', content: 'Detail Product' },
  ];
};

export const loader = async ({
  request,
  params,
}: LoaderFunctionArgs) => {
  if (!params.slug) {
    throw new Error('Missing slug');
  }

  const product = await getProduct(params.slug);

  if (!product) {
    throw new Error('Product not found');
  }

  return json({ product });
};

export default function ProductRoute() {
  const { product } = useLoaderData<typeof loader>();

  return (
    <Layout>
      <div>
        <h1>{product.name}</h1>
        <img src={product.imageURL} alt={product.name} />
        <p>{product.description}</p>
        <p>Rp {product.price}</p>
      </div>
    </Layout>
  );
}
