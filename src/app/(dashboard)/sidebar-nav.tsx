'use client';

import { Icon } from '@/components/icon';
import { IconName } from '@/types/icon';
import { Route } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { twJoin } from 'tailwind-merge';

export function SidebarNav() {
  return (
    <div className="fixed inset-y-0 left-0 z-20 w-sidebar-nav border-r border-[#1C1C1C1A] bg-white px-4 py-8">
      <Link href="/" className="mb-12 flex w-fit gap-1">
        <div className="ml-2 h-10 w-10 shrink-0 content-center rounded-full bg-blue-primary">
          <Image
            src="/images/moneylot-mark.svg"
            height={30}
            width={30}
            alt="Moneylot mark"
            className="mx-auto"
          />
        </div>

        <Image
          src="/images/moneylot-wordmark.svg"
          width={73}
          height={34}
          alt="Moneylot wordmark"
          className="h-auto w-auto"
        />
      </Link>

      <nav>
        <ul className="flex flex-col gap-2">
          <LinkItem href="/" icon="home" label="Dashboard" />
          <ParentItem icon="transaction" label="Transactions">
            <LinkItem
              href="/recent-transactions"
              icon="history"
              label="Recent transactions"
            />
            <LinkItem
              href="/airtime-and-data"
              icon="signal"
              label="Airtime & data"
            />
            <LinkItem
              href="/bill-payments"
              icon="hand-coins"
              label="Bill payments"
            />
          </ParentItem>
          <LinkItem href="/accounts" icon="user" label="Accounts" />
          <ParentItem icon="people" label="Admin management">
            <LinkItem href="/user-roles" icon="user-role" label="Roles" />
            <LinkItem
              href="/admin-role-management"
              icon="admin"
              label="Admin"
            />
          </ParentItem>
          <ParentItem icon="piggy-bank" label="Savings">
            <LinkItem href="/savings-targets" icon="target" label="Targets" />
            <LinkItem href="/savings-list" icon="coins" label="Savings list" />
          </ParentItem>
          <ParentItem icon="safe" label="Fixed deposit">
            <LinkItem
              href="/fixed-deposit-rates"
              icon="balance-scale"
              label="Rates"
            />
            <LinkItem
              href="/fixed-deposit-list"
              icon="coins"
              label="Fixed deposit list"
            />
          </ParentItem>
          {/* <LinkItem
            href="/investments"
            icon="trending-up"
            label="Investments"
          /> */}
          <LinkItem href="/cards" icon="card" label="Cards" />
          <LinkItem href="/support" icon="support" label="Support" />
        </ul>
      </nav>
    </div>
  );
}

function LinkItem({
  href,
  icon,
  label,
}: {
  href: Route;
  icon: IconName;
  label: string;
}) {
  const pathname = usePathname();

  return (
    <li>
      <Link
        href={href}
        className={twJoin(
          'flex items-center gap-2 rounded-xl p-3 transition-colors',
          pathname === href && 'bg-blue-lighter',
        )}
      >
        <Icon name={icon} className="h-4 w-4" />
        <span className="text-xs">{label}</span>
      </Link>
    </li>
  );
}

function ParentItem({
  icon,
  label,
  children,
}: {
  icon: IconName;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <details className="group">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-3 pl-3 marker:hidden">
          <div className="flex items-center gap-2">
            <Icon name={icon} className="h-4 w-4" />
            <span className="text-xs">{label}</span>
          </div>
          <Icon
            name="chevron-right"
            className="chevron h-4 w-4 transform transition-all group-open:rotate-[-90deg]"
          />
        </summary>

        <ul className="py-1 pl-4">{children}</ul>
      </details>
    </li>
  );
}
