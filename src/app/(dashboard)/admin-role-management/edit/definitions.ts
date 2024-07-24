import { z } from 'zod';

export const FormSchema = z.object({
  name: z.string().min(3, { message: 'Name must be at least 3 characters' }),
  accountNum: z
    .number()
    .min(2, { message: 'Account number must be 10 digits' }),
  id: z
    .string()
    .min(3, { message: 'User role ID must be at least 3 characters' }),
});

export type FormData = z.infer<typeof FormSchema>;
