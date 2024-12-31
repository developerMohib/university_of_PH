export interface TUser {
  id: string;
  password?: string | undefined;
  needPasswordChange: boolean;
  status: 'in-progress' | 'blocked';
  role: 'admin' | 'student' | 'faculty';
  isDeleted: boolean;
}

export type CustomError = {
  message: string;
};