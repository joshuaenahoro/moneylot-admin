'use client';

import { ColumnDef } from '@tanstack/react-table';
import { Checkbox } from '@/components/checkbox';

export type Rates = {
  amount: {
    min: number;
    max: number;
  };
  rates: {
    rate: number;
    days: number;
  }[];
};

export const columns: ColumnDef<Rates>[] = [
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
    id: 'amount',
    header: 'Amount (min-max)',
    cell: ({ row }) => {
      return <div>{row.getValue('amount')}</div>;
    },
  },
];
