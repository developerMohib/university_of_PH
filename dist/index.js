"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const errorHandler_1 = require("./utils/errorHandler");
// Create an instance of the Express application
const app = (0, express_1.default)();
// To parse incoming JSON requests
app.use(express_1.default.json());
// To enable Cross-Origin Resource Sharing (CORS)
app.use((0, cors_1.default)());
// server static files
app.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
app.get('/', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../public/', 'index.html'));
});
app.get('/status', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'University Management server is ready!✌',
    });
});
// all route error handle
app.all('*', (req, res) => {
    res.status(404).json({
        success: false,
        message: 'This is not a valid route 🤦‍♀️🤷‍♂️',
    });
});
app.use(errorHandler_1.globalErrorHandler);
exports.default = app;
