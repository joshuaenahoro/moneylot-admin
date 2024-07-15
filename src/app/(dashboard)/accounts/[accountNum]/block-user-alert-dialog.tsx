'use client';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
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
  function handleBlock() {
    setIsLoading(true);
    setTimeout(() => {
      toast.success('User account blocked successfully!');
      setIsLoading(false);
    }, 2000);
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">
          <Icon name="block" className="mr-2 h-5 w-5" />
          Block user
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            Do you really want to block this user?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleBlock}>
            Block user
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
