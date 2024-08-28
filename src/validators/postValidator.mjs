import { celebrate, Joi, Segments } from 'celebrate'

const postSchema = Joi.object({
  id: Joi.number().integer().positive().required(),
  userId: Joi.number().integer().positive().required(),
  title: Joi.string().min(1).max(100).required(),
  body: Joi.string().min(1).max(100).required()
})

const validatePostsPost = celebrate({[Segments.BODY]: postSchema})

const validatePostsPut = celebrate({[Segments.BODY]: postSchema})

const validateParamsPostsId = celebrate({
  [Segments.PARAMS]: {
    postId: Joi.number().integer().positive().required()
  }
})

export { validatePostsPost, validatePostsPut, validateParamsPostsId }