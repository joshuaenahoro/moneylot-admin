'use client';

import { ColumnDef } from '@tanstack/react-table';
import { Badge } from '@/components/badge';
import Image from 'next/image';
import { formatMoney } from '@/utils';

export type Transactions = {
  description: string;
  from: string;
  transactionId: number;
  amount: number;
  date: string;
  status: 'Pending' | 'Success' | 'Failed';
};

export const columns: ColumnDef<Transactions>[] = [
  {
    accessorKey: 'description',
    header: 'Description',
    cell: ({ row }) => {
      const description = row.getValue('description') as string;
      let logoURL = '';
      if (description.startsWith('Transfer')) {
        logoURL = '/svgs/transfer.svg';
      } else if (description.startsWith('Airtime')) {
        logoURL = '/svgs/airtime.svg';
      } else if (description.startsWith('Data')) {
        logoURL = '/svgs/data.svg';
      }

      return (
        <div className="flex items-center gap-4 text-[#232323]">
          <Image src={logoURL} width={30} height={30} alt="" />
          {description}
        </div>
      );
    },
  },
  {
    accessorKey: 'from',
    header: 'From',
    cell: ({ row }) => (
      <div className="text-[#232323]">{row.getValue('from')}</div>
    ),
  },
  {
    accessorKey: 'transactionId',
    header: 'Transaction ID',
    cell: ({ row }) => (
      <div className="text-[#101828]">{row.getValue('transactionId')}</div>
    ),
  },
  {
    accessorKey: 'amount',
    header: 'Amount',
    cell: ({ row }) => (
      <div className="font-medium text-[#475467]">
        {formatMoney(row.getValue('amount'))}
      </div>
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
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => (
      <Badge
        variant={
          row.getValue('status') == 'Success'
            ? 'green'
            : row.getValue('status') === 'Failed'
              ? 'red'
              : row.getValue('status') === 'Pending'
                ? 'yellow'
                : 'purple'
        }
        hasBullet
      >
        {row.getValue('status')}
      </Badge>
    ),
  },
];
