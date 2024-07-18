import { SITE_NAME } from '@/constants';
import { Metadata } from 'next';
import { Header } from './header';
import { PageWrapper } from '@/components/page';
import { DataTable } from '@/components/data-table';
import { columns, Saving } from './columns';

export const metadata: Metadata = {
  title: `Savings - ${SITE_NAME}`,
  description: '',
};

async function getData(): Promise<Saving[]> {
  return [
    {
      month: 'June 2024',
      amountDebited: 160000,
      interest: null,
      status: 'Defaulted',
    },
    {
      month: 'July 2024',
      amountDebited: 160000,
      interest: null,
      status: 'Defaulted',
    },
    {
      month: 'Aug 2024',
      amountDebited: 160000,
      interest: null,
      status: 'Success',
    },
    {
      month: 'Sep 2024',
      amountDebited: 160000,
      interest: null,
      status: 'Success',
    },
    {
      month: 'Oct 2024',
      amountDebited: 160000,
      interest: null,
      status: 'Success',
    },
    {
      month: 'Nov 2024',
      amountDebited: 160000,
      interest: null,
      status: 'Success',
    },
  ];
}

export default async function SavingsPage() {
  const data = await getData();

  return (
    <PageWrapper>
      <Header />
      <div className="h-12" />
      <section>
        <h2 className="mb-2 text-lg font-semibold text-[#101828]">
          Debit Schedule
        </h2>
        <DataTable columns={columns} data={data} />
      </section>
    </PageWrapper>
  );
}
