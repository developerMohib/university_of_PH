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
// create a user
const createUserController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { password, userData } = req.body;
        // const userValidData = userSchemaValidation.parse();
        // if (!userValidData) {
        //   res.status(400).json({
        //     success: false,
        //     message: 'User data is required',
        //   });
        //   return;
        // }
        // new user
        const newUser = (0, user_services_1.createUserIntoDB)(password, userData);
        console.log('26', newUser);
        res.status(200).json({
            success: true,
            message: 'User created successfully',
            data: newUser,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.createUserController = createUserController;
// get all users
const getAllUserController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // here all code
        const result = yield (0, user_services_1.getAlluserFromDB)();
        res.status(200).json({
            success: true,
            message: 'User created successfully',
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.getAllUserController = getAllUserController;
