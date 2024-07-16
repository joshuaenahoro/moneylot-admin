import { DataTable } from '@/components/data-table';
import { PageHeader, PageWrapper } from '@/components/page';
import { SearchBar } from '@/components/search-bar';
import { SITE_NAME } from '@/constants';
import { Metadata } from 'next';
import { Cards, columns } from './columns';

export const metadata: Metadata = {
  title: `Cards - ${SITE_NAME}`,
  description: '',
};

async function getData(): Promise<Cards[]> {
  return [
    {
      customer: {
        name: 'Samantha Jones',
        email: 'samanthajones@gmail.com',
      },
      accountNum: 10012346,
      cardType: 'Mastercard',
      requestDate: '28/1/2024',
      status: 'Activated',
    },

    {
      customer: {
        name: 'Samantha Jones',
        email: 'samanthajones@gmail.com',
      },
      accountNum: 10012348,
      cardType: 'Visa',
      requestDate: '28/1/2024',
      status: 'Activation pending',
    },
    {
      customer: {
        name: 'Samantha Jones',
        email: 'samanthajones@gmail.com',
      },
      accountNum: 10012345,
      cardType: 'Visa',
      requestDate: '28/1/2024',
      status: 'Requested',
    },
    {
      customer: {
        name: 'Samantha Jones',
        email: 'samanthajones@gmail.com',
      },
      accountNum: 10012349,
      cardType: 'Mastercard',
      requestDate: '28/1/2024',
      status: 'In production',
    },
    {
      customer: {
        name: 'Samantha Jones',
        email: 'samanthajones@gmail.com',
      },
      accountNum: 10012310,
      cardType: 'Verve',
      requestDate: '28/1/2024',
      status: 'Requested',
    },
    {
      customer: {
        name: 'Samantha Jones',
        email: 'samanthajones@gmail.com',
      },
      accountNum: 10012347,
      cardType: 'Verve',
      requestDate: '28/1/2024',
      status: 'Processing',
    },
    {
      customer: {
        name: 'Samantha Jones',
        email: 'samanthajones@gmail.com',
      },
      accountNum: 10012316,
      cardType: 'Verve',
      requestDate: '28/1/2024',
      status: 'Delivery failed',
    },
    {
      customer: {
        name: 'Samantha Jones',
        email: 'samanthajones@gmail.com',
      },
      accountNum: 10012317,
      cardType: 'Visa',
      requestDate: '28/1/2024',
      status: 'Activation pending',
    },
    {
      customer: {
        name: 'Samantha Jones',
        email: 'samanthajones@gmail.com',
      },
      accountNum: 10012311,
      cardType: 'Visa',
      requestDate: '28/1/2024',
      status: 'Quality check',
    },
    {
      customer: {
        name: 'Samantha Jones',
        email: 'samanthajones@gmail.com',
      },
      accountNum: 10012312,
      cardType: 'Mastercard',
      requestDate: '28/1/2024',
      status: 'Dispatched',
    },
    {
      customer: {
        name: 'Samantha Jones',
        email: 'samanthajones@gmail.com',
      },
      accountNum: 10012313,
      cardType: 'Verve',
      requestDate: '28/1/2024',
      status: 'Rejected',
    },
    {
      customer: {
        name: 'Samantha Jones',
        email: 'samanthajones@gmail.com',
      },
      accountNum: 10012314,
      cardType: 'Visa',
      requestDate: '28/1/2024',
      status: 'In transit',
    },
    {
      customer: {
        name: 'Samantha Jones',
        email: 'samanthajones@gmail.com',
      },
      accountNum: 10012318,
      cardType: 'Mastercard',
      requestDate: '28/1/2024',
      status: 'Activation pending',
    },
    {
      customer: {
        name: 'Samantha Jones',
        email: 'samanthajones@gmail.com',
      },
      accountNum: 10012315,
      cardType: 'Mastercard',
      requestDate: '28/1/2024',
      status: 'Delivered to bank',
    },
  ];
}

export default async function CardsPage() {
  const data = await getData();

  return (
    <PageWrapper>
      <PageHeader heading="Card management">
        <SearchBar />
      </PageHeader>
      <DataTable columns={columns} data={data} />
    </PageWrapper>
  );
}
