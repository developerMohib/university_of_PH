import { Router } from 'express';
import { userRouter } from '../modules/user/user.route';

const router = Router();
const modules_Routes = [
    {
        path : '/users',
        route : userRouter,
    },
    {
        path : '/students',
        route : userRouter,
    }
]

modules_Routes.forEach((route)=>router.use(route.path, route.route))

export { router };
