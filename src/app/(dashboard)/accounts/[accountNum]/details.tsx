import { Icon } from '@/components/icon';

export function Details({ children }: { children: React.ReactNode }) {
  return (
    <details className="rounded bg-white shadow shadow-blue-lighter [&_summary]:open:border-b">
      {children}
    </details>
  );
}

export function Summary({ children }: { children: React.ReactNode }) {
  return (
    <summary className="flex h-16 cursor-pointer list-none items-center justify-between border-[#D9D9D9] px-12 text-xl font-bold">
      {children}
      <Icon name="chevron-right" className="h-4 w-4" />
    </summary>
  );
}

export function DetailsContent({ children }: { children: React.ReactNode }) {
  return <div className="p-12">{children}</div>;
}
