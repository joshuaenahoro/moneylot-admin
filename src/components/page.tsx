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
  subheading,
  children,
}: {
  heading: string;
  subheading: string;
  children: React.ReactNode;
}) {
  return (
    <header className="mb-8 flex justify-between border-b border-[#E4E7EC] pb-8">
      <div>
        <h1 className="text-lg font-semibold">{heading}</h1>
        <p className="text-sm text-[#475467]">{subheading}</p>
      </div>
      {children}
    </header>
  );
}
