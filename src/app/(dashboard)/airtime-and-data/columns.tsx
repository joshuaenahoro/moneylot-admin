'use client';

import { ColumnDef } from '@tanstack/react-table';
import { Badge } from '@/components/badge';
import Image from 'next/image';

export type AirtimeAndData = {
  description: string;
  phoneNum: string;
  transactionId: number;
  amount: number;
  date: string;
  status: 'Pending' | 'Success' | 'Failed';
};

export const columns: ColumnDef<AirtimeAndData>[] = [
  {
    accessorKey: 'description',
    header: 'Description',
    cell: ({ row }) => {
      const description = row.getValue('description') as string;
      let logoURL = '';
      if (description.startsWith('MTN')) {
        logoURL = '/logos/mtn.png';
      } else if (description.startsWith('Airtel')) {
        logoURL = '/logos/airtel.png';
      } else if (description.startsWith('Glo')) {
        logoURL = '/logos/glo.png';
      } else if (description.startsWith('9mobile')) {
        logoURL = '/logos/9mobile.png';
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
    accessorKey: 'phoneNum',
    header: 'Phone no.',
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
