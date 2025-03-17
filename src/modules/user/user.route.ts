import { Router } from 'express';
import { createUserController } from './user.controller';
import { validationRequest } from '../../middleware/validationRequest';
import { createStudentValidationSchema } from '../students/student.validation';

const router = Router();

router.post('/create-student',validationRequest(createStudentValidationSchema), createUserController);
router.get('/all-users');
export const userRouter = router;
