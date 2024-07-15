import { cva, VariantProps } from 'class-variance-authority';
import { Icon } from './icon';

const badge = cva(
  'flex w-fit items-center gap-2 rounded-2xl p-2 text-xs font-medium',
  {
    variants: {
      variant: {
        default: 'bg-[#F2F4F7] text-[#344054]',
        yellow: 'bg-[#FFFAEB] text-[#B54708]',
        green: 'bg-[#ECFDF3] text-[#027A48]',
        red: 'bg-[#FEF3F2] text-[#B42318]',
        purple: 'bg-[#F9F5FF] text-[#6941C6]',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

interface BadgeProps extends VariantProps<typeof badge> {
  children: string;
  hasBullet?: boolean;
}

export function Badge({ variant, children, hasBullet = false }: BadgeProps) {
  return (
    <div className={badge({ variant })}>
      {hasBullet && <Icon name="dot" className="h-2 w-2" />}
      <span>{children}</span>
    </div>
  );
}
