'use client';

import { Icon } from '@/components/icon';
import { ColumnDef } from '@tanstack/react-table';
import { Checkbox } from '@/components/checkbox';
import Image from 'next/image';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/tooltip';
import Link from 'next/link';

export type Payment = {
  name: string;
  position: number;
  minAmount: number;
  maxAmount: number;
  interest: string;
  minDuration: string;
  maxDuration: string;
  image: string;
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
      return (
        <div className="max-w-[100px] font-medium text-[#101828]">
          {row.getValue('name')}
        </div>
      );
    },
  },
  {
    accessorKey: 'position',
    header: 'Position',
  },
  {
    accessorKey: 'minAmount',
    header: () => <div className="">Min. Amount</div>,
    cell: ({ row }) => {
      const minAmount = parseFloat(row.getValue('minAmount'));
      const formatted = new Intl.NumberFormat('en-NG', {
        style: 'currency',
        currency: 'NGN',
      }).format(minAmount);

      return <div className="text-[#475467]">{formatted}</div>;
    },
  },
  {
    accessorKey: 'maxAmount',
    header: () => <div className="">Max. Amount</div>,
    cell: ({ row }) => {
      const maxAmount = parseFloat(row.getValue('maxAmount'));
      const formatted = new Intl.NumberFormat('en-NG', {
        style: 'currency',
        currency: 'NGN',
      }).format(maxAmount);

      return <div className="text-[#475467]">{formatted}</div>;
    },
  },
  {
    accessorKey: 'interest',
    header: 'Interest',
    cell: ({ row }) => {
      return <div className="text-[#475467]">{row.getValue('interest')}</div>;
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
          Min. Duration
          <Icon name="arrows-up-down" className="h-4 w-4" />
        </button>
      );
    },
    cell: ({ row }) => {
      return (
        <div className="text-[#475467]">{row.getValue('minDuration')}</div>
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
          Max. Duration
          <Icon name="arrows-up-down" className="h-4 w-4" />
        </button>
      );
    },
    cell: ({ row }) => {
      return (
        <div className="text-[#475467]">{row.getValue('maxDuration')}</div>
      );
    },
  },
  {
    accessorKey: 'image',
    cell: ({ row }) => (
      <Image
        src={row.getValue('image')}
        width={48}
        height={48}
        alt=""
        className="h-auto w-auto"
      />
    ),
  },
  {
    id: 'action',
    cell: () => {
      return (
        <Tooltip>
          <TooltipTrigger asChild>
            <Link href="/accounts/xy">
              <Icon name="edit" className="h-4 w-4 text-[#5371FF]" />
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>Edit target</p>
          </TooltipContent>
        </Tooltip>
      );
    },
  },
];
