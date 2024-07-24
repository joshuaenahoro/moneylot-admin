import { z } from 'zod';

export const FormSchema = z.object({
  position: z.number({ message: 'Target name must be at least 3 characters' }),
  name: z.string().min(3, { message: 'Position must be a number' }),
  interest: z.number({ message: 'Interest must be a number' }),
  minAmount: z.number({ message: 'Minimum amount must be a number' }),
  maxAmount: z.number({ message: 'Maximum amount must be a number' }),
  minDuration: z.number({ message: 'Minimum duration must be a number' }),
  maxDuration: z.number({ message: 'Maximum duration must be a number' }),
});

export type FormData = z.infer<typeof FormSchema>;
