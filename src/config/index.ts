import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.join(process.cwd(), '.env') });

interface Config {
  port: number | undefined;
  database_URL: string | undefined;
  bycrypt_rounds: string | undefined;
  default_pass: string | undefined;
}

const config: Config = {
  port: process.env.PORT ? parseInt(process.env.PORT, 10) : undefined,
  database_URL: process.env.MONGO_DB_URL,
  default_pass: process.env.DEFAULT_PASS,
  bycrypt_rounds: process.env.BYCRYPT_SALT_ROUNDS,
};
export default config;
