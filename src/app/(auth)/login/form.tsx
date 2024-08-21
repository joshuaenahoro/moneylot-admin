import { Button } from '@/components/button';
import { Input } from '@/components/input';
import { signIn } from '@/app/auth';

export function Form() {
  return (
    <form
      action={async (formData) => {
        'use server';
        await signIn('credentials', formData);
      }}
    >
      <Input label="Email address" placeholder="Email address" />
      <Input type="password" label="Password" placeholder="Password" />
      <div className="h-9" />
      <div className="flex justify-center">
        <Button type="submit" className="w-[236px]">
          Sign in
        </Button>
      </div>
    </form>
  );
}
