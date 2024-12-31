import { model, Schema } from 'mongoose';
import { TUser } from './user.interface';

const userSchema = new Schema<TUser>({
  id: { type: String, require: true },
  password: { type: String },
  needPasswordChange: { type: Boolean, default: true },
  role: { type: String, enum: ['admin', 'student', 'faculty'] },
  status: {
    type: String,
    enum: ['in-progress', 'blocked'],
    default: 'in-progress',
  },
  isDeleted: { type: Boolean, default: false },
});

//  Create a Model.
const User = model<TUser>('User', userSchema);

export { User };
