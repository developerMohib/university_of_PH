"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademicSemester = void 0;
const mongoose_1 = require("mongoose");
const academicSemister_constant_1 = require("./academicSemister.constant");
const academicSemisterSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, 'Semester Name is required !'],
        enum: academicSemister_constant_1.AcademicSemesterName,
    },
    year: { type: String },
    code: {
        type: String,
        required: [true, 'Semester Code is required !'],
        enum: academicSemister_constant_1.AcademicSemesterCode,
    },
    startMonth: {
        type: String,
        required: true,
        enum: academicSemister_constant_1.Months,
    },
}, { timestamps: true });
exports.AcademicSemester = (0, mongoose_1.model)('AcademicSemester', academicSemisterSchema);
