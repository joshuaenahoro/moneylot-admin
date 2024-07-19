'use client';

import { Badge, BadgeProps } from '@/components/badge';
import { Icon } from '@/components/icon';
import { formatMoney } from '@/utils';
import { ColumnDef } from '@tanstack/react-table';
import { useRouter } from 'next/navigation';

export type DepositList = {
  accountNum: number;
  name: string;
  amountInvested: number;
  tenure: number;
  interest: number;
  date: string;
  finalAmount: number;
  status: 'Active' | 'Cancelled' | 'Defaulted';
};

export const columns: ColumnDef<DepositList>[] = [
  {
    accessorKey: 'accountNum',
    header: 'Account no.',
    cell: ({ row }) => (
      <div className="text-[#475467]">{row.getValue('accountNum')}</div>
    ),
  },
  {
    accessorKey: 'name',
    header: 'Name',
    cell: ({ row }) => (
      <div className="text-[#475467]">{row.getValue('name')}</div>
    ),
  },
  {
    accessorKey: 'amountInvested',
    header: 'Amount invested',
    cell: ({ row }) => (
      <div className="text-[#475467]">
        {formatMoney(row.getValue('amountInvested'))}
      </div>
    ),
  },
  {
    accessorKey: 'tenure',
    header: ({ column }) => {
      return (
        <button
          className="flex gap-2 text-left"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Tenure
          <Icon name="arrows-up-down" className="h-4 w-4" />
        </button>
      );
    },
    cell: ({ row }) => (
      <div className="text-[#475467]">{row.getValue('tenure')} days</div>
    ),
  },
  {
    accessorKey: 'interest',
    header: 'Interest',
    cell: ({ row }) => (
      <div className="text-[#475467]">{`${row.getValue('interest')}%`}</div>
    ),
  },
  {
    accessorKey: 'date',
    header: 'Date',
    cell: ({ row }) => (
      <div className="text-[#475467]">{row.getValue('date')}</div>
    ),
  },
  {
    accessorKey: 'finalAmount',
    header: 'Final amount',
    cell: ({ row }) => (
      <div className="text-[#475467]">
        {formatMoney(row.getValue('finalAmount'))}
      </div>
    ),
  },
  {
    accessorKey: 'status',
    header: ({ column }) => {
      return (
        <button
          className="flex gap-2 text-left"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Status
          <Icon name="arrows-up-down" className="h-4 w-4" />
        </button>
      );
    },
    cell: ({ row }) => {
      let variant = 'default' as BadgeProps['variant'];
      switch (row.getValue('status')) {
        case 'Active':
          variant = 'green';
          break;
        case 'Cancelled':
          variant = 'red';
          break;
        case 'Defaulted':
          variant = 'orange';
          break;
      }
      return (
        <Badge variant={variant} hasBullet>
          {row.getValue('status')}
        </Badge>
      );
    },
  },
  {
    id: 'action',
    cell: () => {
      const router = useRouter();
      return (
        <button onClick={() => router.push('/fixed-deposit-list/1093992823')}>
          <span className="sr-only">Deposit details</span>
          <Icon name="chevron-right" className="h-4 w-4" />
        </button>
      );
    },
  },
];
