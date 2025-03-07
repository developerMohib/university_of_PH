"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchemaValidation = void 0;
const zod_1 = require("zod");
const userSchemaValidation = zod_1.z.object({
    password: zod_1.z
        .string({ invalid_type_error: 'Password must be a string' })
        .max(20, { message: 'Password should not be more than 20 characters' })
        .min(4, { message: 'Password should be more than 4 characters' })
        .optional()
});
exports.userSchemaValidation = userSchemaValidation;
