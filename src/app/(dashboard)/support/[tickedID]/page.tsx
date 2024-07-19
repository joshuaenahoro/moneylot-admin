import { SITE_NAME } from '@/constants';
import { Metadata } from 'next';
import { Header } from './header';
import { PageWrapper } from '@/components/page';

export const metadata: Metadata = {
  title: `Ticket - ${SITE_NAME}`,
  description: '',
};

export default async function TicketPage() {
  return (
    <PageWrapper>
      <Header />
      <div className="h-12" />
    </PageWrapper>
  );
}
