import { PageHeader, PageWrapper } from '@/components/page';
import { SearchBar } from '@/components/search-bar';
import { SITE_NAME } from '@/constants';
import { Metadata } from 'next';
import { FilterControls } from './filter-controls';
import { DataTable } from '@/components/data-table';
import { BillPayments, columns } from './columns';

export const metadata: Metadata = {
  title: `Bill Payments - ${SITE_NAME}`,
  description: '',
};

async function getData(): Promise<BillPayments[]> {
  return [
    {
      description: 'DSTV Yanga',
      provider: 'DSTV',
      transactionId: 570645130037,
      amount: 3600,
      date: '28 Jan, 12.30 AM',
      status: 'Pending',
    },
    {
      description: 'JAMB PIN',
      provider: 'JAMB',
      transactionId: 592431865325,
      amount: 1000,
      date: '28 Jan, 12.30 AM',
      status: 'Success',
    },
    {
      description: 'Data plus talk unlimited',
      provider: 'nTel',
      transactionId: 265855107786,
      amount: 8000,
      date: '28 Jan, 12.30 AM',
      status: 'Failed',
    },
    {
      description: 'Top-up',
      provider: 'Bet9ja',
      transactionId: 125362321635,
      amount: 5500,
      date: '28 Jan, 12.30 AM',
      status: 'Success',
    },
    {
      description: 'Top-up',
      provider: '1XBet',
      transactionId: 201708982751,
      amount: 52500,
      date: '28 Jan, 12.30 AM',
      status: 'Failed',
    },
    {
      description: '10GB Data',
      provider: 'Spectranet',
      transactionId: 201708982751,
      amount: 52500,
      date: '28 Jan, 12.30 AM',
      status: 'Failed',
    },
    {
      description: 'DSTV Yanga',
      provider: 'DSTV',
      transactionId: 570645130037,
      amount: 3600,
      date: '28 Jan, 12.30 AM',
      status: 'Pending',
    },
    {
      description: 'JAMB PIN',
      provider: 'JAMB',
      transactionId: 592431865325,
      amount: 1000,
      date: '28 Jan, 12.30 AM',
      status: 'Success',
    },
    {
      description: 'Data plus talk unlimited',
      provider: 'nTel',
      transactionId: 265855107786,
      amount: 8000,
      date: '28 Jan, 12.30 AM',
      status: 'Failed',
    },
    {
      description: 'Top-up',
      provider: 'Bet9ja',
      transactionId: 125362321635,
      amount: 5500,
      date: '28 Jan, 12.30 AM',
      status: 'Success',
    },
    {
      description: 'Top-up',
      provider: '1XBet',
      transactionId: 201708982751,
      amount: 52500,
      date: '28 Jan, 12.30 AM',
      status: 'Failed',
    },
  ];
}

export default async function BillPaymentsPage() {
  const data = await getData();

  return (
    <PageWrapper>
      <PageHeader heading="Bill payments">
        <SearchBar />
      </PageHeader>
      <FilterControls />
      <DataTable columns={columns} data={data} />
    </PageWrapper>
  );
}
