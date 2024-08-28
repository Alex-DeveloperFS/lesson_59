import { Router } from "express"
import {
  deletePostByIdHandler,
  getPostByIdHandler,
  getPostsHandler,
  postPostsHandler,
  putPostByIdHandler
} from "../controllers/posts.mjs"
import {validateParamsPostsId, validatePostsPost, validatePostsPut} from "../validators/postValidator.mjs";

const postsRouter = Router()

postsRouter.route('/')
  .get(getPostsHandler)
  .post(validatePostsPost,postPostsHandler)

postsRouter.route('/:postId')
  .get(validateParamsPostsId,getPostByIdHandler)
  .delete(validateParamsPostsId,deletePostByIdHandler)
  .put(validateParamsPostsId, validatePostsPut,putPostByIdHandler)

export default postsRouter