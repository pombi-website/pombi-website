import { HeaderNavigation } from './header-navigation';

interface Props {
  children: React.ReactNode;
}

export function Layout({ children }: Props) {
  return (
    <div className="flex flex-col w-full gap-8 min-h-screen">
      <HeaderNavigation />
      <main className="px-4 flex flex-col gap-20">{children}</main>
      <footer className="mt-8 text-center">
        <p className="text-sm text-gray-600">
          &copy; 2021 Pombi. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
