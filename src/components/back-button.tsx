'use client';

import { useRouter } from 'next/navigation';
import { Icon } from './icon';

export function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="flex items-center gap-2 text-lg text-[#475467]"
    >
      <Icon name="arrow-left" className="h-4 w-4" />
      Back
    </button>
  );
}
