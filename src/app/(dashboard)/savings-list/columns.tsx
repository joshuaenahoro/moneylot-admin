'use client';

import { Icon } from '@/components/icon';
import { ColumnDef } from '@tanstack/react-table';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/tooltip';
import Link from 'next/link';
import { Badge, BadgeProps } from '@/components/badge';

export type SavingsList = {
  accountNum: number;
  name: string;
  target: string;
  amount: number;
  tenure: string;
  interest: string;
  dateTimeStarted: string;
  status: 'Active' | 'Defaulted' | 'Cancelled';
};

export const columns: ColumnDef<SavingsList>[] = [
  {
    accessorKey: 'accountNum',
    header: 'Account number',
    cell: ({ row }) => (
      <div className="text-[#475467]">{row.getValue('accountNum')}</div>
    ),
  },
  {
    accessorKey: 'name',
    header: 'Name',
    cell: ({ row }) => (
      <div className="whitespace-nowrap text-[#475467]">
        {row.getValue('name')}
      </div>
    ),
  },
  {
    accessorKey: 'target',
    header: 'Target',
    cell: ({ row }) => (
      <div className="font-medium text-[#101828]">{row.getValue('target')}</div>
    ),
  },
  {
    accessorKey: 'amount',
    header: () => <div className="">Min. Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('amount'));
      const formatted = new Intl.NumberFormat('en-NG', {
        style: 'currency',
        currency: 'NGN',
      }).format(amount);

      return <div className="text-[#475467]">{formatted}</div>;
    },
  },
  {
    accessorKey: 'tenure',
    header: 'Tenure',
    cell: ({ row }) => (
      <div className="whitespace-nowrap text-[#475467]">
        {row.getValue('tenure')}
      </div>
    ),
  },
  {
    accessorKey: 'interest',
    header: 'Interest',
    cell: ({ row }) => (
      <div className="text-[#475467]">{row.getValue('interest')}</div>
    ),
  },
  {
    accessorKey: 'dateTimeStarted',
    header: 'Date and time started',
    cell: ({ row }) => (
      <div className="whitespace-nowrap text-[#475467]">
        {row.getValue('dateTimeStarted')}
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
        case 'Defaulted':
          variant = 'orange';
          break;
        case 'Cancelled':
          variant = 'red';
          break;
      }
      return (
        <Badge variant={variant} hasBullet>{`${row.getValue('status')}`}</Badge>
      );
    },
  },
  {
    id: 'action',
    cell: () => {
      return (
        <Tooltip>
          <TooltipTrigger asChild>
            <Link href="/accounts/xy">
              <Icon name="chevron-right" className="h-4 w-4" />
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>See target details</p>
          </TooltipContent>
        </Tooltip>
      );
    },
  },
];
