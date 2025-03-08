import { model, Schema } from 'mongoose';
import {
  IGuardian,
  ILocalGuardian,
  IStudent,
  IUserName,
  StudentMethods,
  StudentModel,
} from './student.interface';

const nameSchema = new Schema<IUserName>({
  firstName: {
    type: String,
    required: [true, 'First Name is mandatory'],
    trim: true,
  },
  midName: {
    type: String,
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, 'Last is required'],
  },
});

const guardianSchema = new Schema<IGuardian>({
  fatherName: {
    type: String,
    required: [true, 'Father name is required'],
    trim: true,
  },
  fatherContact: {
    type: String,
    required: true,
    trim: true,
    match: [/^\d{11}$/, 'Please number will be 11'],
  },
  fatherProfession: {
    type: String,
  },
  motherContact: {
    type: String,
    trim: true,
    match: [/^\d{11}$/, 'Please number will be 11'],
  },
  motherName: {
    type: String,
    trim: true,
  },
  motherProfession: {
    type: String,
    trim: true,
  },
});

const localGuardianSchema = new Schema<ILocalGuardian>({
  name: {
    type: String,
    required: [true, 'Local guardian name is required'],
    trim: true,
  },
  address: {
    type: String,
    required: [true, 'local guardian address is required'],
  },
  contactNo: {
    type: String,
    required: true,
    trim: true,
    match: [/^\d{11}$/, 'Please number will be 11'],
  },
  occupation: {
    type: String,
  },
});

const studentSchema = new Schema<IStudent, StudentModel, StudentMethods>({
  id: {
    type: String,
    required: [true, 'id is mendatory'],
    unique: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    required: [true, 'User id is required!'],
    unique: true,
    ref : 'User',
  },
  name: {
    type: nameSchema,
    required: [true, 'name is required'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    match: [/^\S+@\S+\.\S+$/, 'invalid email format'],
  },
  image: {
    type: String,
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
    required: true,
  },
  contactNo: {
    type: String,
    trim: true,
    required: [true, 'Please porvide contact'],
  },
  emergencyContact: {
    type: String,
    trim: true,
    required: [true, 'Please porvide another contact'],
  },
  birthDate: {
    type: String,
  },
  bloodGroup: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'AB-', 'AB+', 'O+', 'O-'],
  },
  permanentAddress: {
    type: String,
    trim: true,
  },
  presentAddress: {
    type: String,
    trim: true,
  },
  guardian: {
    type: guardianSchema,
    required: [true, 'Guardian details is required'],
  },
  localGuardian: {
    type: localGuardianSchema,
    required: [true, 'Local guardian details is required'],
  },

  isDeleted: { type: Boolean, default: false },
});

studentSchema.methods.isExistStudent = async function (id: string) {
  const existingStudent = await Student.findOne({ id });
  return existingStudent;
};

export const Student = model<IStudent, StudentModel>('student', studentSchema);
