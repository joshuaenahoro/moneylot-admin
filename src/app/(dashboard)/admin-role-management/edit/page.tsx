import { SITE_NAME } from '@/constants';
import { Metadata } from 'next';
import { Header } from './header';
import { PageWrapper } from '@/components/page';
import { Form } from './form';

export const metadata: Metadata = {
  title: `Edit - Admin Roles - ${SITE_NAME}`,
  description: '',
};

export default function EditAdminRolePage() {
  return (
    <PageWrapper>
      <Header />
      <Form />
    </PageWrapper>
  );
}
