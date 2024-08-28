import {celebrate, Joi, Segments} from 'celebrate'

const todoSchema = Joi.object({
  userId: Joi.number().integer().positive().required(),
  id: Joi.number().integer().positive().required(),
  title: Joi.string().min(1).max(100).required(),
  completed: Joi.boolean().required()
})

const validateTodoPost = celebrate({[Segments.BODY]: todoSchema})

const validateTodoPut = celebrate({[Segments.BODY]: todoSchema})

const validateParamsTodoId = celebrate({
  [Segments.PARAMS]: {
    todoId: Joi.number().integer().positive().required()
  }
})

export { validateTodoPost, validateTodoPut, validateParamsTodoId }