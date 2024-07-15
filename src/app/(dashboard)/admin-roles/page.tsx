import { SITE_NAME } from '@/constants';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Admin Roles - ${SITE_NAME}`,
  description: '',
};

export default function AdminRolesPage() {
  return (
    <div>
      <h1 className="sr-only">Admin Roles</h1>
    </div>
  );
}
