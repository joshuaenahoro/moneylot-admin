import { PageHeader, PageWrapper } from '@/components/page';
import { SearchBar } from '@/components/search-bar';
import { SITE_NAME } from '@/constants';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Cards - ${SITE_NAME}`,
  description: '',
};

export default function CardsPage() {
  return (
    <PageWrapper>
      <PageHeader heading="Card management">
        <SearchBar />
      </PageHeader>
      {/* <DataTable columns={columns} data={data} /> */}
    </PageWrapper>
  );
}
