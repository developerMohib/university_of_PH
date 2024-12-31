"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchemaValidation = void 0;
const zod_1 = require("zod");
const userSchemaValidation = zod_1.z.object({
    id: zod_1.z.string({ invalid_type_error: 'ID must be a string' }),
    password: zod_1.z
        .string({ invalid_type_error: 'Password must be a string' })
        .max(20, { message: 'Password should not be more than 20 characters' })
        .min(4, { message: 'Password should be more than 4 characters' })
        .optional(),
    needPasswordChange: zod_1.z.boolean({ invalid_type_error: 'Must be a boolean' }),
    status: zod_1.z
        .enum(['in-progress', 'blocked'], {
        invalid_type_error: 'Status must be either "in-progress" or "blocked"',
    })
        .default('in-progress'),
    role: zod_1.z.enum(['admin', 'student', 'faculty'], {
        invalid_type_error: 'Role must be "admin", "student", or "faculty"',
    }),
    isDeleted: zod_1.z
        .boolean({ invalid_type_error: 'Must be a boolean' })
        .default(false),
});
exports.userSchemaValidation = userSchemaValidation;
