import { Student } from './student.schema';

const getAllStudentFromDB = async () => {
  try {
    // here your code
    const result = await Student.find();
    return result;
  } catch (error : any) {
    throw new error
  }
};
const getOneStudentFromDB = async (id: string) => {
  try {
    // here your code
    const result = await Student.findOne({id});
    return result;
  } catch (error : any) {
    throw new error
  }
};
const deleteStudentFromDB = async (id: string) => {
  try {
    // here your code
    const result = await Student.updateOne({id},{isDeleted:true});
    return result;
  } catch (error : any) {
    throw new error
  }
};

export { getAllStudentFromDB ,getOneStudentFromDB,deleteStudentFromDB};
