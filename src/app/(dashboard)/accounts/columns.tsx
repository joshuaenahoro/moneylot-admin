'use client';

import { Badge } from '@/components/badge';
import { Icon } from '@/components/icon';
import { ColumnDef } from '@tanstack/react-table';
import { useRouter } from 'next/navigation';

export type Accounts = {
  customerID: number;
  customerName: string;
  accountNum: number;
  phoneNum: string;
  registered: string;
  status: 'Active' | 'Blocked';
  kycLevel: 1 | 2 | 3;
};

export const columns: ColumnDef<Accounts>[] = [
  {
    accessorKey: 'customerID',
    header: ({ column }) => {
      return (
        <button
          className="flex gap-2 text-left"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Customer ID
          <Icon name="arrows-up-down" className="h-4 w-4" />
        </button>
      );
    },
  },
  {
    accessorKey: 'customerName',
    header: ({ column }) => {
      return (
        <button
          className="flex gap-2 text-left"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Customer name
          <Icon name="arrows-up-down" className="h-4 w-4" />
        </button>
      );
    },
  },
  {
    accessorKey: 'accountNum',
    header: ({ column }) => {
      return (
        <button
          className="flex gap-2 text-left"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Account no.
          <Icon name="arrows-up-down" className="h-4 w-4" />
        </button>
      );
    },
  },
  {
    accessorKey: 'phoneNum',
    header: 'Phone no.',
  },
  {
    accessorKey: 'registered',
    header: ({ column }) => {
      return (
        <button
          className="flex gap-2"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Registered
          <Icon name="arrows-up-down" className="h-4 w-4" />
        </button>
      );
    },
  },
  {
    accessorKey: 'status',
    header: ({ column }) => {
      return (
        <button
          className="flex gap-2"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Status
          <Icon name="arrows-up-down" className="h-4 w-4" />
        </button>
      );
    },
    cell: ({ row }) => (
      <Badge
        variant={row.getValue('status') === 'Active' ? 'green' : 'default'}
        hasBullet
      >
        {row.getValue('status')}
      </Badge>
    ),
  },
  {
    accessorKey: 'kycLevel',
    header: ({ column }) => {
      return (
        <button
          className="flex gap-2 text-left"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          KYC Level
          <Icon name="arrows-up-down" className="h-4 w-4" />
        </button>
      );
    },
    cell: ({ row }) => (
      <Badge variant="purple">{`Level ${row.getValue('kycLevel')}`}</Badge>
    ),
  },
  {
    id: 'action',
    cell: () => {
      const router = useRouter();
      return (
        <button onClick={() => router.push('/accounts/100023345')}>
          <span className="sr-only">Account details</span>
          <Icon name="chevron-right" className="h-4 w-4" />
        </button>
      );
    },
  },
];
