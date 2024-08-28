import { Router } from "express";
import {
  deleteTodoByIdHandler,
  getTodoByIdHandler,
  getTodosHandler,
  postTodosHandler,
  putTodoByIdHandler
} from "../controllers/todos.mjs";
import {validateParamsTodoId, validateTodoPost, validateTodoPut} from "../validators/todoValidator.mjs";

const todosRouter = Router()

todosRouter.route('/')
  .get(getTodosHandler)
  .post(validateTodoPost,postTodosHandler)

todosRouter.route('/:todoId')
  .get(validateParamsTodoId,getTodoByIdHandler)
  .delete(validateParamsTodoId,deleteTodoByIdHandler)
  .put(validateParamsTodoId, validateTodoPut,putTodoByIdHandler)

export default todosRouter