import { createUserIntoDB, getAlluserFromDB } from './user.services';
import { catchAsync } from '../../utils/catchAsync';

// create a user
const createUserController = catchAsync(
  async (req, res): Promise<void> => {
    const { password, studentData } = req.body;  

    // new user as a student
    const newUser = await createUserIntoDB(password, studentData);
    res.status(200).json({
      success: true,
      message: 'User created successfully',
      data: newUser,
    });
  },
);

// get all users
const getAllUserController = catchAsync(async (req, res) => {
  const result = await getAlluserFromDB();
  res.status(200).json({
    success: true,
    message: 'User created successfully',
    data: result,
  });
});

export { createUserController, getAllUserController };
