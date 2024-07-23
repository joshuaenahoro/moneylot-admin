import { z } from 'zod';

export const FormSchema = z.object({
  id: z.string().min(3, { message: 'ID must be at least 3 characters' }),
  role: z.string().min(2, { message: 'Role must be at least 2 characters' }),
  description: z
    .string({ message: 'Field can only contain strings' })
    .min(10, { message: 'Description must contain at least 10 characters' })
    .max(120, { message: 'Description must contain at most 120 characters' }),
});

export type FormData = z.infer<typeof FormSchema>;
