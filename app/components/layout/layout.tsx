import { Footer } from './footer';
import { Header } from './navigation';

interface Props {
  children: React.ReactNode;
}

export function Layout({ children }: Props) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
