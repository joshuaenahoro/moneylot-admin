'use client';

import { ColumnDef } from '@tanstack/react-table';
import { Badge } from '@/components/badge';
import Image from 'next/image';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/dropdown';
import { Button } from '@/components/button';
import { Icon } from '@/components/icon';
import { toast } from 'sonner';

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
  {
    id: 'actions',
    cell: ({ row }) => {
      function handleCopyAccountNum() {
        toast.info('Account number copied');
      }

      function handleSomeAction() {
        toast.info('Action done');
      }

      function handleSomeOtherAction() {
        toast.info('Some other action done');
      }

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <Icon name="more" className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem onClick={handleCopyAccountNum}>
              Copy account number
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleSomeAction}>
              Do some action
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleSomeOtherAction}>
              Some other action
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
