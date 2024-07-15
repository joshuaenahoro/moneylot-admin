import { SITE_NAME } from '@/constants';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Cards - ${SITE_NAME}`,
  description: '',
};

export default function CardsPage() {
  return (
    <div>
      <h1 className="sr-only">Cards</h1>
    </div>
  );
}
