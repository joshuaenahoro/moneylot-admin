import { BackButton } from '@/components/back-button';
import { Badge } from '@/components/badge';
import { Button } from '@/components/button';

export function Header() {
  return (
    <header className="mb-5 border-b border-[#E4E7EC] pb-5">
      <div className="mb-8 flex justify-between">
        <BackButton />

        <div className="flex items-center gap-2">
          <Badge variant="green" hasBullet>
            Active
          </Badge>
          <Button variant="outline">Freeze card</Button>
          <Button variant="destructive">Block card</Button>
        </div>
      </div>

      <h1 className="text-lg font-semibold">Card info</h1>
    </header>
  );
}
