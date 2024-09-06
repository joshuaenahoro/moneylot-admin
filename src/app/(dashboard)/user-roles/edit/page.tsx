import { SITE_NAME } from '@/constants';
import { Metadata } from 'next';
import { Header } from './header';
import { PageWrapper } from '@/components/page';
import { UserRoleForm } from './user-role-form';

export const metadata: Metadata = {
  title: `Edit - User Roles - ${SITE_NAME}`,
  description: '',
};

async function getPermissions() {
  return [
    'Transactions',
    'Accounts',
    'Cards',
    'Support',
    'Savings',
    'Sales',
    'Security',
  ];
}

export default async function EditUserRolePage() {
  const permissions = await getPermissions();

  return (
    <div className="max-w-[999px]">
      <PageWrapper>
        <Header />
        <UserRoleForm permissions={permissions} />
      </PageWrapper>
    </div>
  );
}
