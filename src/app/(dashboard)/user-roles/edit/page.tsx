import { SITE_NAME } from '@/constants';
import { Metadata } from 'next';
import { Header } from './header';
import { PageWrapper } from '@/components/page';

export const metadata: Metadata = {
  title: `Edit - User Roles - ${SITE_NAME}`,
  description: '',
};

export default function EditUserRolePage() {
  return (
    <PageWrapper>
      <Header />
    </PageWrapper>
  );
}
