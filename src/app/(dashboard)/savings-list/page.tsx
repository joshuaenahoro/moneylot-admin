import { SITE_NAME } from '@/constants';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Savings List - ${SITE_NAME}`,
  description: '',
};

export default function SavingsListPage() {
  return (
    <div>
      <h1 className="sr-only">Savings List</h1>
    </div>
  );
}
