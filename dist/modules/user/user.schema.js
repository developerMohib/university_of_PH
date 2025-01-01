"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    id: { type: String, require: true },
    password: { type: String },
    needPasswordChange: { type: Boolean, default: true },
    role: { type: String, enum: ['admin', 'student', 'faculty'] },
    status: {
        type: String,
        enum: ['in-progress', 'blocked'],
        default: 'in-progress',
    },
    isDeleted: { type: Boolean, default: false },
}, {
    timestamps: true,
});
//  Create a Model.
const User = (0, mongoose_1.model)('User', userSchema);
exports.User = User;
