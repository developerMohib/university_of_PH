"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalErrorHandler = void 0;
const globalErrorHandler = (err, req, res, next) => {
    // const statusCode: number = 500;
    // const message = err.message || 'Something went wrong';
    // res.status(statusCode).json({
    //   success: false,
    //   message,
    //   error: err,
    // });
    let statusCode = 500;
    let message = err.message || "Something went wrong";
    let errors = [];
    // Handle Mongoose Validation Errors
    if (err.name === "ValidationError") {
        statusCode = 400;
        message = "Validation Error";
        // Extract errors into an array
        errors = Object.values(err.errors).map((error) => ({
            field: error.path,
            message: error.message,
        }));
    }
    res.status(statusCode).json({
        success: false,
        message,
        errors: errors.length ? errors : err, // Send formatted errors if available
    });
};
exports.globalErrorHandler = globalErrorHandler;
