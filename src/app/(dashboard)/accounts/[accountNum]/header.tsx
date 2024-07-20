import { Badge } from '@/components/badge';
import { Button } from '@/components/button';
import Image from 'next/image';
import { BlockUserAlertDialog } from './block-user-alert-dialog';
import { Icon } from '@/components/icon';

export function Header() {
  return (
    <header className="overflow-hidden rounded-lg bg-white">
      <div className='h-[100px] w-full bg-[url("/images/plant.jpg")] bg-center' />
      <div className="-mt-20 flex shrink-0 items-end gap-6 p-12">
        <div className="relative h-[180px] w-[180px] shrink-0 overflow-hidden rounded-full border-[5px] border-white">
          <Image
            src="/demo/avatar.jpg"
            fill
            className="object-cover"
            sizes="(max-width:768px) 180px, 360px"
            alt="Avatar"
          />
        </div>
        <div className="flex w-full justify-between">
          <div className="flex flex-col gap-1 pb-6">
            <div className="mb-2 flex items-center gap-2">
              <h1 className="text-3xl font-semibold">Amélie Laurent</h1>
              <Badge variant="green" hasBullet>
                Active
              </Badge>
            </div>
            <div className="flex gap-6">
              <div>
                <h2 className="mb-1 text-xs text-[#9095A1]">Account number</h2>
                <p className="font-medium text-[#0B0E17]">100023345</p>
              </div>
              <div>
                <h2 className="mb-1 text-xs text-[#9095A1]">KYC Level</h2>
                <p className="font-medium text-[#0B0E17]">Level 1</p>
              </div>
            </div>
          </div>
          <BlockUserAlertDialog />
        </div>
      </div>
      <div className="h-px bg-[#EAECF0]" />
      <div className="flex items-center justify-between px-12 py-3">
        <div className="w-[300px]" />
        <h2 className="text-lg font-semibold">KYC Data</h2>
        <div className="flex w-[300px] justify-end gap-4">
          <Button variant="success">
            <Icon name="thumbs-up" className="mr-2 h-4 w-4" />
            Accept all KYC
          </Button>
          <Button variant="destructive">
            <Icon name="thumbs-down" className="mr-2 h-4 w-4" />
            Reject all KYC
          </Button>
        </div>
      </div>
    </header>
  );
}
