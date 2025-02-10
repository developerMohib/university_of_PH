import { model, Schema } from 'mongoose';
import {
  IGuardian,
  ILocalGuardian,
  IStudent,
  IUserName,
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

const studentSchema = new Schema<IStudent>({
  id: {
    type: String,
    required: [true, 'id is mendatory'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'password id require'],
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
    enum: ['Male', 'Female', 'other'],
    required: true,
  },
  contactNo: {
    type: String,
    trim: true,
    unique: true,
    required: [true, 'Please porvide contact'],
  },
  emergencyContact: {
    type: String,
    trim: true,
    unique: true,
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
  status: {
    type: String,
    enum: ['In-progress', 'Blocked'],
  },
  guardian: guardianSchema,
  localGuardian: localGuardianSchema,

  isDeleted: { type: Boolean, default: false },
});

export const studentModel = model<IStudent>('student', studentSchema);
