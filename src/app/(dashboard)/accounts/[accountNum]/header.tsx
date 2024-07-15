import Image from 'next/image';

export function Header() {
  return (
    <header>
      <div className="flex shrink-0 items-center gap-4">
        <div className="relative h-9 w-9 overflow-hidden rounded-full">
          <Image
            src="/demo/avatar.jpg"
            fill
            className="object-cover"
            sizes="(max-width:768px) 48px, 96px"
            alt="Avatar"
          />
        </div>
        <div className="max-w-[156px] truncate text-sm font-medium">
          Jane Supercalifragilisticexpialidocious
        </div>
      </div>
    </header>
  );
}
