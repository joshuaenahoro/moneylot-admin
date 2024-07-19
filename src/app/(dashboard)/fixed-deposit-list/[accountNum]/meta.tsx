import { Badge } from '@/components/badge';
import { formatMoney } from '@/utils';

export function Meta() {
  return (
    <section className="mb-8 border-b border-[#E4E7EC] pb-5">
      <div className="mb-8 flex justify-end gap-12 text-xl text-blue-primary">
        <div>
          <span className="text-semibold">Deposit: </span>
          <span className="font-bold">{formatMoney(10000000)}</span>
        </div>
        <div>
          <span className="text-semibold">Interest gained: </span>
          <span className="font-bold">{formatMoney(40000)}</span>
        </div>
      </div>

      <Badge variant="green" hasBullet>
        Active
      </Badge>

      <div className="h-4" />

      <div className="flex justify-between">
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
          <span className="font-semibold text-[#0B0E17]">365 days</span>
        </div>
        <div className="flex flex-col-reverse gap-1">
          <span className="text-xs text-[#9095A1]">Interest </span>
          <span className="font-semibold text-[#0B0E17]">16%</span>
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
        <div className="flex flex-col-reverse gap-1">
          <span className="text-xs text-[#9095A1]">End date </span>
          <span className="font-semibold text-[#0B0E17]">12/8/24</span>
        </div>
      </div>
    </section>
  );
}
