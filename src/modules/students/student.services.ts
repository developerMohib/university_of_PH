import { Student } from './student.schema';

const getAllStudentFromDB = async () => {
  try {
    // here your code
    const result = await Student.find();
    return result;
  } catch (error) {
    console.log(error);
  }
};
const getOneStudentFromDB = async (id: string) => {
  try {
    // here your code
    const result = await Student.findOne({id});
    return result;
  } catch (error) {
    console.log(error);
  }
};

export { getAllStudentFromDB ,getOneStudentFromDB};
