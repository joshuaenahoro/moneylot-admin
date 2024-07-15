import { SITE_NAME } from '@/constants';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Admin Management - ${SITE_NAME}`,
  description: '',
};

export default function AdminManagementPage() {
  return (
    <div>
      <h1 className="sr-only">Admin Management</h1>
    </div>
  );
}
