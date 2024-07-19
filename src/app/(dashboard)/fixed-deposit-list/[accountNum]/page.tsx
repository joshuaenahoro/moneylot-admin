import { PageWrapper } from '@/components/page';
import { SITE_NAME } from '@/constants';
import { Metadata } from 'next';
import { Header } from './header';
import { Meta } from './meta';

export const metadata: Metadata = {
  title: `Fixed Deposit - ${SITE_NAME}`,
  description: '',
};

export default function FixedDepositPage() {
  return (
    <PageWrapper>
      <Header />
      <Meta />
    </PageWrapper>
  );
}
