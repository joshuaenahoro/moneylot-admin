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

export function Form() {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    const res = await editUserRole(data);
    if (res?.errorMessage) {
      toast.error(res.errorMessage);
    } else {
      setTimeout(() => {
        setIsLoading(false);
        toast.success('User role updated');
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
      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-2">
          <Input
            label="Name"
            error={errors.name?.message}
            placeholder="Target name"
            {...register('name')}
          />
        </div>
        <div className="col-span-2">
          <Input
            label="Position"
            error={errors.position?.message}
            placeholder="Position"
            {...register('position')}
            disabled
          />
        </div>
        <div className="col-span-2">
          <Input
            label="Interest %"
            error={errors.maxAmount?.message}
            placeholder="Target interest"
            {...register('interest')}
          />
        </div>
        <div className="col-span-2">
          <Input
            label="Minimum amount"
            error={errors.minAmount?.message}
            placeholder="Minimum amount for target"
            {...register('minAmount')}
          />
        </div>
        <div className="col-span-2">
          <Input
            label="Maximum amount"
            error={errors.maxAmount?.message}
            placeholder="Maximum amount for target"
            {...register('maxAmount')}
          />
        </div>
        <div className="col-span-2" />
        <div className="col-span-2">
          <Input
            label="Minimum duration (months)"
            error={errors.minDuration?.message}
            placeholder="Minimum duration for target"
            {...register('minDuration')}
          />
        </div>
        <div className="col-span-2">
          <Input
            label="Maximum duration (months)"
            error={errors.maxDuration?.message}
            placeholder="Maximum duration for target"
            {...register('maxDuration')}
          />
        </div>
      </div>

      <div className="h-16" />
      <Button type="submit" disabled={isSubmitting} className="w-[236px]">
        Save
      </Button>
    </form>
  );
}
