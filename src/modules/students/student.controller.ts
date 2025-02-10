import { Request, Response } from 'express';
import { IStudent } from './student.interface';

const createStudent = (req: Request, res: Response) => {
  try {
    const studentData: IStudent = req.body;
    console.log(studentData);
    // const result =createUserIntoDB

    res.status(200).json({
      success: true,
      message: 'Student is created successfully',
      //   data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export { createStudent };
