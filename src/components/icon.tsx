import { IconName } from '@/types/icon';

export function Icon({
  name,
  ...props
}: React.SVGProps<SVGSVGElement> & {
  name: IconName;
}) {
  return (
    <svg {...props}>
      <use href={`/sprite.svg#${name}`} />
    </svg>
  );
}
