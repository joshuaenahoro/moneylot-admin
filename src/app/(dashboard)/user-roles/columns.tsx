'use client';

import { Icon } from '@/components/icon';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/tooltip';
import { ColumnDef } from '@tanstack/react-table';
import Link from 'next/link';

export type UserRoles = {
  id: string;
  role: string;
  description: string;
  entryDatetime: string;
};

export const columns: ColumnDef<UserRoles>[] = [
  {
    accessorKey: 'id',
    header: ({ column }) => {
      return (
        <button
          className="flex gap-2 text-left"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          ID
          <Icon name="arrows-up-down" className="h-4 w-4" />
        </button>
      );
    },
    cell: ({ row }) => (
      <div className="text-[#101828]">{row.getValue('id')}</div>
    ),
  },
  {
    accessorKey: 'role',
    header: ({ column }) => {
      return (
        <button
          className="flex gap-2 text-left"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Role
          <Icon name="arrows-up-down" className="h-4 w-4" />
        </button>
      );
    },
    cell: ({ row }) => (
      <div className="text-[#101828]">{row.getValue('role')}</div>
    ),
  },
  {
    accessorKey: 'description',
    header: ({ column }) => {
      return (
        <button
          className="flex gap-2 text-left"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Description
          <Icon name="arrows-up-down" className="h-4 w-4" />
        </button>
      );
    },
    cell: ({ row }) => (
      <div className="text-[#101828]">{row.getValue('description')}</div>
    ),
  },
  {
    accessorKey: 'entryDatetime',
    header: ({ column }) => {
      return (
        <button
          className="flex gap-2 text-left"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Entry date & time
          <Icon name="arrows-up-down" className="h-4 w-4" />
        </button>
      );
    },
    cell: ({ row }) => (
      <div className="text-[#101828]">{row.getValue('entryDatetime')}</div>
    ),
  },
  {
    id: 'action',
    cell: () => {
      return (
        <Tooltip>
          <TooltipTrigger asChild>
            <Link href="/user-roles/edit">
              <span className="sr-only">User role details</span>
              <Icon name="edit" className="h-4 w-4 text-[#5371FF]" />
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>Edit user role</p>
          </TooltipContent>
        </Tooltip>
      );
    },
  },
];
