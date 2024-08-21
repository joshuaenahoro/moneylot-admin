'use client';

import { Button } from '@/components/button';
import { Input } from '@/components/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormData, FormSchema } from './definitions';
import { toast } from 'sonner';
import { login } from './actions';

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
    const res = await login(data);
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Email address"
        error={errors.email?.message}
        placeholder="Email address"
        {...register('email')}
      />
      <Input
        type="password"
        label="Password"
        // error={errors.password?.message}
        placeholder="Password"
        {...register('password')}
      />
      <div className="h-9" />
      <div className="flex justify-center">
        <Button type="submit" disabled={isSubmitting} className="w-[236px]">
          Sign in
        </Button>
      </div>
    </form>
  );
}
