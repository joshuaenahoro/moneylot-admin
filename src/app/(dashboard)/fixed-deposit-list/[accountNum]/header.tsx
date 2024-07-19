import { BackButton } from '@/components/back-button';
import { Button } from '@/components/button';

export function Header() {
  return (
    <header className="mb-12">
      <h1 className="sr-only">Fixed deposit</h1>
      <div className="flex justify-between">
        <BackButton />
        <div className="flex items-center gap-2">
          <Button variant="destructive">Liquidate deposit</Button>
          <Button>Pay customer</Button>
        </div>
      </div>
    </header>
  );
}
