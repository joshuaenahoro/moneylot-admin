'use client';

import { Button } from '@/components/button';
import { Combobox } from '@/components/combobox';
import { DatePicker } from '@/components/date-picker';
import { Icon } from '@/components/icon';
import { useState } from 'react';

const providers = [
  {
    value: 'dstv',
    label: 'DSTV',
  },
  {
    value: 'jamb',
    label: 'JAMB',
  },
  {
    value: 'ntel',
    label: 'nTel',
  },
  {
    value: 'bet9ja',
    label: 'Bet9ja',
  },
  {
    value: '1xbet',
    label: '1XBet',
  },
  {
    value: 'spectranet',
    label: 'Spectranet',
  },
];

export function FilterControls() {
  const [provider, setProvider] = useState('');
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();

  function handleReset() {
    setProvider('');
    setStartDate(undefined);
    setEndDate(undefined);
  }

  return (
    <div className="mb-8 flex items-end gap-4">
      <DatePicker label="Start date" date={startDate} setDate={setStartDate} />
      <DatePicker label="End date" date={endDate} setDate={setEndDate} />
      <Combobox
        label="Provider"
        options={providers}
        value={provider}
        setValue={setProvider}
      />
      <Button>Apply filters</Button>
      <Button
        variant="ghost"
        onClick={handleReset}
        className="flex items-center gap-2 text-[#EA0234]"
      >
        <Icon name="replay" className="h-4 w-4" />
        <span className="text-sm font-semibold">Clear filters</span>
      </Button>
    </div>
  );
}
