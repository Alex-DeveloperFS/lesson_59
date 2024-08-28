import {celebrate, Joi, Segments} from 'celebrate'

const productSchema = Joi.object({
  id: Joi.number().integer().positive().required(),
  name: Joi.string().min(1).max(100).required(),
  price: Joi.number().integer().positive().required(),
  description: Joi.string().min(1).max(100).required(),
  body: Joi.string().min(1).max(100).required(),
  image: Joi.string().min(1).max(100).required(),
  category: Joi.string().min(1).max(100).required(),
})

const validateProductsPost = celebrate({[Segments.BODY]: productSchema})

const validateProductsPut = celebrate({[Segments.BODY]: productSchema})

const validateParamsProductsId = celebrate({
  [Segments.PARAMS]: {
    productId: Joi.number().integer().positive().required()
  }
})

export {validateProductsPost, validateProductsPut, validateParamsProductsId}