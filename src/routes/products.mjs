import { Router } from "express"
import {
  deleteProductByIdHandler,
  getProductByIdHandler,
  getProductsHandler,
  postProductsHandler,
  putProductByIdHandler
} from "../controllers/products.mjs";
import { validateParamsProductsId, validateProductsPost, validateProductsPut } from "../validators/productValidator.mjs";

const productsRouter = Router()

productsRouter.route('/')
  .get(getProductsHandler)
  .post(validateProductsPost, postProductsHandler)

productsRouter.route('/:productId')
  .get(validateParamsProductsId, getProductByIdHandler)
  .delete(validateParamsProductsId, deleteProductByIdHandler)
  .put(validateParamsProductsId, validateProductsPut, putProductByIdHandler)

export default productsRouter