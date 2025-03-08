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
const authHashPass_1 = require("../../middleware/authHashPass");
const student_schema_1 = require("../students/student.schema");
const user_schema_1 = require("./user.schema");
const createUserIntoDB = (password, studentData) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        //: Promise<IStudent | undefined>
        // create a user object into db
        //   const result = await Student.create(studenData);  // custom mathod
        // if (await newStudent.isExistStudent(studentData.id)) {
        //   throw new Error('This student already exists');
        // }
        const hashedPassword = yield (0, authHashPass_1.hashPassword)(password || config_1.default.default_pass);
        const userData = {
            password: hashedPassword,
            role: 'student',
            id: '2030100001',
        };
        // Save the new student if it doesn't exist
        const result = yield user_schema_1.User.create(userData);
        if ((_a = Object.keys(result)) === null || _a === void 0 ? void 0 : _a.length) {
            studentData.id = result.id;
            studentData.user = result._id;
            const newStudent = yield student_schema_1.Student.create(studentData);
            return newStudent;
        }
    }
    catch (error) {
        console.log(36, "34", error);
        throw error;
        ;
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
