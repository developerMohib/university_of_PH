import { CustomError, TUser } from './user.interface';
import { User } from './user.schema';

const createUserIntoDB = async (userData: TUser): Promise<TUser | null> => {
  try {
    //   const result = await Student.create(studenData);  // custom mathod
    const newUser = new User(userData);

    //   if (await newStudent.isExistStudent(studentData.id)) {
    //     throw new Error('This student already exists');
    //   }

    // Save the new student if it doesn't exist
    const result = await newUser.save();

    return result;
  } catch (error ) {
    console.log(error)
  }
};

export { createUserIntoDB };
