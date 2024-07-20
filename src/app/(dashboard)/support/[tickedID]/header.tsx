'use client';

import { Button } from '@/components/button';
import { BackButton } from '@/components/back-button';
import { Icon } from '@/components/icon';
import { toast } from 'sonner';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/popover';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/command';
import { useState } from 'react';
import { twJoin } from 'tailwind-merge';
import { Badge } from '@/components/badge';

const admins = [
  {
    value: 'gbolohanDee',
    label: '@gbolohanDee',
  },
  {
    value: 'celineBright',
    label: '@celineBright',
  },
  {
    value: 'johnNewton',
    label: '@johnNewton',
  },
  {
    value: 'amadaNoel',
    label: '@amadaNoel',
  },
  {
    value: 'ceeceeKras',
    label: '@ceeceeKras',
  },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('celineBright');

  const adminAssigned = admins.find((admin) => admin.value === value)?.label;
  console.log(adminAssigned);

  function copyTicketID() {
    navigator.clipboard.writeText('978067643197-1');
    toast.info('Ticket ID copied');
  }

  function copyTransactionID() {
    navigator.clipboard.writeText('328067547837-2');
    toast.info('Transaction ID copied');
  }

  return (
    <header className="overflow-hidden rounded-lg bg-white">
      <h1 className="sr-only">Ticket details</h1>

      <div className="mb-8 flex justify-between">
        <BackButton />
        <div className="flex gap-4">
          <Button>
            <Icon name="wrench" className="mr-2 h-5 w-5" />
            Resolve issue
          </Button>

          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button variant="outline">
                <Icon name="forward" className="mr-2 h-5 w-5" />
                Forward issue
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[228px] p-0">
              <Command>
                <CommandInput placeholder="Search admins..." />
                <div className="h-2" />
                <CommandEmpty>No admin found.</CommandEmpty>
                <CommandGroup>
                  <CommandList>
                    {admins.map((admin) => (
                      <CommandItem
                        key={admin.value}
                        value={admin.value}
                        onSelect={(currentValue) => {
                          setValue(currentValue === value ? '' : currentValue);
                          setOpen(false);
                          toast.info(`Issue forwarded to ${admin.label}`);
                        }}
                        className="flex justify-between"
                      >
                        {admin.label}
                        <Icon
                          name="check"
                          className={twJoin(
                            'ml-2 h-4 w-4',
                            value === admin.value ? 'opacity-100' : 'opacity-0',
                          )}
                        />
                      </CommandItem>
                    ))}
                  </CommandList>
                </CommandGroup>
              </Command>
            </PopoverContent>
          </Popover>
        </div>
      </div>

      <div className="mb-8 flex justify-center gap-12 text-xl text-blue-primary">
        <div className="flex items-center gap-2">
          <span className="text-semibold">Ticket Number: </span>
          <span className="font-bold">978067643197-1</span>
          <button onClick={copyTicketID}>
            <span className="sr-only">Copy transaction ID</span>
            <Icon name="copy" className="h-5 w-5 text-[#5795F7]" />
          </button>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-semibold">Transaction ID: </span>
          <span className="font-bold">328067547837-2</span>
          <button onClick={copyTransactionID}>
            <span className="sr-only">Copy transaction ID</span>
            <Icon name="copy" className="h-5 w-5 text-[#5795F7]" />
          </button>
        </div>
      </div>

      <div>
        <div className="mb-12 flex items-center gap-8">
          <h1 className="text-lg font-semibold">Status</h1>
          <Badge variant="purple" hasBullet>
            Requested
          </Badge>
        </div>

        <div className="flex gap-20 border-b border-[#E4E7EC] pb-5">
          <div className="flex flex-col-reverse gap-1">
            <span className="text-xs text-[#9095A1]">Customer name </span>
            <span className="font-semibold text-[#0B0E17]">Jane Doe</span>
          </div>
          <div className="flex w-[140px] flex-col-reverse gap-1">
            <span className="text-xs text-[#9095A1]">Admin assigned </span>
            <span className="truncate font-semibold text-[#0B0E17]">
              {admins.find((admin) => admin.value === value)?.label}
            </span>
          </div>
          <div className="flex flex-col-reverse gap-1">
            <span className="text-xs text-[#9095A1]">Start date & time </span>
            <span className="font-semibold text-[#0B0E17]">
              {' '}
              28/1/2024 - 12:45 pm
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
