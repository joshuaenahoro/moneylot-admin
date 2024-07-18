import { Button } from '@/components/button';
import { BackButton } from '@/components/back-button';
import { Icon } from '@/components/icon';
import { formatMoney } from '@/utils';
import { Badge } from '@/components/badge';

export function Header() {
  return (
    <header className="overflow-hidden rounded-lg bg-white">
      <div className="mb-2 flex justify-between">
        <BackButton />
        <Button variant="destructive">
          <Icon name="close" className="mr-2 h-5 w-5" />
          Cancel savings
        </Button>
      </div>

      <div className="mb-8 flex justify-center gap-12 text-xl text-blue-primary">
        <div>
          <span className="text-semibold">Balance: </span>
          <span className="font-bold">{formatMoney(680000.25)}</span>
        </div>
        <div>
          <span className="text-semibold">Interest: </span>
          <span className="font-bold">{formatMoney(400000)}</span>
        </div>
      </div>

      <div>
        <div className="mb-12 flex items-center gap-8">
          <h1 className="text-lg font-semibold">Rent</h1>
          <Badge variant="green" hasBullet>
            Actively running
          </Badge>
        </div>

        <div className="flex gap-20 border-b border-[#E4E7EC] pb-5">
          <div className="flex flex-col-reverse gap-1">
            <span className="text-xs text-[#9095A1]">Name </span>
            <span className="font-semibold text-[#0B0E17]">Jane Doe</span>
          </div>
          <div className="flex flex-col-reverse gap-1">
            <span className="text-xs text-[#9095A1]">Account number </span>
            <span className="font-semibold text-[#0B0E17]">100023345</span>
          </div>
          <div className="flex flex-col-reverse gap-1">
            <span className="text-xs text-[#9095A1]">Savings amount </span>
            <span className="font-semibold text-[#0B0E17]">
              {formatMoney(1000000)}
            </span>
          </div>
          <div className="flex flex-col-reverse gap-1">
            <span className="text-xs text-[#9095A1]">Tenure </span>
            <span className="font-semibold text-[#0B0E17]">6 months</span>
          </div>
          <div className="flex flex-col-reverse gap-1">
            <span className="text-xs text-[#9095A1]">Potential interest </span>
            <span className="font-semibold text-[#0B0E17]">
              {formatMoney(10000)} (10%)
            </span>
          </div>
          <div className="flex flex-col-reverse gap-1">
            <span className="text-xs text-[#9095A1]">Start date </span>
            <span className="font-semibold text-[#0B0E17]">12/2/24</span>
          </div>
        </div>
      </div>
    </header>
  );
}
