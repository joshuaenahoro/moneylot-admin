import { DataTable } from '@/components/data-table';
import { PageHeader, PageWrapper } from '@/components/page';
import { SearchBar } from '@/components/search-bar';
import { SITE_NAME } from '@/constants';
import { Metadata } from 'next';
import { Accounts, columns } from './columns';

export const metadata: Metadata = {
  title: `Accounts - ${SITE_NAME}`,
  description: '',
};

async function getData(): Promise<Accounts[]> {
  return [
    {
      customerID: 2134042824,
      customerName: 'Bolatito Jackson',
      accountNum: 10057494,
      phoneNum: '08013949293',
      registered: '28 Jan, 10.30 AM',
      status: 'Active',
      kycLevel: 2,
    },
    {
      customerID: 9340420752,
      customerName: 'Jason Mraz',
      accountNum: 35239494,
      phoneNum: '08013949293',
      registered: '26 Feb, 11.30 PM',
      status: 'Active',
      kycLevel: 1,
    },
    {
      customerID: 7834042463,
      customerName: 'Peter Pan',
      accountNum: 80596494,
      phoneNum: '08014449293',
      registered: '18 Sep, 12.30 AM',
      status: 'Active',
      kycLevel: 3,
    },
    {
      customerID: 82134042110,
      customerName: 'Jason Bourne',
      accountNum: 403144941,
      phoneNum: '08014444563',
      registered: '18 Sep, 6.45 AM',
      status: 'Blocked',
      kycLevel: 1,
    },
    {
      customerID: 9340420752,
      customerName: 'Jason Mraz',
      accountNum: 35239494,
      phoneNum: '08013949293',
      registered: '26 Feb, 11.30 PM',
      status: 'Active',
      kycLevel: 2,
    },
    {
      customerID: 7834042463,
      customerName: 'Peter Pan',
      accountNum: 80596494,
      phoneNum: '08014449293',
      registered: '18 Sep, 12.30 AM',
      status: 'Active',
      kycLevel: 3,
    },
    {
      customerID: 2134042824,
      customerName: 'Post Malone',
      accountNum: 10057494,
      phoneNum: '08013949293',
      registered: '28 Jan, 10.30 AM',
      status: 'Active',
      kycLevel: 2,
    },
    {
      customerID: 2137042824,
      customerName: 'Billie Eilish',
      accountNum: 10057494,
      phoneNum: '08013949293',
      registered: '28 Jan, 10.30 AM',
      status: 'Active',
      kycLevel: 2,
    },
    {
      customerID: 2136442824,
      customerName: 'Rhys Lewis',
      accountNum: 10057494,
      phoneNum: '08013949293',
      registered: '28 Jan, 10.30 AM',
      status: 'Active',
      kycLevel: 2,
    },
    {
      customerID: 8934042824,
      customerName: 'Johnny Drille',
      accountNum: 10057494,
      phoneNum: '08013949293',
      registered: '28 Jan, 10.30 AM',
      status: 'Active',
      kycLevel: 2,
    },
  ];
}

export default async function AccountsPage() {
  const data = await getData();

  return (
    <PageWrapper>
      <PageHeader heading="Accounts">
        <SearchBar />
      </PageHeader>
      <DataTable columns={columns} data={data} />
    </PageWrapper>
  );
}
