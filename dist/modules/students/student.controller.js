"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStudent = void 0;
const createStudent = (req, res) => {
    try {
        const studentData = req.body;
        console.log(studentData);
        // const result =createUserIntoDB
        res.status(200).json({
            success: true,
            message: 'Student is created successfully',
            //   data: result,
        });
    }
    catch (error) {
        console.log(error);
    }
};
exports.createStudent = createStudent;
