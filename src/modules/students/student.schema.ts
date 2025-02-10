import { Schema } from 'mongoose';
import { IStudent, IUserName } from './student.interface';

const nameSchema = new Schema<IUserName>({
  firstName: {
    type: String,
    require: [true, 'First Name is mandatory'],
    trim: true,
  },
  midName: {
    type: String,
    trim: true,
  },
  lastName: {
    type: String,
    require: [true, 'Last is required'],
  },
});

const studentSchema = new Schema<IStudent>({
  id: {
    type: String,
    require: [true, 'id is mendatory'],
    unique: true,
  },
  password: {
    type: String,
    require: [true, 'password id require'],
  },
  name : {
    type : nameSchema ,
  }
});
