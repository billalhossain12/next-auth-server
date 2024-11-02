import { z } from 'zod';

const createCategoryValidationSchema = z.object({
  body: z.object({
    name: z.string({ required_error: 'Name is required' }),
    imgUrl: z.string({ required_error: 'Image Url is required' }),
  }),
});
const updateCategoryValidationSchema = z.object({
  body: z.object({
    name: z.string({ required_error: 'Name is required' }).optional(),
    imgUrl: z.string({ required_error: 'Image Url is required' }).optional(),
  }),
});

export const categoryValidationSchemas = {
  createCategoryValidationSchema,
  updateCategoryValidationSchema,
};
