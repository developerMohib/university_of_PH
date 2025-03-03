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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAlluserFromDB = exports.createUserIntoDB = void 0;
const user_schema_1 = require("./user.schema");
const createUserIntoDB = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //   const result = await Student.create(studenData);  // custom mathod
        const newUser = new user_schema_1.User(userData);
        //   if (await newStudent.isExistStudent(studentData.id)) {
        //     throw new Error('This student already exists');
        //   }
        // Save the new student if it doesn't exist
        const result = yield newUser.save();
        return result;
    }
    catch (error) {
        console.log(error);
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
