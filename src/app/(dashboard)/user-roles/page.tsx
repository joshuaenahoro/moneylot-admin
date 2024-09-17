import { DataTable } from '@/components/data-table';
import { PageHeader, PageWrapper } from '@/components/page';
import { SearchBar } from '@/components/search-bar';
import { SITE_NAME } from '@/constants';
import { Metadata } from 'next';
import { columns, UserRoles } from './columns';
import { getData } from '@/helpers/fetch';

export const metadata: Metadata = {
  title: `User Roles - ${SITE_NAME}`,
  description: '',
};

async function getRoles(): Promise<UserRoles[]> {
  const data = await getData('/api/v1/auth/roles');
  return data;
}

export default async function UserRolesPage() {
  const data = await getRoles();

  return (
    <PageWrapper>
      <PageHeader heading="User roles">
        <SearchBar />
      </PageHeader>
      <DataTable columns={columns} data={data} />
    </PageWrapper>
  );
}
