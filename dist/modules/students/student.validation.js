"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStudentValidationSchema = void 0;
const zod_1 = require("zod");
const nameSchema = zod_1.z.object({
    firstName: zod_1.z.string().min(1, 'First Name is mandatory').trim(),
    midName: zod_1.z.string().optional(),
    lastName: zod_1.z.string().min(1, 'Last Name is required').trim(),
});
const guardianSchema = zod_1.z.object({
    fatherName: zod_1.z.string().min(1, 'Father name is required').trim(),
    fatherContact: zod_1.z
        .string()
        .regex(/^\d{11}$/, 'Please provide an 11-digit number')
        .trim(),
    fatherProfession: zod_1.z.string().optional(),
    motherName: zod_1.z.string().optional(),
    motherContact: zod_1.z
        .string()
        .regex(/^\d{11}$/, 'Please provide an 11-digit number')
        .optional(),
    motherProfession: zod_1.z.string().optional(),
});
const localGuardianSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, 'Local guardian name is required').trim(),
    address: zod_1.z.string().min(1, 'Local guardian address is required').trim(),
    contactNo: zod_1.z
        .string()
        .regex(/^\d{11}$/, 'Please provide an 11-digit number')
        .trim(),
    occupation: zod_1.z.string().optional(),
});
const createStudentValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        password: zod_1.z.string().min(1, 'Password is required').trim(),
        studentData: zod_1.z.object({
            name: nameSchema,
            email: zod_1.z.string().email('Invalid email format').trim(),
            image: zod_1.z.string().optional(),
            gender: zod_1.z.enum(['Male', 'Female', 'other']),
            contactNo: zod_1.z.string().min(1, 'Please provide contact').trim(),
            emergencyContact: zod_1.z
                .string()
                .min(1, 'Please provide another contact')
                .trim(),
            birthDate: zod_1.z.string().optional(),
            bloodGroup: zod_1.z
                .enum(['A+', 'A-', 'B+', 'B-', 'AB-', 'AB+', 'O+', 'O-'])
                .optional(),
            presentAddress: zod_1.z.string().optional(),
            permanentAddress: zod_1.z.string().optional(),
            guardian: guardianSchema,
            localGuardian: localGuardianSchema,
        }),
    }),
});
exports.createStudentValidationSchema = createStudentValidationSchema;
