"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.comparePass = exports.hashPassword = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const config_1 = __importDefault(require("../config"));
const hashPassword = (password) => __awaiter(void 0, void 0, void 0, function* () {
    const saltRounds = config_1.default.bycrypt_rounds
        ? parseInt(config_1.default.bycrypt_rounds, 10)
        : 10;
    const salt = yield bcryptjs_1.default.genSalt(saltRounds);
    const hashPass = yield bcryptjs_1.default.hash(password, salt);
    return hashPass;
});
exports.hashPassword = hashPassword;
const comparePass = (plainPass, hashPassword) => __awaiter(void 0, void 0, void 0, function* () {
    const isMatch = yield bcryptjs_1.default.compare(plainPass, hashPassword);
    return isMatch;
});
exports.comparePass = comparePass;
