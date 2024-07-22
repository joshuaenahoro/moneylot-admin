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
      user: {
        name: 'Samantha Jones',
        email: 'samanthajones@gmail.com',
      },
      accountNum: 1000123455,
      role: 'Credit officer',
      assignmentDatetime: '28 Jan 2024, 23:15 AM',
    },
    {
      id: 'UL01',
      user: {
        name: 'Samantha Jones',
        email: 'samanthajones@gmail.com',
      },
      accountNum: 1000123455,
      role: 'Credit officer',
      assignmentDatetime: '28 Jan 2024, 23:15 AM',
    },
    {
      id: 'UL02',
      user: {
        name: 'Jane Doe',
        email: 'janedoe@gmail.com',
      },
      accountNum: 1000123455,
      role: 'Head of Credit',
      assignmentDatetime: '28 Jan 2024, 23:15 AM',
    },
    {
      id: 'UL03',
      user: {
        name: 'John Udeh',
        email: 'johnudeh@example.com',
      },
      accountNum: 1000123455,
      role: 'MD',
      assignmentDatetime: '28 Jan 2024, 23:15 AM',
    },
    {
      id: 'UL04',
      user: {
        name: 'Priscilla Chan',
        email: 'priscillachan@example.com',
      },
      accountNum: 1000123455,
      role: 'Finance Director',
      assignmentDatetime: '28 Jan 2024, 23:15 AM',
    },
    {
      id: 'UL05',
      user: {
        name: 'Declan Rice',
        email: 'declanrice@example.com',
      },
      accountNum: 1000123455,
      role: 'Recovery Manager',
      assignmentDatetime: '28 Jan 2024, 23:15 AM',
    },
    {
      id: 'UL06',
      user: {
        name: 'Samantha Jones',
        email: 'samanthajones@gmail.com',
      },
      accountNum: 1000123455,
      role: 'Credit officer',
      assignmentDatetime: '28 Jan 2024, 23:15 AM',
    },
    {
      id: 'UL07',
      user: {
        name: 'Jane Doe',
        email: 'janedoe@gmail.com',
      },
      accountNum: 1000123455,
      role: 'Head of Credit',
      assignmentDatetime: '28 Jan 2024, 23:15 AM',
    },
    {
      id: 'UL08',
      user: {
        name: 'Jane Doe',
        email: 'janedoe@gmail.com',
      },
      accountNum: 1000123455,
      role: 'Head of Credit',
      assignmentDatetime: '28 Jan 2024, 23:15 AM',
    },
    {
      id: 'UL09',
      user: {
        name: 'Jane Doe',
        email: 'janedoe@gmail.com',
      },
      accountNum: 1000123455,
      role: 'Head of Credit',
      assignmentDatetime: '28 Jan 2024, 23:15 AM',
    },
    {
      id: 'UL10',
      user: {
        name: 'Jane Doe',
        email: 'janedoe@gmail.com',
      },
      accountNum: 1000123455,
      role: 'Head of Credit',
      assignmentDatetime: '28 Jan 2024, 23:15 AM',
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
