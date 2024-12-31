import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.join(process.cwd(), '.env') });


interface Config {
  port: number | undefined;
}


const config: Config = {
  port: process.env.PORT ? parseInt(process.env.PORT, 10) : undefined,
};
export default config;
