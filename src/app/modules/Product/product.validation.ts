import { z } from 'zod';

export type TProduct = {
  _id?: string;
  name: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  imgUrl: string;
  rating?: number;
};

const createProductValidationSchema = z.object({
  body: z.object({
    name: z.string({ required_error: 'Name is required' }),
    description: z.string({ required_error: 'Description is required' }),
    category: z.string({ required_error: 'Category is required' }),
    price: z.number({ required_error: 'Price is required' }),
    stock: z.number({ required_error: 'Stock is required' }),
    imgUrl: z.string({ required_error: 'Image is required' }),
    rating: z.number().optional(),
  }),
});

const updateProductValidationSchema = z.object({
  body: z.object({
    name: z.string({ required_error: 'Name is required' }).optional(),
    description: z
      .string({ required_error: 'Description is required' })
      .optional(),
    category: z.string({ required_error: 'Category is required' }).optional(),
    price: z.number({ required_error: 'Price is required' }).optional(),
    stock: z.number({ required_error: 'Stock is required' }).optional(),
    imgUrl: z.string({ required_error: 'Image is required' }).optional(),
    rating: z.number().optional(),
  }),
});

export const productValidationSchemas = {
  createProductValidationSchema,
  updateProductValidationSchema,
};
