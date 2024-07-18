import { DataTable } from '@/components/data-table';
import { PageHeader, PageWrapper } from '@/components/page';
import { SITE_NAME } from '@/constants';
import { Metadata } from 'next';
import { columns, SavingsList } from './columns';

export const metadata: Metadata = {
  title: `Savings List - ${SITE_NAME}`,
  description: '',
};

async function getData(): Promise<SavingsList[]> {
  return [
    {
      accountNum: 1093992823,
      name: 'Jane Doe',
      target: 'Rent',
      amount: 10000000,
      tenure: '6 months',
      interest: '10%',
      dateTimeStarted: '12/2/24 - 9:30 AM',
      status: 'Active',
    },
    {
      accountNum: 1093992823,
      name: 'Jane Doe',
      target: 'Education',
      amount: 10000000,
      tenure: '6 months',
      interest: '10%',
      dateTimeStarted: '12/2/24 - 9:30 AM',
      status: 'Defaulted',
    },
    {
      accountNum: 1093992823,
      name: 'Jane Doe',
      target: 'Business & Investments',
      amount: 10000000,
      tenure: '6 months',
      interest: '10%',
      dateTimeStarted: '12/2/24 - 9:30 AM',
      status: 'Active',
    },
    {
      accountNum: 1093992823,
      name: 'Jane Doe',
      target: 'Gadgets',
      amount: 10000000,
      tenure: '6 months',
      interest: '10%',
      dateTimeStarted: '12/2/24 - 9:30 AM',
      status: 'Active',
    },
    {
      accountNum: 1093992823,
      name: 'Jane Doe',
      target: 'Car',
      amount: 10000000,
      tenure: '6 months',
      interest: '10%',
      dateTimeStarted: '12/2/24 - 9:30 AM',
      status: 'Cancelled',
    },
    {
      accountNum: 1093992823,
      name: 'Jane Doe',
      target: 'Emergency',
      amount: 10000000,
      tenure: '6 months',
      interest: '10%',
      dateTimeStarted: '12/2/24 - 9:30 AM',
      status: 'Active',
    },
    {
      accountNum: 1093992823,
      name: 'Jane Doe',
      target: 'Debt',
      amount: 10000000,
      tenure: '6 months',
      interest: '10%',
      dateTimeStarted: '12/2/24 - 9:30 AM',
      status: 'Defaulted',
    },
    {
      accountNum: 1093992823,
      name: 'Jane Doe',
      target: 'Debt',
      amount: 10000000,
      tenure: '6 months',
      interest: '10%',
      dateTimeStarted: '12/2/24 - 9:30 AM',
      status: 'Defaulted',
    },
    {
      accountNum: 1093992823,
      name: 'Jane Doe',
      target: 'Debt',
      amount: 10000000,
      tenure: '6 months',
      interest: '10%',
      dateTimeStarted: '12/2/24 - 9:30 AM',
      status: 'Active',
    },
    {
      accountNum: 1093992823,
      name: 'Jane Doe',
      target: 'Debt',
      amount: 10000000,
      tenure: '6 months',
      interest: '10%',
      dateTimeStarted: '12/2/24 - 9:30 AM',
      status: 'Active',
    },
    {
      accountNum: 1093992823,
      name: 'Jane Doe',
      target: 'Debt',
      amount: 10000000,
      tenure: '6 months',
      interest: '10%',
      dateTimeStarted: '12/2/24 - 9:30 AM',
      status: 'Active',
    },
    {
      accountNum: 1093992823,
      name: 'Jane Doe',
      target: 'Debt',
      amount: 10000000,
      tenure: '6 months',
      interest: '10%',
      dateTimeStarted: '12/2/24 - 9:30 AM',
      status: 'Cancelled',
    },
    {
      accountNum: 1093992823,
      name: 'Jane Doe',
      target: 'Debt',
      amount: 10000000,
      tenure: '6 months',
      interest: '10%',
      dateTimeStarted: '12/2/24 - 9:30 AM',
      status: 'Active',
    },
  ];
}

export default async function SavingsListPage() {
  const data = await getData();

  return (
    <PageWrapper>
      <PageHeader heading="Savings list" variant="secondary" />
      <DataTable columns={columns} data={data} />
    </PageWrapper>
  );
}
