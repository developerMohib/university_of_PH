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
exports.deleteStudentFromDB = exports.getOneStudentFromDB = exports.getAllStudentFromDB = void 0;
const student_schema_1 = require("./student.schema");
const getAllStudentFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // here your code
        const result = yield student_schema_1.Student.find();
        return result;
    }
    catch (error) {
        throw new error;
    }
});
exports.getAllStudentFromDB = getAllStudentFromDB;
const getOneStudentFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // here your code
        const result = yield student_schema_1.Student.findOne({ id });
        return result;
    }
    catch (error) {
        throw new error;
    }
});
exports.getOneStudentFromDB = getOneStudentFromDB;
const deleteStudentFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // here your code
        const result = yield student_schema_1.Student.updateOne({ id }, { isDeleted: true });
        return result;
    }
    catch (error) {
        throw new error;
    }
});
exports.deleteStudentFromDB = deleteStudentFromDB;
