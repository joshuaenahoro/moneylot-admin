import { SITE_NAME } from '@/constants';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Support - ${SITE_NAME}`,
  description: '',
};

export default function SupportPage() {
  return (
    <div>
      <h1 className="sr-only">Support</h1>
    </div>
  );
}
