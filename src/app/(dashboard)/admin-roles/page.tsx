import { DataTable } from '@/components/data-table';
import { PageHeader, PageWrapper } from '@/components/page';
import { SearchBar } from '@/components/search-bar';
import { SITE_NAME } from '@/constants';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Admin Roles - ${SITE_NAME}`,
  description: '',
};

export default function AdminRolesPage() {
  return (
    <PageWrapper>
      <PageHeader heading="Admin roles">
        <SearchBar />
      </PageHeader>
      {/* <DataTable columns={columns} data={data} /> */}
    </PageWrapper>
  );
}
