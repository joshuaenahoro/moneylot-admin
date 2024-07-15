'use client';

import { ColumnDef } from '@tanstack/react-table';
import { Badge } from '@/components/badge';
import Image from 'next/image';

export type BillPayments = {
  description: string;
  provider: string;
  transactionId: number;
  amount: number;
  date: string;
  status: 'Pending' | 'Success' | 'Failed';
};

export const columns: ColumnDef<BillPayments>[] = [
  {
    accessorKey: 'description',
    header: 'Description',
    cell: ({ row }) => {
      const description = row.getValue('provider') as string;
      let logoURL = '';
      if (description === 'DSTV') {
        logoURL = '/logos/dstv.png';
      } else if (description === 'JAMB') {
        logoURL = '/logos/jamb.png';
      } else if (description === 'nTel') {
        logoURL = '/logos/ntel.png';
      } else if (description === 'Bet9ja') {
        logoURL = '/logos/bet9ja.png';
      } else if (description === '1XBet') {
        logoURL = '/logos/1xbet.png';
      } else if (description === 'Spectranet') {
        logoURL = '/logos/spectranet.png';
      }

      return (
        <div className="flex items-center gap-4 text-[#232323]">
          <Image src={logoURL} width={30} height={30} alt="" />
          {row.getValue('description')}
        </div>
      );
    },
  },
  {
    accessorKey: 'provider',
    header: 'Provider',
  },
  {
    accessorKey: 'transactionId',
    header: 'Transaction ID',
  },
  {
    accessorKey: 'amount',
    header: 'Amount',
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('amount'));
      const formatted = new Intl.NumberFormat('en-NG', {
        style: 'currency',
        currency: 'NGN',
      }).format(amount);

      return formatted;
    },
  },
  {
    accessorKey: 'date',
    header: 'Date',
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
