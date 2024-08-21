'use client';

import { DialogDescription, DialogTitle } from '@/components/dialog';
import { Icon } from '@/components/icon';
import { Drawer } from 'vaul';

export function NotificationsDrawer() {
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
