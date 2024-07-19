import { PageHeader, PageWrapper } from '@/components/page';
import { SearchBar } from '@/components/search-bar';
import { SITE_NAME } from '@/constants';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Support - ${SITE_NAME}`,
  description: '',
};

export default function SupportPage() {
  return (
    <PageWrapper>
      <PageHeader heading="Support">
        <SearchBar />
      </PageHeader>
      <h1 className="sr-only">Support</h1>
    </PageWrapper>
  );
}
