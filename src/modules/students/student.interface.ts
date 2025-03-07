import { Model, Types } from "mongoose";

export interface IUserName {
  firstName: string;
  midName?: string | null;
  lastName: string;
}

export interface IGuardian {
  fatherName: string;
  fatherContact: string;
  fatherProfession: string;
  motherName: string;
  motherContact: string;
  motherProfession: string;
}

export interface ILocalGuardian {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
}

export interface IStudent {
  id: string;
  name: IUserName;
  user: Types.ObjectId;
  password?: string | undefined;
  email: string;
  image?: string | null;
  gender: 'Male' | 'Female' | 'Other';
  contactNo: string;
  emergencyContact: string;
  birthDate?: string | null;
  bloodGroup: 'A+' | 'B+' | 'A-' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress?: string | null;
  permanentAddress: string;
  guardian: IGuardian;
  localGuardian: ILocalGuardian;
  isDeleted: boolean;
}

export interface StudentMethods {
  isExistStudent(id: string): Promise<IStudent | null>;
}

// Create a new Model type that knows about IUserMethods...
export type StudentModel = Model<IStudent, object, StudentMethods>;