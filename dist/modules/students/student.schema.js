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
exports.Student = void 0;
const mongoose_1 = require("mongoose");
const nameSchema = new mongoose_1.Schema({
    firstName: {
        type: String,
        required: [true, 'First Name is mandatory'],
        trim: true,
    },
    midName: {
        type: String,
        trim: true,
    },
    lastName: {
        type: String,
        required: [true, 'Last is required'],
    },
});
const guardianSchema = new mongoose_1.Schema({
    fatherName: {
        type: String,
        required: [true, 'Father name is required'],
        trim: true,
    },
    fatherContact: {
        type: String,
        required: true,
        trim: true,
        match: [/^\d{11}$/, 'Please number will be 11'],
    },
    fatherProfession: {
        type: String,
    },
    motherContact: {
        type: String,
        trim: true,
        match: [/^\d{11}$/, 'Please number will be 11'],
    },
    motherName: {
        type: String,
        trim: true,
    },
    motherProfession: {
        type: String,
        trim: true,
    },
});
const localGuardianSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, 'Local guardian name is required'],
        trim: true,
    },
    address: {
        type: String,
        required: [true, 'local guardian address is required'],
    },
    contactNo: {
        type: String,
        required: true,
        trim: true,
        match: [/^\d{11}$/, 'Please number will be 11'],
    },
    occupation: {
        type: String,
    },
});
const studentSchema = new mongoose_1.Schema({
    id: {
        type: String,
        required: [true, 'id is mendatory'],
        unique: true,
    },
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: [true, 'User id is required!'],
        unique: true,
        ref: 'User',
    },
    password: {
        type: String,
        required: [true, 'password id require'],
    },
    name: {
        type: nameSchema,
        required: [true, 'name is required'],
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        match: [/^\S+@\S+\.\S+$/, 'invalid email format'],
    },
    image: {
        type: String,
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'],
        required: true,
    },
    contactNo: {
        type: String,
        trim: true,
        required: [true, 'Please porvide contact'],
    },
    emergencyContact: {
        type: String,
        trim: true,
        required: [true, 'Please porvide another contact'],
    },
    birthDate: {
        type: String,
    },
    bloodGroup: {
        type: String,
        enum: ['A+', 'A-', 'B+', 'B-', 'AB-', 'AB+', 'O+', 'O-'],
    },
    permanentAddress: {
        type: String,
        trim: true,
    },
    presentAddress: {
        type: String,
        trim: true,
    },
    guardian: {
        type: guardianSchema,
        required: [true, 'Guardian details is required'],
    },
    localGuardian: {
        type: localGuardianSchema,
        required: [true, 'Local guardian details is required'],
    },
    isDeleted: { type: Boolean, default: false },
});
studentSchema.methods.isExistStudent = function (id) {
    return __awaiter(this, void 0, void 0, function* () {
        const existingStudent = yield exports.Student.findOne({ id });
        return existingStudent;
    });
};
exports.Student = (0, mongoose_1.model)('student', studentSchema);
