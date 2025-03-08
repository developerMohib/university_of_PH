import config from '../../config';
import { hashPassword } from '../../middleware/authHashPass';
import { IStudent } from '../students/student.interface';
import { Student } from '../students/student.schema';
import { TUser } from './user.interface';
import { User } from './user.schema';

const createUserIntoDB = async (password: string, studentData: IStudent) => {
  try {
    //: Promise<IStudent | undefined>
    // create a user object into db

    //   const result = await Student.create(studenData);  // custom mathod
    // if (await newStudent.isExistStudent(studentData.id)) {
    //   throw new Error('This student already exists');
    // }
    const hashedPassword = await hashPassword(
      password || (config.default_pass as string),
    );

    const userData: Partial<TUser> = {
      password: hashedPassword,
      role: 'student',
      id: '2030100001',
    };

    // Save the new student if it doesn't exist
    const result = await User.create(userData);
    if (Object.keys(result)?.length) {
      studentData.id = result.id;
      studentData.user = result._id;
      const newStudent = await Student.create(studentData);
      return newStudent;
    }
  } catch (error) {
    console.log( 36,  "34", error);
    throw error;;
  }
};

// get all users
const getAlluserFromDB = async () => {
  try {
    // here get
    const result = await User.find();
    return result;
  } catch (error) {
    console.log(error);
  }
};

export { createUserIntoDB, getAlluserFromDB };
