'use client';

import { Icon } from '@/components/icon';
import { ColumnDef } from '@tanstack/react-table';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/tooltip';
import Link from 'next/link';
import { Badge, BadgeProps } from '@/components/badge';

export type Support = {
  customer: string;
  ticketID: string;
  transactionID: string;
  datetime: string;
  type:
    | 'Transfer'
    | 'Airtime'
    | 'Data'
    | 'Education'
    | 'Internet services'
    | 'Betting';
  status: 'Requested' | 'Completed' | 'Processing' | 'Pending';
  admin: string;
};

export const columns: ColumnDef<Support>[] = [
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
    cell: ({ row }) => (
      <div className="text-[#232323]">{`${row.getValue('customer')}`}</div>
    ),
  },
  {
    accessorKey: 'ticketID',
    header: ({ column }) => {
      return (
        <button
          className="flex gap-2 text-left"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Ticket ID
          <Icon name="arrows-up-down" className="h-4 w-4" />
        </button>
      );
    },
    cell: ({ row }) => (
      <div className="text-[#232323]">{`${row.getValue('ticketID')}`}</div>
    ),
  },
  {
    accessorKey: 'transactionID',
    header: ({ column }) => {
      return (
        <button
          className="flex gap-2 text-left"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Transaction ID
          <Icon name="arrows-up-down" className="h-4 w-4" />
        </button>
      );
    },
    cell: ({ row }) => (
      <div className="text-[#232323]">{`${row.getValue('transactionID')}`}</div>
    ),
  },
  {
    accessorKey: 'datetime',
    header: ({ column }) => {
      return (
        <button
          className="flex gap-2 text-left"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Date and time
          <Icon name="arrows-up-down" className="h-4 w-4" />
        </button>
      );
    },
    cell: ({ row }) => (
      <div className="text-[#475467]">{`${row.getValue('datetime')}`}</div>
    ),
  },
  {
    accessorKey: 'type',
    header: ({ column }) => {
      return (
        <button
          className="flex gap-2 text-left"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Type
          <Icon name="arrows-up-down" className="h-4 w-4" />
        </button>
      );
    },
    cell: ({ row }) => (
      <div className="text-[#475467]">{`${row.getValue('type')}`}</div>
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
        case 'Requested':
          variant = 'purple';
          break;
        case 'Completed':
          variant = 'green';
          break;
        case 'Pending':
          variant = 'orange';
          break;
      }
      return (
        <Badge variant={variant} hasBullet>{`${row.getValue('status')}`}</Badge>
      );
    },
  },
  {
    accessorKey: 'admin',
    header: ({ column }) => {
      return (
        <button
          className="flex gap-2 text-left"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Admin
          <Icon name="arrows-up-down" className="h-4 w-4" />
        </button>
      );
    },
    cell: ({ row }) => (
      <div className="text-[#232323]">{`${row.getValue('admin')}`}</div>
    ),
  },
  {
    id: 'action',
    cell: () => {
      return (
        <Tooltip>
          <TooltipTrigger asChild>
            <Link href="/support/1093992823">
              <Icon name="chevron-right" className="h-4 w-4" />
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>See ticket details</p>
          </TooltipContent>
        </Tooltip>
      );
    },
  },
];
