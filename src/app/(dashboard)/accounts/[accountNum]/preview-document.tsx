import { buttonVariants } from '@/components/button';
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
import { twJoin } from 'tailwind-merge';

export function PreviewDocument() {
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
              className={twJoin('w-full', buttonVariants())}
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
