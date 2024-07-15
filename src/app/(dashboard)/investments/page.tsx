import { SITE_NAME } from '@/constants';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Investments - ${SITE_NAME}`,
  description: '',
};

export default function InvestmentsPage() {
  return (
    <div>
      <h1 className="sr-only">Investments</h1>
    </div>
  );
}
