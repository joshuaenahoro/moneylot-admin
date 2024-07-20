'use client';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogDestructiveAction,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/alert-dialog';
import { Badge, BadgeProps } from '@/components/badge';
import { Button } from '@/components/button';
import { Icon } from '@/components/icon';
import { Loading } from '@/components/loading';
import Image from 'next/image';
import { Dispatch, SetStateAction, useState } from 'react';
import { toast } from 'sonner';

type Status =
  | 'Active'
  | 'Blocked'
  | 'Locked'
  | 'Onboarding'
  | 'Token not validated';

export function Header() {
  const [status, setStatus] = useState<Status>('Onboarding');

  let badgeVariant = '' as BadgeProps['variant'];

  switch (status) {
    case 'Active':
      badgeVariant = 'green';
      break;
    case 'Blocked':
      badgeVariant = 'red';
      break;
    case 'Locked':
      badgeVariant = 'default';
      break;
    case 'Onboarding':
      badgeVariant = 'blue';
      break;
    case 'Token not validated':
      badgeVariant = 'purple';
      break;
  }

  return (
    <header className="overflow-hidden rounded-t-xl bg-white">
      <div className='h-[100px] w-full bg-[url("/images/plant.jpg")] bg-center' />
      <div className="-mt-20 flex shrink-0 items-end gap-6 p-10">
        <div className="relative h-[180px] w-[180px] shrink-0 overflow-hidden rounded-full border-[5px] border-white">
          <Image
            src="/demo/avatar-2.jpg"
            fill
            className="object-cover"
            sizes="(max-width:768px) 180px, 360px"
            alt="Avatar"
          />
        </div>
        <div className="flex w-full justify-between">
          <div className="flex flex-col gap-1 pb-6">
            <div className="mb-2 flex items-center gap-2">
              <h1 className="text-3xl font-semibold">Amélie Laurent</h1>
              <Badge variant={badgeVariant} hasBullet>
                {status}
              </Badge>
            </div>
            <div className="flex gap-6">
              <div>
                <h2 className="mb-1 text-xs text-[#9095A1]">Account number</h2>
                <p className="font-medium text-[#0B0E17]">100023345</p>
              </div>
              <div>
                <h2 className="mb-1 text-xs text-[#9095A1]">KYC</h2>
                <p className="font-medium text-[#0B0E17]">Level 1</p>
              </div>
            </div>
          </div>
          <BlockUserAlertDialog status={status} setStatus={setStatus} />
        </div>
      </div>
    </header>
  );
}

function BlockUserAlertDialog({
  status,
  setStatus,
}: {
  status: Status;
  setStatus: Dispatch<SetStateAction<Status>>;
}) {
  const [isLoading, setIsLoading] = useState(false);

  // ! Demo purposes
  function handleBlock() {
    setIsLoading(true);
    setTimeout(() => {
      toast.success('User account blocked successfully!');
      setStatus('Blocked');
      setIsLoading(false);
    }, 2000);
  }

  function handleUnblock() {
    setIsLoading(true);
    setTimeout(() => {
      toast.success('User account unblocked successfully!');
      setStatus('Onboarding');
      setIsLoading(false);
    }, 2000);
  }

  return (
    <>
      {isLoading && <Loading />}
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button
            variant={status !== 'Blocked' ? 'outline-destructive' : 'default'}
          >
            <Icon
              name={status !== 'Blocked' ? 'block' : 'unblock'}
              className="mr-2 h-5 w-5"
            />
            {status !== 'Blocked' ? 'Block user' : 'Unblock user'}
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              Do you really want to {status !== 'Blocked' ? 'block' : 'unblock'}{' '}
              this user?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            {status !== 'Blocked' ? (
              <AlertDialogDestructiveAction onClick={handleBlock}>
                Block user
              </AlertDialogDestructiveAction>
            ) : (
              <AlertDialogAction onClick={handleUnblock}>
                Unblock user
              </AlertDialogAction>
            )}
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
