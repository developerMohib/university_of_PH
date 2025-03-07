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
exports.getAlluserFromDB = exports.createUserIntoDB = void 0;
const config_1 = __importDefault(require("../../config"));
const student_schema_1 = require("../students/student.schema");
const user_schema_1 = require("./user.schema");
const createUserIntoDB = (password, studentData) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    try {
        //: Promise<IStudent | undefined>
        // create a user object into db
        const userData = {};
        //   const result = await Student.create(studenData);  // custom mathod
        // const newUser = new User(userData);
        //   if (await newStudent.isExistStudent(studentData.id)) {
        //     throw new Error('This student already exists');
        //   }
        userData.password = password || config_1.default.default_pass;
        // if(!password){
        //   user.password = config.default_pass as string;
        // }else{
        //   user.password = password
        // }
        userData.role = 'student';
        userData.id = '2030100001';
        // Save the new student if it doesn't exist
        const result = yield user_schema_1.User.create(userData);
        console.log('result u ser', result);
        console.log('Type of result:', typeof result);
        console.log('Object.keys(result).length:', (_a = Object.keys(result)) === null || _a === void 0 ? void 0 : _a.length);
        if ((_b = Object.keys(result)) === null || _b === void 0 ? void 0 : _b.length) {
            userData.id = result.id;
            studentData.user = result._id;
            const newStudent = yield student_schema_1.Student.create(studentData);
            console.log('newStudent u ser', newStudent);
            return newStudent;
        }
    }
    catch (error) {
        console.log(error);
        return undefined;
    }
});
exports.createUserIntoDB = createUserIntoDB;
// get all users
const getAlluserFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // here get
        const result = yield user_schema_1.User.find();
        return result;
    }
    catch (error) {
        console.log(error);
    }
});
exports.getAlluserFromDB = getAlluserFromDB;
