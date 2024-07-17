import { SITE_NAME } from '@/constants';
import { Metadata } from 'next';
import { columns, Payment } from './columns';
import { DataTable } from '@/components/data-table';
import { PageWrapper } from '@/components/page';
import { Header } from './header';

export const metadata: Metadata = {
  title: `Savings Targets - ${SITE_NAME}`,
  description: '',
};

async function getData(): Promise<Payment[]> {
  return [
    {
      name: 'Rent',
      position: 1,
      minAmount: 1000000,
      maxAmount: 2000000,
      interest: '10%',
      minDuration: '6 months',
      maxDuration: '48 months',
      image: '/demo/rent.png',
    },
    {
      name: 'Education',
      position: 2,
      minAmount: 1000000,
      maxAmount: 2000000,
      interest: '5%',
      minDuration: '6 months',
      maxDuration: '18 months',
      image: '/demo/education.png',
    },
    {
      name: 'Business & Investments',
      position: 3,
      minAmount: 1000000,
      maxAmount: 2000000,
      interest: '10%',
      minDuration: '4 months',
      maxDuration: '36 months',
      image: '/demo/business-investments.png',
    },
    {
      name: 'Gadgets',
      position: 4,
      minAmount: 1000000,
      maxAmount: 2000000,
      interest: '5%',
      minDuration: '9 months',
      maxDuration: '24 months',
      image: '/demo/gadgets-appliances.png',
    },
    {
      name: 'Car',
      position: 5,
      minAmount: 1000000,
      maxAmount: 2000000,
      interest: '10%',
      minDuration: '8 months',
      maxDuration: '24 months',
      image: '/demo/car.png',
    },
    {
      name: 'Emergency',
      position: 6,
      minAmount: 1000000,
      maxAmount: 2000000,
      interest: '5%',
      minDuration: '6 months',
      maxDuration: '36 months',
      image: '/demo/emergencies.png',
    },
  ];
}

export default async function SavingsTargetsPage() {
  const data = await getData();

  return (
    <PageWrapper>
      <Header />
      <DataTable columns={columns} data={data} />
    </PageWrapper>
  );
}
