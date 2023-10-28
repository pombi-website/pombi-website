import type { LoaderFunctionArgs } from "@remix-run/node";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  return null;
};

export default function ProductsRoute() {
  return <div>Products</div>;
}

