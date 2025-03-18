import { z } from 'zod';

const nameSchema = z.object({
  firstName: z.string().min(1, 'First Name is mandatory').trim(),
  midName: z.string().optional(),
  lastName: z.string().min(1, 'Last Name is required').trim(),
});

const guardianSchema = z.object({
  fatherName: z.string().min(1, 'Father name is required').trim(),
  fatherContact: z
    .string()
    .regex(/^\d{11}$/, 'Please provide an 11-digit number')
    .trim(),
  fatherProfession: z.string().optional(),
  motherName: z.string().optional(),
  motherContact: z
    .string()
    .regex(/^\d{11}$/, 'Please provide an 11-digit number')
    .optional(),
  motherProfession: z.string().optional(),
});

const localGuardianSchema = z.object({
  name: z.string().min(1, 'Local guardian name is required').trim(),
  address: z.string().min(1, 'Local guardian address is required').trim(),
  contactNo: z
    .string()
    .regex(/^\d{11}$/, 'Please provide an 11-digit number')
    .trim(),
  occupation: z.string().optional(),
});

const createStudentValidationSchema = z.object({
  body: z.object({
    password: z.string().min(1, 'Password is required').trim(),
    studentData: z.object({
      name: nameSchema,
      email: z.string().email('Invalid email format').trim(),
      image: z.string().optional(),
      gender: z.enum(['Male', 'Female', 'other']),
      contactNo: z.string().min(1, 'Please provide contact').trim(),
      emergencyContact: z
        .string()
        .min(1, 'Please provide another contact')
        .trim(),
      birthDate: z.date().optional(),
      bloodGroup: z
        .enum(['A+', 'A-', 'B+', 'B-', 'AB-', 'AB+', 'O+', 'O-'])
        .optional(),
      presentAddress: z.string().optional(),
      permanentAddress: z.string().optional(),
      guardian: guardianSchema,
      localGuardian: localGuardianSchema,
    }),
  }),
});

export { createStudentValidationSchema };
