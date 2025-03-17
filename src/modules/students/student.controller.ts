import { RequestHandler } from 'express';
import {
  deleteStudentFromDB,
  getAllStudentFromDB,
  getOneStudentFromDB,
} from './student.services';
import { catchAsync } from '../../utils/catchAsync';

const getOneStudentController = catchAsync(async (req, res, next) => {
  const { studentId } = req.params;
  if (!studentId) {
    res.status(400).json({
      success: false,
      message: 'Student ID is required.',
    });
    return;
  }
  const result = await getOneStudentFromDB(studentId);
  if (!result) {
    res.status(404).json({
      success: false,
      message: 'Student not found.',
    });
    return;
  }

  res.status(200).json({
    success: true,
    message: 'This is student retrived successfully',
    data: result,
  });
});

const getAllStudentController: RequestHandler = catchAsync(
  async (req, res, next) => {
    const result = await getAllStudentFromDB();
    res.status(200).json({
      success: true,
      message: 'Students retrived successfully',
      data: result,
    });
  },
);

const deleteStudentController: RequestHandler = catchAsync(
  async (req, res, next) => {
    const { studentId } = req.params;
    const result = await deleteStudentFromDB(studentId);
    res.status(200).json({
      success: true,
      message: 'This is student deleted successfully',
      data: result,
    });
  },
);

export {
  getOneStudentController,
  getAllStudentController,
  deleteStudentController,
};
