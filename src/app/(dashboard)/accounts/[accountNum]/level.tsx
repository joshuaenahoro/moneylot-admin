import { Badge, BadgeProps } from '@/components/badge';
import { Button } from '@/components/button';
import { Icon } from '@/components/icon';

export function Level({
  number,
  status,
  onStatusChange,
  children,
}: {
  number: number;
  status: string;
  onStatusChange: (number: number, value: string) => void;
  children: React.ReactNode;
}) {
  let badgeVariant = 'default' as BadgeProps['variant'];

  switch (status) {
    case 'Accepted':
      badgeVariant = 'green';
      break;
    case 'Rejected':
      badgeVariant = 'red';
      break;
  }

  return (
    <details className="rounded-xl bg-white shadow shadow-blue-lighter [&_summary]:open:border-b">
      <summary className="flex h-16 cursor-pointer list-none items-center justify-between border-[#D9D9D9] px-10 text-xl font-bold marker:hidden">
        <span className="flex items-center gap-4">
          Level {number}{' '}
          <Badge variant={badgeVariant} hasBullet>
            {status}
          </Badge>
        </span>
        <Icon name="chevron-right" className="h-4 w-4" />
      </summary>
      <div className="p-10">
        {children}

        <div className="flex justify-end gap-4">
          <Button
            variant="success"
            onClick={() => onStatusChange(number, 'Accepted')}
            disabled={status === 'Accepted'}
          >
            Accept KYC
          </Button>
          <Button
            variant="outline-destructive"
            onClick={() => onStatusChange(number, 'Rejected')}
            disabled={status === 'Rejected'}
          >
            Reject KYC
          </Button>
        </div>
      </div>
    </details>
  );
}
