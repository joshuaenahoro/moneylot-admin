'use client';

import { Icon } from '@/components/icon';
import { Loading } from '@/components/loading';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/tooltip';
import { ColumnDef } from '@tanstack/react-table';
import Link from 'next/link';
import { useState } from 'react';
import { toast } from 'sonner';

export type AdminRoles = {
  id: string;
  user: {
    name: string;
    email: string;
  };
  accountNum: number;
  role: string;
  assignmentDatetime: string;
};

export const columns: ColumnDef<AdminRoles>[] = [
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
    accessorKey: 'user',
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
    cell: ({ row }) => {
      const user: { name: string; email: string } = row.getValue('user');
      return (
        <div>
          <div className="text-[#232323]">{user.name}</div>
          <div className="text-xs text-dark-50">{user.email}</div>
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
    cell: ({ row }) => (
      <div className="text-[#101828]">{row.getValue('accountNum')}</div>
    ),
  },
  {
    accessorKey: 'role',
    header: 'User role',
    cell: ({ row }) => (
      <div className="text-[#475467]">{row.getValue('role')}</div>
    ),
  },
  {
    accessorKey: 'assignmentDatetime',
    header: ({ column }) => {
      return (
        <button
          className="flex gap-2 text-left"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Assignment date & time
          <Icon name="arrows-up-down" className="h-4 w-4" />
        </button>
      );
    },
    cell: ({ row }) => (
      <div className="text-[#101828]">{row.getValue('assignmentDatetime')}</div>
    ),
  },
  {
    id: 'actions',
    header: 'Actions',
    cell: () => {
      const [isActionRunning, setIsActionRunning] = useState(false);

      function handleArchive() {
        setIsActionRunning(true);
        setTimeout(() => {
          setIsActionRunning(false);
          toast.success('Admin archived');
        }, 1000);
      }

      function handleRefresh() {
        setIsActionRunning(true);
        setTimeout(() => {
          setIsActionRunning(false);
          toast.success('Login refreshed');
        }, 1000);
      }

      return (
        <div className="flex gap-9">
          {isActionRunning && <Loading />}
          <Tooltip>
            <TooltipTrigger asChild>
              <Link href="/admin-role-management/edit">
                <span className="sr-only">Edit admin role</span>
                <Icon name="edit" className="h-6 w-6 text-[#5371FF]" />
              </Link>
            </TooltipTrigger>
            <TooltipContent>Edit admin role</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger onClick={handleArchive}>
              <Icon name="archive" className="h-6 w-6 text-[#5371FF]" />
            </TooltipTrigger>
            <TooltipContent>Archive</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger onClick={handleRefresh}>
              <Icon name="replay" className="h-6 w-6 text-[#5371FF]" />
            </TooltipTrigger>
            <TooltipContent>Refresh login</TooltipContent>
          </Tooltip>
        </div>
      );
    },
  },
];
