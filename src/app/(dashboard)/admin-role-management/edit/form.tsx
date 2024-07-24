'use client';

import { Input } from '@/components/input';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/button';
import { FormData, FormSchema } from './definitions';
import { editUserRole } from './actions';
import { toast } from 'sonner';
import { useState } from 'react';
import { Loading } from '@/components/loading';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/popover';
import { Icon } from '@/components/icon';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/command';
import { twJoin } from 'tailwind-merge';

export function Form() {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: 'Joseph Blackson',
      accountNum: 20000123442,
      id: 'UL01',
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    const res = await editUserRole(data);
    if (res?.errorMessage) {
      toast.error(res.errorMessage);
    } else {
      setTimeout(() => {
        setIsLoading(false);
        toast.success('Admin role updated');
      }, 1000);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
      className="flex max-w-[884px] flex-col gap-2"
    >
      {isLoading && <Loading />}
      <div className="grid grid-cols-2 gap-4">
        <Input
          label="Name"
          error={errors.name?.message}
          placeholder="Admin name"
          {...register('name')}
          disabled
        />
        <Input
          label="Account number"
          error={errors.accountNum?.message}
          placeholder="Account number"
          {...register('accountNum')}
          disabled
        />
        <Input
          label="ID"
          error={errors.id?.message}
          placeholder="User role ID"
          {...register('id')}
          disabled
        />

        <div>
          <label htmlFor="" className="text-[#344054]">
            User role
          </label>
          <select className="h-10 w-full rounded border border-[#D0D5DD] px-3">
            <option>Credit Officer</option>
            <option>Managing Director</option>
            <option>Account Officer</option>
            <option>Customer Support</option>
            <option>IT Officer</option>
            <option>Head of IT</option>
            <option>Marketer</option>
          </select>
        </div>
      </div>
      <div className="h-16" />
      <Button type="submit" disabled={isSubmitting} className="w-[236px]">
        Update
      </Button>
    </form>
  );
}

function Combobox({
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
