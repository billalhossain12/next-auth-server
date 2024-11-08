import express from 'express';
import { AuthRoutes } from '../modules/Auth/auth.route';
import { UserRoutes } from '../modules/User/user.route';
import { productRoutes } from '../modules/Product/product.route';
import { categoryRoutes } from '../modules/Category/category.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/products',
    route: productRoutes,
  },
  {
    path: '/categories',
    route: categoryRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
