"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({ path: path_1.default.join(process.cwd(), '.env') });
const config = {
    port: process.env.PORT ? parseInt(process.env.PORT, 10) : undefined,
    database_URL: process.env.MONGO_DB_URL,
    default_pass: process.env.DEFAULT_PASS,
    bycrypt_rounds: process.env.BYCRYPT_SALT_ROUNDS,
};
exports.default = config;
