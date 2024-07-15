import { SITE_NAME } from '@/constants';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Fixed Deposit List - ${SITE_NAME}`,
  description: '',
};

export default function FixedDepositListPage() {
  return (
    <div>
      <h1 className="sr-only">Fixed Deposit List</h1>
    </div>
  );
}
