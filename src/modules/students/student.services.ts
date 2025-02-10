import { studentModel } from './student.schema';

const getAllStudentFromDB = async () => {
  try {
    // here your code
    const result = await studentModel.find();
    return result;
  } catch (error) {
    console.log(error);
  }
};
const getOneStudentFromDB = async (id: string) => {
  try {
    // here your code
    const result = await studentModel.findOne({id});
    return result;
  } catch (error) {
    console.log(error);
  }
};

export { getAllStudentFromDB ,getOneStudentFromDB};
