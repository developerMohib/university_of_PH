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
exports.createUserController = void 0;
const user_services_1 = require("./user.services");
const user_validation_1 = require("./user.validation");
// create a user
const createUserController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // here code i have to write
        const { userData } = req.body;
        const userValidData = user_validation_1.userSchemaValidation.parse(userData);
        if (!userValidData) {
            res.status(400).json({
                success: false,
                message: 'Student data is required',
            });
            return;
        }
        // new user
        const newUser = (0, user_services_1.createUserIntoDB)(userValidData);
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
