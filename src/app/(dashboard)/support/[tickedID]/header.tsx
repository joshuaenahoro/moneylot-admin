'use client';

import { Button } from '@/components/button';
import { BackButton } from '@/components/back-button';
import { Icon } from '@/components/icon';
import { toast } from 'sonner';

export function Header() {
  function copyTicketID() {
    navigator.clipboard.writeText('978067643197-1');
    toast('Ticket ID copied');
  }

  function copyTransactionID() {
    navigator.clipboard.writeText('328067547837-2');
    toast('Transaction ID copied');
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

          <Button variant="outline">
            <Icon name="forward" className="mr-2 h-5 w-5" />
            Forward issue
          </Button>
        </div>
      </div>

      <div className="mb-8 flex justify-center gap-12 text-xl text-blue-primary">
        <div className="flex items-center gap-2">
          <span className="text-semibold">Ticket No.: </span>
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
    </header>
  );
}
