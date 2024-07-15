'use client';

import { Button } from '@/components/button';
import { Combobox } from '@/components/combobox';
import { DatePicker } from '@/components/date-picker';
import { Icon } from '@/components/icon';
import { useState } from 'react';

const transactionTypes = [
  {
    value: 'mtn-vtu',
    label: 'MTN VTU',
  },
  {
    value: 'glo-data',
    label: 'Glo data',
  },
  {
    value: 'airtel-data',
    label: 'Airtel data',
  },
  {
    value: '9mobile-vtu',
    label: '9mobile VTU',
  },
  {
    value: 'airtel-vtu',
    label: 'Airtel VTU',
  },
];

export function FilterControls() {
  const [transactionType, setTransactionType] = useState('');
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();

  function handleReset() {
    setTransactionType('');
    setStartDate(undefined);
    setEndDate(undefined);
  }

  return (
    <div className="pb-8">
      <div className="mb-6 flex gap-4">
        <DatePicker
          label="Start date"
          date={startDate}
          setDate={setStartDate}
        />
        <DatePicker label="End date" date={endDate} setDate={setEndDate} />
        <Combobox
          label="Transaction type"
          options={transactionTypes}
          value={transactionType}
          setValue={setTransactionType}
        />
      </div>

      <div className="mx-auto flex w-fit gap-2">
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
    </div>
  );
}
