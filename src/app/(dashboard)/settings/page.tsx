import { SITE_NAME } from '@/constants';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Settings - ${SITE_NAME}`,
  description: '',
};

export default function SettingsPage() {
  return (
    <div>
      <h1 className="sr-only">Settings</h1>
    </div>
  );
}
