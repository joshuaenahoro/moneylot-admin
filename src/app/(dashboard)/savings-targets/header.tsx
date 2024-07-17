import { Button } from '@/components/button';
import { Icon } from '@/components/icon';
import { PageHeaderWithActionItem } from '@/components/page';

export function Header() {
  return (
    <PageHeaderWithActionItem heading="Targets">
      <Button variant="destructive">Delete target(s)</Button>
      <Button>
        <Icon name="plus" className="mr-2 h-4 w-4" />
        Add target
      </Button>
    </PageHeaderWithActionItem>
  );
}
