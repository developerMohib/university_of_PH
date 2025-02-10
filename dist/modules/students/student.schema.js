"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const nameSchema = new mongoose_1.Schema({
    firstName: {
        type: String,
        require: [true, 'First Name is mandatory'],
        trim: true,
    },
    midName: {
        type: String,
        trim: true,
    },
    lastName: {
        type: String,
        require: [true, 'Last is required'],
    },
});
const studentSchema = new mongoose_1.Schema({
    id: {
        type: String,
        require: [true, 'id is mendatory'],
        unique: true,
    },
    password: {
        type: String,
        require: [true, 'password id require'],
    },
    name: {
        type: nameSchema,
    }
});
