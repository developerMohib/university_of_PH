import { catchAsync } from '../../utils/catchAsync';
import { createAcademicSemesterIntoDB } from './academicSemister.services';

const createAcademicSemesterController = catchAsync(async (req, res) => {
  const result = await createAcademicSemesterIntoDB(req.body);
  res.status(200).json({
    success: true,
    message: 'Semester created successfully',
    data: result,
  });
});

export { createAcademicSemesterController };
