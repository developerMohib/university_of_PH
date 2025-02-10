export interface IUserName {
  firstName: string;
  midName?: string | null;
  lastName: string;
}

export interface IGuardian {
  fatherName : string,
  fatherContact : string,
  fatherProffession: string,
  motherName : string,
  motherContact : string,
  motherProffession: string,
}
export interface ILocalGuardian {
  name : string,
  occupassion : string,
  contactNo: string,
  address : string,
}

export interface IStudent {
  id: string;
  name: IUserName;
  password: string;
  email: string;
  image?: string | null;
  gender: 'Male' | 'Female' | 'other';
  contactNo: string;
  emargencyContact: string;
  birthDate?: string | null;
  bloodGroup: 'A+' | 'B+' | 'A-' | 'B-' | 'AB+' | 'AB+' | 'O+' | 'O-';
  presentAddress?: string | null;
  permanentAddress: string;
  gurdian: IGuardian;
  localGurdian: ILocalGuardian;
  status: 'In-progess' | 'Blocked';
  isDeleted: boolean;
}
