import { z } from 'zod';

const userSchemaValidation = z.object({
  id: z.string({ invalid_type_error: 'ID must be a string' }),
  password: z
    .string({ invalid_type_error: 'Password must be a string' })
    .max(20, { message: 'Password should not be more than 20 characters' })
    .min(4, { message: 'Password should be more than 4 characters' })
    .optional(),
  needPasswordChange: z.boolean({ invalid_type_error: 'Must be a boolean' }),
  status: z
    .enum(['in-progress', 'blocked'], {
      invalid_type_error: 'Status must be either "in-progress" or "blocked"',
    })
    .default('in-progress'),
  role: z.enum(['admin', 'student', 'faculty'], {
    invalid_type_error: 'Role must be "admin", "student", or "faculty"',
  }),
  isDeleted: z
    .boolean({ invalid_type_error: 'Must be a boolean' })
    .default(false),
});

export { userSchemaValidation };
