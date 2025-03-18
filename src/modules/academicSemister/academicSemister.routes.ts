import { Router } from 'express';
import { createAcademicSemesterController } from './academicSemister.controller';
import { validationRequest } from '../../middleware/validationRequest';
import { createAcademicSemesterValidationSchema } from './academicSemester.validation';

const router = Router();

router.post(
  '/create-academic-semester',
  validationRequest(createAcademicSemesterValidationSchema),
  createAcademicSemesterController,
);

export const academicSemisterRouter = router;
