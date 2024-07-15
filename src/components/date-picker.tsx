'use client';

import * as React from 'react';
import { format } from 'date-fns';
import { Calendar } from './calendar';
import { Popover, PopoverContent, PopoverTrigger } from './popover';
import { twJoin } from 'tailwind-merge';
import { Icon } from './icon';

export function DatePicker({
  label,
  date,
  setDate,
}: {
  label: string;
  date: Date | undefined;
  setDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
}) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="flex h-12 w-full flex-col justify-center rounded-lg bg-[#F9FAFB] px-8">
          <div className="text-[8px]">{label}</div>
          <button
            className={twJoin(
              'flex justify-between text-sm',
              !date && 'text-muted-foreground',
            )}
          >
            {date ? format(date, 'PPP') : <span>Pick a date</span>}
            <Icon name="calendar" className="h-4 w-4" />
          </button>
        </div>
      </PopoverTrigger>
      <PopoverContent>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
