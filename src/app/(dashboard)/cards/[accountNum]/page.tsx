import { PageWrapper } from '@/components/page';
import { SITE_NAME } from '@/constants';
import { Metadata } from 'next';
import { Header } from './header';

export const metadata: Metadata = {
  title: `Card - ${SITE_NAME}`,
  description: '',
};

export default function CardPage() {
  return (
    <PageWrapper>
      <Header />
    </PageWrapper>
  );
}
