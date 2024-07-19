import { PageWrapper } from '@/components/page';
import { SITE_NAME } from '@/constants';
import { Metadata } from 'next';
import { Header } from './header';
import { DataTable } from '@/components/data-table';
import { columns, Rates } from './columns';

export const metadata: Metadata = {
  title: `Fixed Deposit Rates - ${SITE_NAME}`,
  description: '',
};

async function getData(): Promise<Rates[]> {
  return [];
}

export default async function FixedDepositRatesPage() {
  const data = await getData();
  return (
    <PageWrapper>
      <Header />
      {/* <DataTable columns={columns} data={data} /> */}
    </PageWrapper>
  );
}
