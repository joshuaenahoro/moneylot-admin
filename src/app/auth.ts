import { postData } from '@/helpers/fetch';
import { signInSchema } from '@/lib/zod';
import NextAuth, { AuthError, User } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { ZodError } from 'zod';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        try {
          let user = null;

          // validate schema
          // const validationResult = signInSchema.safeParse(credentials);
          // if (!validationResult.success) {
          //   return {
          //     errors: validationResult.error.flatten().fieldErrors,
          //   };
          // }

          const { email, password } =
            await signInSchema.parseAsync(credentials);

          // verify if the user exists
          const res = await postData('/api/v1/auth/authenticate', {
            emailAddress: email,
            password,
          });

          user = res.userData;

          if (!user) {
            // throw new Error('User not found.');
            console.log('User not found.');
          }

          // return JSON object with the user data
          return user;
        } catch (error) {
          if (error instanceof AuthError) {
            switch (error.type) {
              case 'CredentialsSignin':
                return { error: 'Invalid credentials' };
              default:
                return { error: 'Something went wrong' };
            }
          }
          if (error instanceof ZodError) {
            // Return `null` to indicate that the credentials are invalid
            return null;
          }
        }
      },
    }),
  ],
  callbacks: {
    authorized: async ({ auth }) => {
      // Logged in users are authenticated, otherwise redirect to login page
      return !!auth;
    },
  },
  pages: {
    signIn: '/login',
  },
});
