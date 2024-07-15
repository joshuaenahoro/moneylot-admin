import { PageHeader, PageWrapper } from '@/components/page';
import { SearchBar } from '@/components/search-bar';
import { SITE_NAME } from '@/constants';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Admin Role Management - ${SITE_NAME}`,
  description: '',
};

// TODO: rename route to admin-role-management or use segments

export default function AdminManagementPage() {
  return (
    <PageWrapper>
      <PageHeader heading="Admin role management">
        <SearchBar />
      </PageHeader>
      {/* <DataTable columns={columns} data={data} /> */}
    </PageWrapper>
  );
}
