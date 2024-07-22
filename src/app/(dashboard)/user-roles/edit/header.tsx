import { BackButton } from '@/components/back-button';
import { PageHeader } from '@/components/page';

export function Header() {
  return (
    <header>
      <BackButton />
      <div className="h-8" />
      <PageHeader heading="Edit user role" variant="secondary" />
    </header>
  );
}
