import config from '../../config';
import { IStudent } from '../students/student.interface';
import { Student } from '../students/student.schema';
import { TUser } from './user.interface';
import { User } from './user.schema';

const createUserIntoDB = async (password: string, studentData: IStudent) => {
  try {
    //: Promise<IStudent | undefined>
    // create a user object into db
    const userData: Partial<TUser> = {};

    //   const result = await Student.create(studenData);  // custom mathod
    // const newUser = new User(userData);
    //   if (await newStudent.isExistStudent(studentData.id)) {
    //     throw new Error('This student already exists');
    //   }
    userData.password = password || (config.default_pass as string);
    // if(!password){
    //   user.password = config.default_pass as string;
    // }else{
    //   user.password = password
    // }
    userData.role = 'student';
    userData.id = '2030100001';

    // Save the new student if it doesn't exist
    const result = await User.create(userData);
    if (Object.keys(result)?.length) {
      userData.id = result.id;
      studentData.user = result._id;
      const newStudent = await Student.create(studentData);
      return newStudent;
    }
  } catch (error) {
    console.log(error);
    return undefined;
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
