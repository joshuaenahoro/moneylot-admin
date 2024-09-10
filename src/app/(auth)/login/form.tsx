import { Button } from '@/components/button';
import { Input } from '@/components/input';
import { signIn } from '@/app/auth';
import { redirect } from 'next/navigation';

export function Form() {
  return (
    <form
      action={async (formData) => {
        'use server';
        try {
          await signIn('credentials', formData);
        } catch (error) {
        } finally {
          // TODO: redirect to callback url instead of the dashboard
          // let searchParams = new URLSearchParams(window.location.search)
          // const callbackUrl = searchParams.get('callbackUrl')
          redirect('/');
        }
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
