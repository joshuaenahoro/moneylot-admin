import { SITE_NAME } from '@/constants';
import { Metadata } from 'next';
import { Header } from './header';
import { PageWrapper } from '@/components/page';

export const metadata: Metadata = {
  title: `Add - Fixed Deposit Rates - ${SITE_NAME}`,
  description: '',
};

export default function AddFixedDepositRatesPage() {
  return (
    <PageWrapper>
      <Header />
    </PageWrapper>
  );
}
