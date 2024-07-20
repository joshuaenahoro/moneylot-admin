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
import { Button } from '@/components/button';
import { Icon } from '@/components/icon';
import { Loading } from '@/components/loading';
import { useState } from 'react';
import { toast } from 'sonner';

export function BlockUserAlertDialog() {
  const [isLoading, setIsLoading] = useState(false);
  // ! Demo purposes
  const [isActive, setIsActive] = useState(true);

  function handleBlock() {
    setIsLoading(true);
    setTimeout(() => {
      toast.success('User account blocked successfully!');
      setIsActive(false);
      setIsLoading(false);
    }, 2000);
  }

  function handleUnblock() {
    setIsLoading(true);
    setTimeout(() => {
      toast.success('User account unblocked successfully!');
      setIsActive(true);
      setIsLoading(false);
    }, 2000);
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant={isActive ? 'outline-destructive' : 'default'}>
          <Icon
            name={isActive ? 'block' : 'unblock'}
            className="mr-2 h-5 w-5"
          />
          {isActive ? 'Block user' : 'Unblock user'}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            Do you really want to {isActive ? 'block' : 'unblock'} this user?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          {isActive ? (
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
  );
}
