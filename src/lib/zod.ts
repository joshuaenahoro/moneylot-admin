import { z } from 'zod';

export const signInSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(2, { message: 'Password must be at least 2 characters' }),
});
