"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.academicSemisterRouter = void 0;
const express_1 = require("express");
const academicSemister_controller_1 = require("./academicSemister.controller");
const validationRequest_1 = require("../../middleware/validationRequest");
const academicSemester_validation_1 = require("./academicSemester.validation");
const router = (0, express_1.Router)();
router.post('/create-academic-semester', (0, validationRequest_1.validationRequest)(academicSemester_validation_1.createAcademicSemesterValidationSchema), academicSemister_controller_1.createAcademicSemesterController);
exports.academicSemisterRouter = router;
