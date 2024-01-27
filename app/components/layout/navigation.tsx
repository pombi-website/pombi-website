import { Link } from '@remix-run/react';

export function Header() {
  return (
    <>
      <header>
        <Link to={`/`}>
          <span>
            <img
              src="/assets/logo-pombi.png"
              alt="logo-pombi"
              className="w-24"
            />
          </span>
        </Link>
      </header>
    </>
  );
}
