'use client';

import { Icon } from '@/components/icon';
import { ColumnDef } from '@tanstack/react-table';
import { Badge, BadgeProps } from '@/components/badge';
import { formatMoney } from '@/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/dropdown';
import { Button } from '@/components/button';
import { toast } from 'sonner';

export type Saving = {
  month: string;
  amountDebited: number;
  interest: null | number;
  status: 'Defaulted' | 'Success';
};

export const columns: ColumnDef<Saving>[] = [
  {
    accessorKey: 'month',
    header: 'Month',
    cell: ({ row }) => (
      <div className="text-[#0B0E17]">{row.getValue('month')}</div>
    ),
  },
  {
    accessorKey: 'amountDebited',
    header: 'Amount debited',
    cell: ({ row }) => (
      <div className="text-[#0B0E17]">
        {formatMoney(row.getValue('amountDebited'))}
      </div>
    ),
  },
  {
    accessorKey: 'interest',
    header: 'Interest',
    cell: ({ row }) => (
      <div className="text-[#0B0E17]">
        {!!row.getValue('interest')
          ? row.getValue('interest')
          : 'Not applicable'}
      </div>
    ),
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      let variant = 'default' as BadgeProps['variant'];
      switch (row.getValue('status')) {
        case 'Success':
          variant = 'green';
          break;
        case 'Defaulted':
          variant = 'orange';
          break;
      }
      return (
        <Badge variant={variant} hasBullet>{`${row.getValue('status')}`}</Badge>
      );
    },
    size: 100,
  },
  {
    id: 'action',
    cell: () => {
      function handleSomeAction() {
        toast.info('Action done');
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
            <DropdownMenuItem onClick={handleSomeAction}>
              Action 1
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleSomeAction}>
              Action 2
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleSomeAction}>
              Action 3
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
    size: 40,
  },
];
