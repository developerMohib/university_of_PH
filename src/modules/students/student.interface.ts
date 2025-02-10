
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
  password: string;
  email: string;
  image?: string | null;
  gender: 'Male' | 'Female' | 'other';
  contactNo: string;
  emergencyContact: string;
  birthDate?: string | null;
  bloodGroup: 'A+' | 'B+' | 'A-' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress?: string | null;
  permanentAddress: string;
  guardian: IGuardian;
  localGuardian: ILocalGuardian;
  status: 'In-progress' | 'Blocked';
  isDeleted: boolean;
}