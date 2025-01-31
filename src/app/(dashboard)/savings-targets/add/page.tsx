import { SITE_NAME } from '@/constants';
import { Metadata } from 'next';
import { Header } from './header';
import { PageWrapper } from '@/components/page';
import { Form } from './form';

export const metadata: Metadata = {
  title: `Add - Savings Targets - ${SITE_NAME}`,
  description: '',
};

export default function AddSavingsTargetPage() {
  return (
    <PageWrapper>
      <Header />
      <Form />
    </PageWrapper>
  );
}
