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
        toast.success('User role update');
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
      <div className="flex gap-4">
        <Input
          label="ID"
          error={errors.id?.message}
          placeholder="Unique role ID"
          {...register('id')}
        />
        <Input
          label="Role"
          error={errors.role?.message}
          placeholder="User role"
          {...register('role')}
        />
      </div>
      <Input
        label="Description"
        error={errors.description?.message}
        placeholder="Short description for role"
        {...register('description')}
      />
      <div className="h-16" />
      <Button type="submit" disabled={isSubmitting} className="w-[236px]">
        Update
      </Button>
    </form>
  );
}
