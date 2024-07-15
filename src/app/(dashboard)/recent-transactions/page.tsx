import { SITE_NAME } from '@/constants';
import { Metadata } from 'next';
import { SearchBar } from '@/components/search-bar';
import { PageHeader, PageWrapper } from '@/components/page';
import { FilterControls } from './filter-controls';
import { DataTable } from '@/components/data-table';
import { columns, Transactions } from './columns';

export const metadata: Metadata = {
  title: `Recent Transactions - ${SITE_NAME}`,
  description: '',
};

async function getData(): Promise<Transactions[]> {
  return [
    {
      description: 'Transfer to Sam Kerr',
      from: 'Nicholas Cage',
      transactionId: 75548796317351,
      amount: 450000,
      date: '28 Jan, 12.30 AM',
      status: 'Pending',
    },
    {
      description: 'Data purchase',
      from: 'Nwoke Charles',
      transactionId: 43548796317351,
      amount: 10000,
      date: '28 Jan, 12.30 AM',
      status: 'Failed',
    },
    {
      description: 'Transfer to Millie Bright',
      from: 'Denzel Washington',
      transactionId: 1254800317351,
      amount: 22500,
      date: '28 Jan, 12.30 AM',
      status: 'Success',
    },
    {
      description: 'Airtime purchase',
      from: 'Nicholas Cage',
      transactionId: 17548796317351,
      amount: 2500,
      date: '28 Jan, 12.30 AM',
      status: 'Pending',
    },
    {
      description: 'Transfer to Jessie Jagz',
      from: 'Kolawole Adebimpe',
      transactionId: 12548721317351,
      amount: 4000,
      date: '28 Jan, 12.30 AM',
      status: 'Success',
    },
    {
      description: 'Transfer to Sam Adeyemi',
      from: 'Nwoke Charles',
      transactionId: 34548796317351,
      amount: 200000,
      date: '28 Jan, 12.30 AM',
      status: 'Failed',
    },
    {
      description: 'Transfer to Sam Jones',
      from: 'Denzel Washington',
      transactionId: 12548796317351,
      amount: 33600,
      date: '28 Jan, 12.30 AM',
      status: 'Success',
    },
    {
      description: 'Data purchase',
      from: 'Kolawole Adebimpe',
      transactionId: 12548796317300,
      amount: 20000,
      date: '28 Jan, 12.30 AM',
      status: 'Success',
    },
    {
      description: 'Transfer to Ed Sheeran',
      from: 'Fedora Nwachukwu',
      transactionId: 12548721317351,
      amount: 4000,
      date: '28 Jan, 12.30 AM',
      status: 'Success',
    },
    {
      description: 'Transfer to Taylor Swift',
      from: 'James Bond',
      transactionId: 34548796317351,
      amount: 200000,
      date: '28 Jan, 12.30 AM',
      status: 'Failed',
    },
  ];
}

export default async function RecentTransactionsPage() {
  const data = await getData();

  return (
    <PageWrapper>
      <PageHeader heading="Recent transactions">
        <SearchBar />
      </PageHeader>
      <FilterControls />
      <DataTable columns={columns} data={data} />
    </PageWrapper>
  );
}
