import { DataTable } from '@/components/data-table';
import { PageHeader, PageWrapper } from '@/components/page';
import { SearchBar } from '@/components/search-bar';
import { SITE_NAME } from '@/constants';
import { Metadata } from 'next';
import { AdminRoles, columns } from './columns';

export const metadata: Metadata = {
  title: `Admin Role Management - ${SITE_NAME}`,
  description: '',
};

async function getData(): Promise<AdminRoles[]> {
  return [
    {
      id: 'UL01',
      role: 'Credit officer',
      description: 'Lorem ipsum donec',
      entryDatetime: 'August 19, 1975 23:15 AM',
    },
    {
      id: 'UL02',
      role: 'Head of Credit',
      description: 'Lorem ipsum donec',
      entryDatetime: 'August 19, 1975 23:15 AM',
    },
    {
      id: 'UL03',
      role: 'Managing Director',
      description: 'Lorem ipsum donec',
      entryDatetime: 'August 19, 1975 23:15 AM',
    },
    {
      id: 'UL04',
      role: 'Finance Director',
      description: 'Lorem ipsum donec',
      entryDatetime: 'August 19, 1975 23:15 AM',
    },
    {
      id: 'UL05',
      role: 'Recovery Manager',
      description: 'Lorem ipsum donec',
      entryDatetime: 'August 19, 1975 23:15 AM',
    },
    {
      id: 'UL06',
      role: 'Credit officer',
      description: 'Lorem ipsum donec',
      entryDatetime: 'August 19, 1975 23:15 AM',
    },
    {
      id: 'UL07',
      role: 'Head of Credit',
      description: 'Lorem ipsum donec',
      entryDatetime: 'August 19, 1975 23:15 AM',
    },
    {
      id: 'UL08',
      role: 'Managing Director',
      description: 'Lorem ipsum donec',
      entryDatetime: 'August 19, 1975 23:15 AM',
    },
    {
      id: 'UL09',
      role: 'Finance Director',
      description: 'Lorem ipsum donec',
      entryDatetime: 'August 19, 1975 23:15 AM',
    },
    {
      id: 'UL10',
      role: 'Recovery Manager',
      description: 'Lorem ipsum donec',
      entryDatetime: 'August 19, 1975 23:15 AM',
    },
    {
      id: 'UL11',
      role: 'Credit officer',
      description: 'Lorem ipsum donec',
      entryDatetime: 'August 19, 1975 23:15 AM',
    },
    {
      id: 'UL12',
      role: 'Credit officer',
      description: 'Lorem ipsum donec',
      entryDatetime: 'August 19, 1975 23:15 AM',
    },
    {
      id: 'UL13',
      role: 'Credit officer',
      description: 'Lorem ipsum donec',
      entryDatetime: 'August 19, 1975 23:15 AM',
    },
  ];
}

export default async function AdminRoleManagementPage() {
  const data = await getData();

  return (
    <PageWrapper>
      <PageHeader heading="Admin role management">
        <SearchBar />
      </PageHeader>
      <DataTable columns={columns} data={data} />
    </PageWrapper>
  );
}
