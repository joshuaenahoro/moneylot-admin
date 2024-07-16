'use client';

import { Badge, BadgeProps } from '@/components/badge';
import { Icon } from '@/components/icon';
import { ColumnDef } from '@tanstack/react-table';
import { useRouter } from 'next/navigation';

export type Cards = {
  customer: {
    name: string;
    email: string;
  };
  accountNum: number;
  cardType: string;
  requestDate: string;
  status:
    | 'Requested'
    | 'Processing'
    | 'In production'
    | 'Quality check'
    | 'Dispatched'
    | 'Rejected'
    | 'In transit'
    | 'Activated'
    | 'Delivered to bank'
    | 'Delivery failed'
    | 'Activation pending';
};

export const columns: ColumnDef<Cards>[] = [
  {
    accessorKey: 'customer',
    header: ({ column }) => {
      return (
        <button
          className="flex gap-2 text-left"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Customer
          <Icon name="arrows-up-down" className="h-4 w-4" />
        </button>
      );
    },
    cell: ({ row }) => {
      const customer: { name: string; email: string } =
        row.getValue('customer');

      return (
        <div>
          <div>{customer.name}</div>
          <div className="text-xs text-dark-50">{customer.email}</div>
        </div>
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
          Account number
          <Icon name="arrows-up-down" className="h-4 w-4" />
        </button>
      );
    },
  },
  {
    accessorKey: 'cardType',
    header: ({ column }) => {
      return (
        <button
          className="flex gap-2 text-left"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Card type
          <Icon name="arrows-up-down" className="h-4 w-4" />
        </button>
      );
    },
  },
  {
    accessorKey: 'requestDate',
    header: ({ column }) => {
      return (
        <button
          className="flex gap-2 text-left"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Request date
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
        case 'Requested':
          variant = 'purple';
          break;
        case 'Activated':
          variant = 'green';
          break;
        case 'Activation pending':
          variant = 'orange';
          break;
        case 'Delivered to bank':
          variant = 'purple';
          break;
        case 'Rejected':
          variant = 'red';
          break;
        case 'Delivery failed':
          variant = 'red';
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
        <button onClick={() => router.push('/cards/xy')}>
          <span className="sr-only">Account details</span>
          <Icon name="chevron-right" className="h-4 w-4" />
        </button>
      );
    },
  },
];
