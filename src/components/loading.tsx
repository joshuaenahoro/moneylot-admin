import { Spinner } from './spinner';

export function Loading() {
  return (
    <div className="fixed inset-0 z-30 grid bg-[#000000]/50">
      <div className="sr-only">Loading</div>
      <Spinner size={86} />
    </div>
  );
}
