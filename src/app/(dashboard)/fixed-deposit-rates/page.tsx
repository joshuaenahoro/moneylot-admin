import { SITE_NAME } from '@/constants';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Fixed Deposit Rates - ${SITE_NAME}`,
  description: '',
};

export default function FixedDepositRatesPage() {
  return (
    <div>
      <h1 className="sr-only">Fixed Deposit Rates</h1>
    </div>
  );
}
