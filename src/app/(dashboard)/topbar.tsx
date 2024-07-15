'use client';

import { Icon } from '@/components/icon';
import { DialogDescription, DialogTitle } from '@radix-ui/react-dialog';
import Image from 'next/image';
import Link from 'next/link';
import { Drawer } from 'vaul';

export function Topbar() {
  return (
    <header className="sticky z-20 flex h-20 w-full items-center justify-between gap-12 border-b border-[#1C1C1C1A] bg-white px-12">
      <div className="flex shrink-0 items-center gap-4">
        <div className="relative h-9 w-9 overflow-hidden rounded-full">
          <Image
            src="/demo/avatar.jpg"
            fill
            className="object-cover"
            sizes="(max-width:768px) 48px, 96px"
            alt="Avatar"
          />
        </div>
        <div className="max-w-[156px] truncate text-sm font-medium">
          Jane Supercalifragilisticexpialidocious
        </div>
      </div>

      <div className="relative flex w-full max-w-screen-md items-center">
        <Icon
          name="search"
          className="absolute left-6 h-5 w-5 text-[#8BA3CB]"
        />
        <input
          type="search"
          name="search"
          id=""
          placeholder="Search for something"
          className="mx-auto h-10 w-full min-w-[280px] rounded-full bg-[#F5F7FA] pl-16 pr-6 text-sm placeholder:text-[#8BA3CB]"
        />
      </div>

      <div className="flex gap-6">
        <Link
          href="/settings"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F5F7FA]"
        >
          <Icon name="settings" className="h-5 w-5 text-[#718EBF]" />
        </Link>
        <Notifications />
        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F5F7FA]">
          <span className="sr-only">Log out</span>
          <Icon name="logout" className="h-5 w-5 text-[#FE5C73]" />
        </button>
      </div>
    </header>
  );
}

function Notifications() {
  return (
    <Drawer.Root direction="right">
      <Drawer.Trigger asChild>
        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F5F7FA]">
          <span className="sr-only">Notifications</span>
          <Icon name="notifications" className="h-5 w-5 text-[#FE5C73]" />
        </button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 z-30 bg-dark/40" />
        <Drawer.Content className="fixed bottom-0 right-0 z-40 mt-24 flex h-full w-[320px] flex-col bg-white px-6 py-9">
          <DialogTitle className="flex justify-between font-bold">
            <span className="text-[#6E7191]">Notifications</span>
            <Icon name="notifications" className="h-5 w-5" />
          </DialogTitle>
          <DialogDescription className="sr-only">
            Notification alerts
          </DialogDescription>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
