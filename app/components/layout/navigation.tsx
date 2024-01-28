import { Link } from '@remix-run/react';

export function Header() {
  return (
    <>
      <header className="lg:px-20 flex items-center justify-between">
        <div>
          <Link to={`/`}>
            <span className="flex flex-row items-center gap-6">
              <img
                src="/images/logo-pombi.png"
                alt="logo-pombi"
                className="w-24"
              />
              <h1 className="font-heading font-bold text-xl text-pink-500">
                Pombi Baju Anak
              </h1>
            </span>
          </Link>
        </div>
        <div>
          <Link to={'/products'}>Produk Kami</Link>
        </div>
        <div>
          <Link to={'/'}>Akun</Link>
          <Link to={'/'}>Keranjang</Link>
        </div>
      </header>
    </>
  );
}
