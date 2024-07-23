'use client';

import { VariantProps, cva } from 'class-variance-authority';
import { forwardRef } from 'react';
import { twJoin, twMerge } from 'tailwind-merge';

const input = cva('', {
  variants: {
    intent: {
      light: 'border-white text-white',
      dark: 'border-dark-shade-4 text-neutral-tint-4',
    },
  },
  defaultVariants: {
    intent: 'dark',
  },
});

interface Props
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof input> {
  error?: string;
  label: string;
}

export const Input = forwardRef<HTMLInputElement, Props>(function Input(
  { name, error, label, required, intent, className, ...rest },
  ref,
) {
  return (
    <div className="w-full">
      <label htmlFor={name} className="mb-8 text-sm text-[#344054]">
        {label + (required ? ' *' : '')}
      </label>
      <input
        ref={ref}
        id={name}
        name={name}
        className="h-10 w-full rounded-lg border border-[#D0D5DD] bg-transparent px-3 text-lg text-[#030620] transition-colors placeholder:text-sm focus:border-dark-75 focus:outline-none"
        {...rest}
      />

      {/* set min-height to prevent layout shift when error becomes visible for one-liners */}
      <div aria-live="polite" className="min-h-4 text-xs text-red">
        {error}
      </div>
    </div>
  );
});
