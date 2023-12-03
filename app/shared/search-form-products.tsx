import { Input } from '@/components/ui/input';
import { Form, useSearchParams } from '@remix-run/react';
import { Search } from 'react-feather';

export function FormSearchProducts({
  action = '/search',
  placeholder = 'Cari produk...',
}: {
  action?: string;
  placeholder?: string;
}) {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') ?? '';

  return (
    <Form method="GET" action={action} className="w-full">
      <fieldset className="group relative flex items-center gap-1">
        <label htmlFor="search" hidden />
        <Input
          id="searchProducts"
          type="search"
          name="q"
          placeholder={placeholder}
          defaultValue={query}
          autoComplete="off"
          className="block px-3 ps-12 w-full rounded-sm max-w-xl bg-slate-400 focus:bg-slate-100 focus:text-black transition duration-200"
        />
        <span className="pointer-events-non absolute flex ps-3">
          <Search strokeWidth={1} size={32} color="black" />
        </span>
      </fieldset>
    </Form>
  );
}
