import { IAcademicSemester } from './academicSemister.interface';
import { AcademicSemester } from './academicSemister.model';

const createAcademicSemesterIntoDB = async (payload: IAcademicSemester) => {
  const result = await AcademicSemester.create(payload);
  return result;
};

export { createAcademicSemesterIntoDB };
