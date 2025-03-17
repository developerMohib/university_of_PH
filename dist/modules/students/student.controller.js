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
exports.deleteStudentController = exports.getAllStudentController = exports.getOneStudentController = void 0;
const student_services_1 = require("./student.services");
const catchAsync_1 = require("../../utils/catchAsync");
const getOneStudentController = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { studentId } = req.params;
    if (!studentId) {
        res.status(400).json({
            success: false,
            message: 'Student ID is required.',
        });
        return;
    }
    const result = yield (0, student_services_1.getOneStudentFromDB)(studentId);
    if (!result) {
        res.status(404).json({
            success: false,
            message: 'Student not found.',
        });
        return;
    }
    res.status(200).json({
        success: true,
        message: 'This is student retrived successfully',
        data: result,
    });
}));
exports.getOneStudentController = getOneStudentController;
const getAllStudentController = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, student_services_1.getAllStudentFromDB)();
    res.status(200).json({
        success: true,
        message: 'Students retrived successfully',
        data: result,
    });
}));
exports.getAllStudentController = getAllStudentController;
const deleteStudentController = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { studentId } = req.params;
    const result = yield (0, student_services_1.deleteStudentFromDB)(studentId);
    res.status(200).json({
        success: true,
        message: 'This is student deleted successfully',
        data: result,
    });
}));
exports.deleteStudentController = deleteStudentController;
