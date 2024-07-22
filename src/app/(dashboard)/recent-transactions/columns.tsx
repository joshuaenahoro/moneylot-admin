'use client';

import { ColumnDef } from '@tanstack/react-table';
import { Badge } from '@/components/badge';
import Image from 'next/image';
import { formatMoney } from '@/utils';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/tooltip';
import Link from 'next/link';
import { Icon } from '@/components/icon';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/dialog';
import { Button, buttonVariants } from '@/components/button';
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
    cell: ({ row }) => (
      <div className="text-[#232323]">{row.getValue('from')}</div>
    ),
  },
  {
    accessorKey: 'transactionId',
    header: 'Transaction ID',
    cell: ({ row }) => (
      <div className="text-[#101828]">{row.getValue('transactionId')}</div>
    ),
  },
  {
    accessorKey: 'amount',
    header: 'Amount',
    cell: ({ row }) => (
      <div className="font-medium text-[#475467]">
        {formatMoney(row.getValue('amount'))}
      </div>
    ),
  },
  {
    accessorKey: 'date',
    header: 'Date',
    cell: ({ row }) => (
      <div className="text-[#475467]">{row.getValue('date')}</div>
    ),
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
    id: 'action',
    cell: () => {
      return (
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">
              <Icon name="eye" className="h-4 w-4" />
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-[460px]">
            <DialogHeader className="sr-only">
              <DialogTitle>Transaction details</DialogTitle>
              <DialogDescription className="sr-only">
                See transaction details for ***
              </DialogDescription>
            </DialogHeader>
            <div className="mb-4 flex items-center justify-center gap-4 rounded-lg bg-neutral p-2">
              <Image src="/svgs/transfer.svg" width={40} height={40} alt="" />
              <h3 className="text-lg font-medium text-[#000000]">
                James Odinakachukwu Jacob
              </h3>
            </div>
            <div>
              <Row>
                <Meta title="Paid" value="Jul 9, 6:33 AM" />
                <Meta title="Amount" value={formatMoney(55500)} />
              </Row>
              <Row>
                <Meta title="Description" value="Chicken & Chips + Breakfast" />
                <Meta title="Payment method" value="Outward transfer" />
              </Row>
              <Row>
                <Meta title="To" value="Moniepoint MFB" />
                <Meta title="Fees" value={formatMoney(55)} />
              </Row>
              <Row>
                <Meta
                  title="Transaction reference"
                  value="439388891010146211823839220011"
                  hasCopyButton
                />
              </Row>
            </div>

            <DialogFooter className="mx-auto w-[70%] justify-between">
              <button className="flex w-[86px] flex-col items-center gap-2 rounded-md border border-[#ECECEC] py-2 shadow">
                <Icon name="replay" className="h-10 w-10 text-green" />
                <span className="text-center text-xs text-dark-50">
                  Repeat Transaction
                </span>
              </button>
              <button className="flex w-[86px] flex-col items-center gap-2 rounded-md border border-[#ECECEC] py-2 shadow">
                <Icon name="siren" className="h-10 w-10 text-red" />
                <span className="text-center text-xs text-dark-50">
                  Report Transaction
                </span>
              </button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      );
    },
  },
];

function Row({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-between gap-2 border-b border-[#E6E6E6] py-4">
      {children}
    </div>
  );
}

function Meta({
  title,
  value,
  hasCopyButton,
}: {
  title: string;
  value: string;
  hasCopyButton?: boolean;
}) {
  function handleCopy() {
    navigator.clipboard.writeText('978067643197-1');
    toast.info('Copied to clipboard');
  }

  return (
    <div className="flex w-1/2 flex-col-reverse gap-2 even:items-end even:text-right">
      <span className="dark-50 text-xs">{title}</span>
      <span className="flex gap-2 font-medium leading-none text-[#232323]">
        {value}
        {hasCopyButton && (
          <button onClick={handleCopy}>
            <span className="sr-only">Copy to clipboard</span>
            <Icon name="copy" className="h-4 w-4 text-blue-light" />
          </button>
        )}
      </span>
    </div>
  );
}
