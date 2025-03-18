import { Router } from 'express';
import { userRouter } from '../modules/user/user.route';
import { academicSemisterRouter } from '../modules/academicSemister/academicSemister.routes';

const router = Router();
const modules_Routes = [
    {
        path : '/users',
        route : userRouter,
    },
    {
        path : '/students',
        route : userRouter,
    },
    {
        path : '/academic-semesters',
        route : academicSemisterRouter,
    }
]

modules_Routes.forEach((route)=>router.use(route.path, route.route))

export { router };
