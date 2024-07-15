'use client';

import { Icon } from '@/components/icon';
import { ColumnDef } from '@tanstack/react-table';
import { Checkbox } from '@/components/checkbox';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  name: string;
  pagePos: number;
  minAmount: number;
  maxAmount: number;
  minDuration: string;
  maxDuration: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'name',
    header: 'Target name',
    cell: ({ row }) => {
      return <div className="font-medium">{row.getValue('name')}</div>;
    },
  },
  {
    accessorKey: 'pagePos',
    header: 'Page position',
  },
  {
    accessorKey: 'minAmount',
    header: () => <div className="">Minimum Amount</div>,
    cell: ({ row }) => {
      const minAmount = parseFloat(row.getValue('minAmount'));
      const formatted = new Intl.NumberFormat('en-NG', {
        style: 'currency',
        currency: 'NGN',
      }).format(minAmount);

      return <div className="font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: 'maxAmount',
    header: () => <div className="">Maximum Amount</div>,
    cell: ({ row }) => {
      const maxAmount = parseFloat(row.getValue('maxAmount'));
      const formatted = new Intl.NumberFormat('en-NG', {
        style: 'currency',
        currency: 'NGN',
      }).format(maxAmount);

      return <div className="font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: 'minDuration',
    header: ({ column }) => {
      return (
        <button
          className="flex gap-2"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Minimum Duration
          <Icon name="arrows-up-down" className="h-4 w-4" />
        </button>
      );
    },
  },
  {
    accessorKey: 'maxDuration',
    header: ({ column }) => {
      return (
        <button
          className="flex gap-2"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Maximum Duration
          <Icon name="arrows-up-down" className="h-4 w-4" />
        </button>
      );
    },
  },
];
