import { NextFunction, Request, Response } from 'express';
import { TUser } from './user.interface';
import { createUserIntoDB, getAlluserFromDB } from './user.services';
import { userSchemaValidation } from './user.validation';

// create a user
const createUserController = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    // here code i have to write
    const { userData }: { userData: TUser } = req.body;
    const userValidData = userSchemaValidation.parse(userData);

    if (!userValidData) {
      res.status(400).json({
        success: false,
        message: 'User data is required',
      });
      return;
    }

    // new user
    const newUser = createUserIntoDB(userValidData);
    res.status(200).json({
      success: true,
      message: 'User created successfully',
      data: newUser,
    });
  } catch (error) {
    next(error);
  }
};

// get all users
const getAllUserController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    // here all code
    const result = await getAlluserFromDB();
    res.status(200).json({
      success: true,
      message: 'User created successfully',
      data: result,
    });

    
  } catch (error) {
    next(error);
  }
};

export { createUserController, getAllUserController };
