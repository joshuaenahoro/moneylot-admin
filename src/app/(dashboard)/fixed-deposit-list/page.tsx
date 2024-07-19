import { DataTable } from '@/components/data-table';
import { PageHeader, PageWrapper } from '@/components/page';
import { SITE_NAME } from '@/constants';
import { Metadata } from 'next';
import { columns, DepositList } from './columns';

export const metadata: Metadata = {
  title: `Fixed Deposit List - ${SITE_NAME}`,
  description: '',
};

async function getData(): Promise<DepositList[]> {
  return [
    {
      accountNum: 1093992823,
      name: 'Jane Doe',
      amountInvested: 1000000,
      tenure: 180,
      interest: 16,
      date: '12/2/24 - 12/8/24',
      finalAmount: 1160000,
      status: 'Active',
    },
    {
      accountNum: 1093992823,
      name: 'Jane Doe',
      amountInvested: 1000000,
      tenure: 365,
      interest: 10,
      date: '12/2/24 - 12/8/24',
      finalAmount: 1160000,
      status: 'Active',
    },
    {
      accountNum: 1093992823,
      name: 'Jane Doe',
      amountInvested: 1000000,
      tenure: 90,
      interest: 10,
      date: '12/2/24 - 12/8/24',
      finalAmount: 1160000,
      status: 'Active',
    },
    {
      accountNum: 1093992823,
      name: 'Jane Doe',
      amountInvested: 1000000,
      tenure: 365,
      interest: 10,
      date: '12/2/24 - 12/8/24',
      finalAmount: 1160000,
      status: 'Active',
    },
    {
      accountNum: 1093992823,
      name: 'Jane Doe',
      amountInvested: 1000000,
      tenure: 90,
      interest: 10,
      date: '12/2/24 - 12/8/24',
      finalAmount: 1160000,
      status: 'Cancelled',
    },
    {
      accountNum: 1093992823,
      name: 'Jane Doe',
      amountInvested: 1000000,
      tenure: 90,
      interest: 10,
      date: '12/2/24 - 12/8/24',
      finalAmount: 1160000,
      status: 'Active',
    },
    {
      accountNum: 1093992823,
      name: 'Jane Doe',
      amountInvested: 1000000,
      tenure: 365,
      interest: 10,
      date: '12/2/24 - 12/8/24',
      finalAmount: 1160000,
      status: 'Defaulted',
    },
    {
      accountNum: 1093992823,
      name: 'Jane Doe',
      amountInvested: 1000000,
      tenure: 90,
      interest: 10,
      date: '12/2/24 - 12/8/24',
      finalAmount: 1160000,
      status: 'Defaulted',
    },
    {
      accountNum: 1093992823,
      name: 'Jane Doe',
      amountInvested: 1000000,
      tenure: 90,
      interest: 10,
      date: '12/2/24 - 12/8/24',
      finalAmount: 1160000,
      status: 'Active',
    },
    {
      accountNum: 1093992823,
      name: 'Jane Doe',
      amountInvested: 1000000,
      tenure: 365,
      interest: 10,
      date: '12/2/24 - 12/8/24',
      finalAmount: 1160000,
      status: 'Active',
    },
    {
      accountNum: 1093992823,
      name: 'Jane Doe',
      amountInvested: 1000000,
      tenure: 365,
      interest: 10,
      date: '12/2/24 - 12/8/24',
      finalAmount: 1160000,
      status: 'Active',
    },
    {
      accountNum: 1093992823,
      name: 'Jane Doe',
      amountInvested: 1000000,
      tenure: 180,
      interest: 10,
      date: '12/2/24 - 12/8/24',
      finalAmount: 1160000,
      status: 'Cancelled',
    },
    {
      accountNum: 1093992823,
      name: 'Jane Doe',
      amountInvested: 1000000,
      tenure: 180,
      interest: 10,
      date: '12/2/24 - 12/8/24',
      finalAmount: 1160000,
      status: 'Active',
    },
  ];
}

export default async function FixedDepositListPage() {
  const data = await getData();

  return (
    <PageWrapper>
      <PageHeader heading="Fixed Deposit List" variant="secondary" />
      <DataTable columns={columns} data={data} />
    </PageWrapper>
  );
}
