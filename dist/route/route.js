"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const user_route_1 = require("../modules/user/user.route");
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
    }
];
modules_Routes.forEach((route) => router.use(route.path, route.route));
