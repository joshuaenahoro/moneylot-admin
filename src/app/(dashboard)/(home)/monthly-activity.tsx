import { Icon } from '@/components/icon';
import { IconName } from '@/types/icon';
import { twJoin } from 'tailwind-merge';

export function MonthlyActivity() {
  return (
    <>
      <h2 className="mb-4 pl-6 font-medium text-[#343C6A]">Monthly Activity</h2>
      <ul className="flex justify-between gap-8">
        <Item label="Total Transfers" value={750} />
        <Item label="Airtime/Data Purchases" value={812} />
        <Item label="Bills Paid" value={67} />
        <Item label="Active Savings" value={81} />
      </ul>
    </>
  );
}

function Item({ label, value }: { label: string; value: number }) {
  let icon = '' as IconName;

  switch (label) {
    case 'Total Transfers':
      icon = 'reciept';
      break;
    case 'Airtime/Data Purchases':
      icon = 'signal';
      break;
    case 'Bills Paid':
      icon = 'hand-coins';
      break;
    case 'Active Savings':
      icon = 'piggy-bank-2';
      break;
  }
  return (
    <li className="flex w-full items-center gap-3 rounded-2xl bg-white px-6 py-4 shadow">
      <div
        className={twJoin(
          'h-[60px] w-[60px] shrink-0 content-center rounded-full',
          label === 'Total Transfers' && 'bg-blue-light/20 text-blue-light',
          label === 'Airtime/Data Purchases' && 'bg-[#FFEEDE] text-[#FF8210]',
          label === 'Bills Paid' && 'bg-red/20 text-red',
          label === 'Active Savings' && 'bg-[#DCFAF8] text-[#009A90]',
        )}
      >
        <Icon name={icon} className="mx-auto h-6 w-6" />
      </div>

      <div>
        <h3 className="max-w-16 text-xs font-medium leading-4 text-[#718EBF]">
          {label}
        </h3>
        <p className="text-lg font-bold">{value}</p>
      </div>
    </li>
  );
}
