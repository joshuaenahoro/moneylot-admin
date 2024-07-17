export function PageWrapper({ children }: { children: React.ReactNode }) {
  return <div className="rounded-2xl bg-white p-8">{children}</div>;
}

export function PageHeader({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <header className="mb-8 flex flex-col items-center gap-8 border-b border-[#E4E7EC] pb-8">
      <h1 className="text-3xl font-[600] text-[#101828]">{heading}</h1>
      {children}
    </header>
  );
}

export function PageHeaderWithActionItem({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <header className="mb-8 flex items-center justify-between border-b border-[#E4E7EC] pb-8">
      <h1 className="text-lg font-semibold text-[#101828]">{heading}</h1>
      <div className="flex gap-4">{children}</div>
    </header>
  );
}
