'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/button';
import { Checkbox } from './checkbox';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/form';
import { toast } from 'sonner';
import { twMerge } from 'tailwind-merge';
import { Input } from '@/components/input';

const FormSchema = z.object({
  id: z.string(),
  role: z.string().min(2, { message: 'Role must be at least 2 characters' }),
  permissions: z
    .array(z.string())
    .refine((value) => value.some((item) => item), {
      message: 'You have to select at least one item.',
    }),
});

export function UserRoleForm({ permissions }: { permissions: string[] }) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      id: 'ULXX',
      permissions: ['Transactions', 'Support'],
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast.info(JSON.stringify(data, null, 2));
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="flex gap-4">
          <FormField
            control={form.control}
            name="id"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input label="User role ID" {...field} disabled />
                </FormControl>
              </FormItem>
            )}
          ></FormField>

          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input label="User role" {...field} />
                </FormControl>
              </FormItem>
            )}
          ></FormField>
        </div>

        <FormField
          control={form.control}
          name="permissions"
          render={() => (
            <FormItem className="flex flex-col gap-8">
              <FormLabel className="text-base">Permissions</FormLabel>
              <div className="flex h-12">
                <ul className="flex flex-wrap gap-4">
                  {form.getValues('permissions').map((permission) => (
                    <li
                      className="flex items-center gap-2 rounded-3xl bg-[#EEF4FF] px-12 py-3 text-sm font-medium text-blue-light"
                      key={permission}
                    >
                      <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                        <circle cx="4.5" cy="4.5" r="3" fill="#5371FF" />
                      </svg>
                      {permission}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex h-[380px] flex-col gap-2 overflow-y-auto pr-2">
                {permissions.map((permission) => (
                  <FormField
                    key={permission}
                    control={form.control}
                    name="permissions"
                    render={({ field }) => {
                      return (
                        <FormItem
                          key={permission}
                          className={twMerge(
                            'relative flex flex-row items-start justify-between space-x-3 space-y-0 rounded border border-[#E4E7EC] p-4',
                            field.value.includes(permission) &&
                              'border-[#CCD5FF] bg-[#EAEDFF]',
                          )}
                        >
                          <FormLabel className="before:absolute before:inset-0">
                            <div
                              className={twMerge(
                                'mb-1',
                                field.value.includes(permission) &&
                                  'text-blue-light',
                              )}
                            >
                              {permission}
                            </div>
                            <div
                              className={twMerge(
                                'font-normal text-[#475467]',
                                field.value.includes(permission) &&
                                  'text-blue-light',
                              )}
                            >
                              This permission allows dolor sit amet consectetur,
                              adipisicing elit
                            </div>
                          </FormLabel>

                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(permission)}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([...field.value, permission])
                                  : field.onChange(
                                      field.value?.filter(
                                        (value) => value !== permission,
                                      ),
                                    );
                              }}
                            />
                          </FormControl>
                        </FormItem>
                      );
                    }}
                  />
                ))}
              </div>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Update</Button>
      </form>
    </Form>
  );
}
