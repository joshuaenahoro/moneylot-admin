import { DataTable } from '@/components/data-table';
import { SITE_NAME } from '@/constants';
import { Metadata } from 'next';
import { AirtimeAndData, columns } from './columns';
import { PageHeader, PageWrapper } from '@/components/page';
import { SearchBar } from '@/components/search-bar';
import { FilterControls } from './filter-controls';

export const metadata: Metadata = {
  title: `Airtime & Data - ${SITE_NAME}`,
  description: '',
};

async function getData(): Promise<AirtimeAndData[]> {
  return [
    {
      description: 'MTN VTU',
      phoneNum: '08124678906',
      transactionId: 570645130037,
      amount: 3600,
      date: '28 Jan, 12.30 AM',
      status: 'Pending',
    },
    {
      description: 'Glo data',
      phoneNum: '619600870074',
      transactionId: 592431865325,
      amount: 1000,
      date: '28 Jan, 12.30 AM',
      status: 'Success',
    },
    {
      description: 'Glo VTU',
      phoneNum: '08124678906',
      transactionId: 265855107786,
      amount: 8000,
      date: '28 Jan, 12.30 AM',
      status: 'Failed',
    },
    {
      description: 'MTN data',
      phoneNum: '08124678906',
      transactionId: 125362321635,
      amount: 5500,
      date: '28 Jan, 12.30 AM',
      status: 'Success',
    },
    {
      description: 'Airtel data',
      phoneNum: '08124678906',
      transactionId: 201708982751,
      amount: 52500,
      date: '28 Jan, 12.30 AM',
      status: 'Failed',
    },
    {
      description: 'Airtel VTU',
      phoneNum: '08124678906',
      transactionId: 490036849651,
      amount: 15500,
      date: '28 Jan, 12.30 AM',
      status: 'Success',
    },
    {
      description: '9mobile VTU',
      phoneNum: '08124678906',
      transactionId: 228155731548,
      amount: 2300,
      date: '28 Jan, 12.30 AM',
      status: 'Failed',
    },
    {
      description: '9mobile data',
      phoneNum: '08124678906',
      transactionId: 635302061856,
      amount: 5500,
      date: '28 Jan, 12.30 AM',
      status: 'Success',
    },
    {
      description: 'MTN VTU',
      phoneNum: '08124678906',
      transactionId: 966464081008,
      amount: 4000,
      date: '28 Jan, 12.30 AM',
      status: 'Success',
    },
    {
      description: 'MTN VTU',
      phoneNum: '08124678906',
      transactionId: 672809794711,
      amount: 5000,
      date: '28 Jan, 12.30 AM',
      status: 'Success',
    },
    {
      description: 'MTN VTU',
      phoneNum: '08124678906',
      transactionId: 672809794711,
      amount: 5500,
      date: '28 Jan, 12.30 AM',
      status: 'Success',
    },
  ];
}

export default async function AirtimeAndDataPage() {
  const data = await getData();

  return (
    <PageWrapper>
      <PageHeader heading="Airtime & Data">
        <SearchBar />
      </PageHeader>
      <FilterControls />
      <DataTable columns={columns} data={data} />
    </PageWrapper>
  );
}
