'use client';

import { Button } from './button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from './command';
import { Popover, PopoverContent, PopoverTrigger } from './popover';
import { Icon } from './icon';
import { twJoin } from 'tailwind-merge';
import { useState } from 'react';

export function Combobox({
  label,
  options,
  value,
  setValue,
  hasSearch,
}: {
  label: string;
  options: { value: string; label: string }[];
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  hasSearch?: boolean;
}) {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        asChild
        className="flex h-12 w-full flex-col justify-center rounded-lg bg-[#F9FAFB] px-8"
      >
        <div className="s">
          <div className="text-[8px]">{label}</div>
          <button
            role="combobox"
            aria-expanded={open}
            className="flex w-full justify-between text-sm"
          >
            {value
              ? options.find((option) => option.value === value)?.label
              : 'Select'}
            <Icon name="chevron-down" className="h-4 w-4" />
          </button>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-[220px]">
        <Command>
          {hasSearch && (
            <>
              <CommandInput placeholder="Search option..." />
              <CommandEmpty>No option found.</CommandEmpty>
            </>
          )}
          <CommandGroup>
            <CommandList>
              {options.map((option) => (
                <CommandItem
                  key={option.value}
                  value={option.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? '' : currentValue);
                    setOpen(false);
                  }}
                >
                  {option.label}
                  <Icon
                    name="check"
                    className={twJoin(
                      'ml-auto h-4 w-4',
                      value === option.value ? 'opacity-100' : 'opacity-0',
                    )}
                  />
                </CommandItem>
              ))}
            </CommandList>
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
