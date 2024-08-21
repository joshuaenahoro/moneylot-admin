import { Icon } from '@/components/icon';
import Image from 'next/image';
import Link from 'next/link';
import { NotificationsDrawer } from './notifications-drawer';
import { signOut } from '../auth';

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
        <NotificationsDrawer />
        <SignoutButton />
      </div>
    </header>
  );
}

function SignoutButton() {
  return (
    <form
      action={async () => {
        'use server';
        await signOut();
      }}
    >
      <button
        type="submit"
        className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F5F7FA]"
      >
        <span className="sr-only">Log out</span>
        <Icon name="logout" className="h-5 w-5 text-[#FE5C73]" />
      </button>
    </form>
  );
}
