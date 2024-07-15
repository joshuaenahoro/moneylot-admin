export function Loading() {
  return (
    <div className="fixed inset-0 z-30 grid bg-[#000000]/50">
      <div className="sr-only">Loading</div>
      <svg
        width={86}
        height={86}
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="m-auto animate-spin"
      >
        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
      </svg>
    </div>
  );
}
