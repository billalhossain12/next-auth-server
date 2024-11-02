import { catchAsync } from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { categoryServices } from './category.service';

const createCategory = catchAsync(async (req, res) => {
  const result = await categoryServices.createCategoryIntoDB(req.body);

  sendResponse(res, {
    message: 'Category created successfully',
    statusCode: 200,
    data: result,
    success: true,
  });
});

const getAllCategory = catchAsync(async (req, res) => {
  const result = await categoryServices.getAllCategoryFromDB();

  sendResponse(res, {
    message: 'Retrieved categories successfully',
    statusCode: 200,
    data: result,
    success: true,
  });
});

const getSingleCategory = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await categoryServices.getSingleCategoryFromDB(id);

  sendResponse(res, {
    message: 'Retrieved category successfully',
    statusCode: 200,
    data: result,
    success: true,
  });
});

const deleteCategory = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await categoryServices.deleteCategoryFromDB(id);

  sendResponse(res, {
    message: 'Deleted category successfully',
    statusCode: 200,
    data: result,
    success: true,
  });
});

const updateCategory = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await categoryServices.updateCategoryIntoDB(id, req.body);

  sendResponse(res, {
    message: 'Updated category successfully',
    statusCode: 200,
    data: result,
    success: true,
  });
});

export const categoryControllers = {
  createCategory,
  getAllCategory,
  getSingleCategory,
  deleteCategory,
  updateCategory,
};
