import { catchAsync } from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { productServices } from './product.service';

const createProduct = catchAsync(async (req, res) => {
  const result = await productServices.createProductIntoDB(req.body);

  sendResponse(res, {
    message: 'Product created successfully',
    statusCode: 200,
    data: result,
    success: true,
  });
});

const getAllProducts = catchAsync(async (req, res) => {
  const result = await productServices.getAllProductsFromDB();

  sendResponse(res, {
    message: 'Retrieved products successfully',
    statusCode: 200,
    data: result,
    success: true,
  });
});

const getSingleProduct = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await productServices.getSingleProductFromDB(id);

  sendResponse(res, {
    message: 'Retrieved product successfully',
    statusCode: 200,
    data: result,
    success: true,
  });
});

const deleteProduct = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await productServices.deleteProductFromDB(id);

  sendResponse(res, {
    message: 'Deleted product successfully',
    statusCode: 200,
    data: result,
    success: true,
  });
});

const updateProduct = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await productServices.updateProductIntoDB(id, req.body);

  sendResponse(res, {
    message: 'Updated product successfully',
    statusCode: 200,
    data: result,
    success: true,
  });
});

export const productControllers = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  deleteProduct,
  updateProduct,
};
