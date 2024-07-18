import { Button, buttonVariants } from '@/components/button';
import { Icon } from '@/components/icon';
import { PageHeaderWithActionItem } from '@/components/page';
import Link from 'next/link';

export function Header() {
  return (
    <PageHeaderWithActionItem heading="Targets">
      <Button variant="destructive">Delete target(s)</Button>
      <Link href="/savings-targets/add" className={buttonVariants()}>
        <Icon name="plus" className="mr-2 h-4 w-4" />
        Add target
      </Link>
    </PageHeaderWithActionItem>
  );
}
