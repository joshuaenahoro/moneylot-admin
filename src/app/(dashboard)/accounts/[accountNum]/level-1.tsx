import { Button, buttonVariants } from '@/components/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/dialog';
import { Icon } from '@/components/icon';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

// TODO: add sizes prop to image in dialog content

export function Level1() {
  return (
    <>
      <div className="mb-8 flex gap-20">
        <div className="flex w-[120px] flex-col-reverse">
          <span className="text-xs text-[#9095A1]">BVN</span>
          <span className="font-medium text-[#0B0E17]">104567723345</span>
        </div>

        <div className="flex gap-3 rounded-md bg-neutral p-2">
          <span className="flex items-center gap-3 text-xs font-bold">
            <Icon name="image" className="h-10 w-10" />
            Identification
            <a
              href="/demo/passport.png"
              target="_blank"
              download="Amélie Laurent - Identification"
              className={buttonVariants({ variant: 'accent' })}
            >
              <Icon name="download" className="h-6 w-6 text-[#232323]" />
            </a>
          </span>
          <Preview />
        </div>
      </div>

      <div>
        <div className="mb-8 flex gap-20">
          <div className="flex w-[120px] flex-col-reverse gap-1">
            <span className="text-xs text-[#9095A1]">Full name </span>
            <span className="font-medium text-[#0B0E17]">Jim Miller</span>
          </div>
          <div className="flex flex-col-reverse gap-1">
            <span className="text-xs text-[#9095A1]">Date of birth </span>
            <span className="font-medium text-[#0B0E17]">12 Sep 1990</span>
          </div>
          <div className="flex flex-col-reverse gap-1">
            <span className="text-xs text-[#9095A1]">Phone number </span>
            <span className="font-medium text-[#0B0E17]">0812 345 6789</span>
          </div>
          <div className="flex flex-col-reverse gap-1">
            <span className="text-xs text-[#9095A1]">Email address </span>
            <span className="font-medium text-[#0B0E17]">
              jimmiller@realmail.com
            </span>
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-4">
        <Button variant="success">
          <Icon name="thumbs-up" className="mr-2 h-4 w-4" />
          Accept KYC
        </Button>
        <Button variant="outline-destructive">
          <Icon name="thumbs-down" className="mr-2 h-4 w-4" />
          Reject KYC
        </Button>
      </div>
    </>
  );
}

function Preview() {
  return (
    <button>
      <Dialog>
        <DialogTrigger asChild>
          <div className={buttonVariants({ variant: 'accent' })}>
            <Icon name="eye" className="h-6 w-6" />
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Identification</DialogTitle>
            <DialogDescription className="sr-only">
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="relative h-[280px] w-[360px]">
            <Image
              src="/demo/passport.png"
              sizes=""
              className="h-auto w-auto object-contain"
              alt=""
              fill
            />
          </div>
          <DialogFooter>
            <a
              href="/demo/passport.png"
              target="_blank"
              download="Amélie Laurent - Identification"
              className={twMerge('w-full', buttonVariants())}
            >
              <Icon name="download" className="mr-2 h-4 w-4" />
              Download
            </a>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </button>
  );
}

function Footer() {
  return (
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
  );
}
