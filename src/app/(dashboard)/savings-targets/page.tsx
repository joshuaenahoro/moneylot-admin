import { SITE_NAME } from '@/constants';
import { Metadata } from 'next';
import { columns, Payment } from './columns';
import { DataTable } from '@/components/data-table';
import { PageHeaderWithActionItem, PageWrapper } from '@/components/page';

export const metadata: Metadata = {
  title: `Savings Targets - ${SITE_NAME}`,
  description: '',
};

async function getData(): Promise<Payment[]> {
  return [
    {
      name: 'Rent',
      pagePos: 1,
      minAmount: 1000000,
      maxAmount: 2000000,
      minDuration: '6 months',
      maxDuration: '48 months',
    },
    {
      name: 'Education',
      pagePos: 2,
      minAmount: 1000000,
      maxAmount: 2000000,
      minDuration: '6 months',
      maxDuration: '18 months',
    },
    {
      name: 'Business & Investments',
      pagePos: 3,
      minAmount: 1000000,
      maxAmount: 2000000,
      minDuration: '4 months',
      maxDuration: '36 months',
    },
    {
      name: 'Gadgets',
      pagePos: 4,
      minAmount: 1000000,
      maxAmount: 2000000,
      minDuration: '9 months',
      maxDuration: '24 months',
    },
    {
      name: 'Car',
      pagePos: 5,
      minAmount: 1000000,
      maxAmount: 2000000,
      minDuration: '8 months',
      maxDuration: '24 months',
    },
    {
      name: 'Emergency',
      pagePos: 6,
      minAmount: 1000000,
      maxAmount: 2000000,
      minDuration: '6 months',
      maxDuration: '36 months',
    },
  ];
}

export default async function SavingsTargetsPage() {
  const data = await getData();

  return (
    <PageWrapper>
      <PageHeaderWithActionItem
        heading="Targets"
        subheading="Edit the information on the saving"
      >
        <button className="h-11 rounded-lg bg-blue-light px-8 text-sm font-semibold text-white">
          Add target
        </button>
      </PageHeaderWithActionItem>
      <DataTable columns={columns} data={data} />
    </PageWrapper>
  );
}
