import { model, Schema } from 'mongoose';
import { IAcademicSemester } from './academicSemister.interface';
import {
  AcademicSemesterCode,
  AcademicSemesterName,
  Months,
} from './academicSemister.constant';

const academicSemisterSchema = new Schema<IAcademicSemester>(
  {
    name: {
      type: String,
      required: [true, 'Semester Name is required !'],
      enum: AcademicSemesterName,
    },
    year: { type: String },
    code: {
      type: String,
      required: [true, 'Semester Code is required !'],
      enum: AcademicSemesterCode,
    },
    startMonth: {
      type: String,
      required: true,
      enum: Months,
    },
  },
  { timestamps: true },
);

export const AcademicSemester = model<IAcademicSemester>(
  'AcademicSemester',
  academicSemisterSchema,
);
