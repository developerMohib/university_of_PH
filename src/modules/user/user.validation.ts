import { z } from 'zod';

const userSchemaValidation = z.object({
  password: z
    .string({ invalid_type_error: 'Password must be a string' })
    .max(20, { message: 'Password should not be more than 20 characters' })
    .min(4, { message: 'Password should be more than 4 characters' })
    .optional()
});

export { userSchemaValidation };
