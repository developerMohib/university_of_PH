import bcrypt from 'bcryptjs';
import config from '../config';
const hashPassword = async (password: string): Promise<string> => {
  const saltRounds = config.bycrypt_rounds
    ? parseInt(config.bycrypt_rounds, 10)
    : 10;
  const salt = await bcrypt.genSalt(saltRounds);
  const hashPass = await bcrypt.hash(password, salt);
  return hashPass;
};

const comparePass = async (plainPass: string, hashPassword: string) => {
  const isMatch = await bcrypt.compare(plainPass, hashPassword);
  return isMatch;
};
export { hashPassword, comparePass };