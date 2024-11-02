import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { categoryControllers } from './category.contoller';
import { categoryValidationSchemas } from './category.validation';

const router = express.Router();

router.post(
  '/create-category',
  validateRequest(categoryValidationSchemas.createCategoryValidationSchema),
  categoryControllers.createCategory,
);

router.get('/get-categories', categoryControllers.getAllCategory);

router.get('/get-single-category/:id', categoryControllers.getSingleCategory);

router.delete('/delete-category/:id', categoryControllers.deleteCategory);

router.put(
  '/update-category/:id',
  validateRequest(categoryValidationSchemas.updateCategoryValidationSchema),
  categoryControllers.updateCategory,
);

export const categoryRoutes = router;
