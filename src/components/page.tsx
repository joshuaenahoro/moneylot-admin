import { cva, VariantProps } from 'class-variance-authority';
import { twJoin } from 'tailwind-merge';

export function PageWrapper({ children }: { children: React.ReactNode }) {
  return <div className="rounded-2xl bg-white p-8">{children}</div>;
}

const pageHeader = cva(
  'mb-8 flex flex-col gap-8 border-b border-[#E4E7EC] pb-8',
  {
    variants: {
      variant: {
        default: 'items-center',
        secondary: '',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

interface PageHeaderProps extends VariantProps<typeof pageHeader> {
  heading: string;
  children?: React.ReactNode;
}

export function PageHeader({
  variant = 'default',
  heading,
  children,
}: PageHeaderProps) {
  return (
    <header className={pageHeader({ variant })}>
      <h1
        className={twJoin(
          'font-semibold text-[#101828]',
          variant === 'default' && 'text-3xl',
          variant === 'secondary' && 'text-lg',
        )}
      >
        {heading}
      </h1>
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
