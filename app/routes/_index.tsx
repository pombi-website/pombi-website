import type { MetaFunction } from '@remix-run/node';
import { Link } from '@remix-run/react';

export const meta: MetaFunction = () => {
  return [
    { title: 'Pombi Baju Anak' },
    { name: 'description', content: 'Pombi Baju Anak Indonesia' },
  ];
};

export default function IndexRoute() {
  return (
    <main>
      {/* Header */}

      {/* Welcome Section */}

      {/* Why Choose Us */}

      {/* Products */}
      <Link
        to="/products"
        className="mx-auto mt-16 text-center text-blue-600 underline"
      >
        Lihat Semua Produk
      </Link>

      {/* Footer */}
    </main>
  );
}
