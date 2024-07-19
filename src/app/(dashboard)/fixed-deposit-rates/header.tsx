import { buttonVariants } from '@/components/button';
import { Icon } from '@/components/icon';
import { PageHeaderWithActionItem } from '@/components/page';
import Link from 'next/link';

export function Header() {
  return (
    <PageHeaderWithActionItem heading="Fixed Deposit Rates">
      <Link href="/fixed-deposit-rates/add" className={buttonVariants()}>
        <Icon name="plus" className="mr-2 h-6 w-6" />
        Add rate
      </Link>
    </PageHeaderWithActionItem>
  );
}
