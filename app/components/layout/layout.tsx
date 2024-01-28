import { HeaderNavigation } from './header-navigation';
import { Footer } from './site-footer';

interface Props {
  children: React.ReactNode;
}

export function Layout({ children }: Props) {
  return (
    <div className="flex flex-col w-full gap-8 min-h-screen">
      <HeaderNavigation />
      <main className="px-4 flex flex-col gap-20">{children}</main>
      <Footer />
    </div>
  );
}
