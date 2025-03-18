"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const user_route_1 = require("../modules/user/user.route");
const academicSemister_routes_1 = require("../modules/academicSemister/academicSemister.routes");
const router = (0, express_1.Router)();
exports.router = router;
const modules_Routes = [
    {
        path: '/users',
        route: user_route_1.userRouter,
    },
    {
        path: '/students',
        route: user_route_1.userRouter,
    },
    {
        path: '/academic-semesters',
        route: academicSemister_routes_1.academicSemisterRouter,
    }
];
modules_Routes.forEach((route) => router.use(route.path, route.route));
