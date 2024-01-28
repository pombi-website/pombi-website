import { FormSearchProducts } from '@/shared/search-form-products';
import { Link, NavLink } from '@remix-run/react';

const navPublicItems = [
  { to: '/', text: 'Home' },
  {
    to: '/products',
    text: 'Products',
  },
];

export function HeaderNavigation() {
  return (
    <header className="flex justify-between p-4">
      <div>
        <FormSearchProducts />
      </div>
      <div>
        <Link to={`/`}>
          <span>
            <img
              src="/images/logo-pombi.png"
              alt="logo-pombi"
              className="w-16"
            />
          </span>
        </Link>
      </div>
      <nav>
        <ul className="flex gap-4">
          {navPublicItems.map((navPublicItem) => {
            return (
              <li key={navPublicItem.to}>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? 'text-pink-400 hover:text-black'
                      : 'text-black hover:text-pink-400'
                  }
                  to={navPublicItem.to}
                >
                  {navPublicItem.text}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
