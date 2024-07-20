import { SITE_NAME } from '@/constants';
import { Metadata } from 'next';
import { Header } from './header';
import { Levels } from './levels';

export const metadata: Metadata = {
  title: `Account - ${SITE_NAME}`,
  description: '',
};

export default function AccountPage() {
  return (
    <div>
      <Header />
      <Levels />
    </div>
  );
}
