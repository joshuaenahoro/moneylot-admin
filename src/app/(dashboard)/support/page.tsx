import { DataTable } from '@/components/data-table';
import { PageHeader, PageWrapper } from '@/components/page';
import { SearchBar } from '@/components/search-bar';
import { SITE_NAME } from '@/constants';
import { Metadata } from 'next';
import { columns, Support } from './columns';

export const metadata: Metadata = {
  title: `Support - ${SITE_NAME}`,
  description: '',
};

async function getData(): Promise<Support[]> {
  return [
    {
      customer: 'Samantha Jones',
      ticketID: '978067643197-1',
      transactionID: '978067643197-2',
      datetime: ' 28/1/2024 - 12:45 pm',
      type: 'Transfer',
      status: 'Requested',
      admin: '@Johndoe93',
    },
    {
      customer: 'Samantha Jones',
      ticketID: '978067643197-1',
      transactionID: '978067643197-2',
      datetime: ' 28/1/2024 - 12:45 pm',
      type: 'Transfer',
      status: 'Completed',
      admin: '@Johndoe93',
    },
    {
      customer: 'Samantha Jones',
      ticketID: '978067643197-1',
      transactionID: '978067643197-2',
      datetime: ' 28/1/2024 - 12:45 pm',
      type: 'Transfer',
      status: 'Processing',
      admin: '@Johndoe93',
    },
    {
      customer: 'Samantha Jones',
      ticketID: '978067643197-1',
      transactionID: '978067643197-2',
      datetime: ' 28/1/2024 - 12:45 pm',
      type: 'Transfer',
      status: 'Pending',
      admin: '@Johndoe93',
    },
    {
      customer: 'Samantha Jones',
      ticketID: '978067643197-1',
      transactionID: '978067643197-2',
      datetime: ' 28/1/2024 - 12:45 pm',
      type: 'Transfer',
      status: 'Completed',
      admin: '@Johndoe93',
    },
    {
      customer: 'Samantha Jones',
      ticketID: '978067643197-1',
      transactionID: '978067643197-2',
      datetime: ' 28/1/2024 - 12:45 pm',
      type: 'Transfer',
      status: 'Completed',
      admin: '@Johndoe93',
    },
    {
      customer: 'Samantha Jones',
      ticketID: '978067643197-1',
      transactionID: '978067643197-2',
      datetime: ' 28/1/2024 - 12:45 pm',
      type: 'Transfer',
      status: 'Completed',
      admin: '@Johndoe93',
    },
    {
      customer: 'Samantha Jones',
      ticketID: '978067643197-1',
      transactionID: '978067643197-2',
      datetime: ' 28/1/2024 - 12:45 pm',
      type: 'Transfer',
      status: 'Completed',
      admin: '@Johndoe93',
    },
    {
      customer: 'Samantha Jones',
      ticketID: '978067643197-1',
      transactionID: '978067643197-2',
      datetime: ' 28/1/2024 - 12:45 pm',
      type: 'Transfer',
      status: 'Completed',
      admin: '@Johndoe93',
    },
    {
      customer: 'Samantha Jones',
      ticketID: '978067643197-1',
      transactionID: '978067643197-2',
      datetime: ' 28/1/2024 - 12:45 pm',
      type: 'Transfer',
      status: 'Completed',
      admin: '@Johndoe93',
    },
    {
      customer: 'Samantha Jones',
      ticketID: '978067643197-1',
      transactionID: '978067643197-2',
      datetime: ' 28/1/2024 - 12:45 pm',
      type: 'Transfer',
      status: 'Completed',
      admin: '@Johndoe93',
    },
    {
      customer: 'Samantha Jones',
      ticketID: '978067643197-1',
      transactionID: '978067643197-2',
      datetime: ' 28/1/2024 - 12:45 pm',
      type: 'Transfer',
      status: 'Completed',
      admin: '@Johndoe93',
    },
    {
      customer: 'Samantha Jones',
      ticketID: '978067643197-1',
      transactionID: '978067643197-2',
      datetime: ' 28/1/2024 - 12:45 pm',
      type: 'Transfer',
      status: 'Completed',
      admin: '@Johndoe93',
    },
    {
      customer: 'Samantha Jones',
      ticketID: '978067643197-1',
      transactionID: '978067643197-2',
      datetime: ' 28/1/2024 - 12:45 pm',
      type: 'Transfer',
      status: 'Completed',
      admin: '@Johndoe93',
    },
    {
      customer: 'Samantha Jones',
      ticketID: '978067643197-1',
      transactionID: '978067643197-2',
      datetime: ' 28/1/2024 - 12:45 pm',
      type: 'Transfer',
      status: 'Completed',
      admin: '@Johndoe93',
    },
  ];
}

export default async function SupportPage() {
  const data = await getData();

  return (
    <PageWrapper>
      <PageHeader heading="Support">
        <SearchBar />
      </PageHeader>
      <DataTable columns={columns} data={data} />
    </PageWrapper>
  );
}
