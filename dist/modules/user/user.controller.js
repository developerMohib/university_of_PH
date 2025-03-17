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
exports.getAllUserController = exports.createUserController = void 0;
const user_services_1 = require("./user.services");
const catchAsync_1 = require("../../utils/catchAsync");
// create a user
const createUserController = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { password, studentData } = req.body;
    // new user as a student
    const newUser = yield (0, user_services_1.createUserIntoDB)(password, studentData);
    res.status(200).json({
        success: true,
        message: 'User created successfully',
        data: newUser,
    });
}));
exports.createUserController = createUserController;
// get all users
const getAllUserController = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, user_services_1.getAlluserFromDB)();
    res.status(200).json({
        success: true,
        message: 'User created successfully',
        data: result,
    });
}));
exports.getAllUserController = getAllUserController;
