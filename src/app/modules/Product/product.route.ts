import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { productControllers } from './product.controller';
import { productValidationSchemas } from './product.validation';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../User/user.constant';

const router = express.Router();

router.post(
  '/create-product',
  auth(USER_ROLE.ADMIN),
  validateRequest(productValidationSchemas.createProductValidationSchema),
  productControllers.createProduct,
);

router.get('/get-products', productControllers.getAllProducts);
router.get('/get-single-product/:id', productControllers.getSingleProduct);
router.delete('/delete-product/:id', productControllers.deleteProduct);
router.put(
  '/update-product/:id',
  validateRequest(productValidationSchemas.updateProductValidationSchema),
  productControllers.updateProduct,
);

export const productRoutes = router;
