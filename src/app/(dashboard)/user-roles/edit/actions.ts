'use server';

import { FormData, FormSchema } from './definitions';
import { postData } from '@/helpers/fetch';

export async function editUserRole(formData: FormData) {
  // Validate fields
  const validationResult = FormSchema.safeParse(formData);

  // Update user role
  if (!validationResult.success) {
    return {
      errors: validationResult.error.flatten().fieldErrors,
    };
  }

  try {
    console.log(validationResult);
    // const res = await postData('/api/user-role-edit', {
    //   ...formData,
    // });
    // if (res.isSuccesful === false) {
    //   return {
    //     errorMessage: res.errorMessage,
    //   };
    // }
  } catch {
    return {
      errorMessage: 'Something went wrong',
    };
  }
}
