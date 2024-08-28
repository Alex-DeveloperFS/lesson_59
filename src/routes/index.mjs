import rootRouter from "./root.mjs"
import usersRouter from "./users.mjs"
import todosRouter from "./todos.mjs"
import postsRouter from "./posts.mjs"
import productsRouter from "./products.mjs";
import express from "express"

const router = express.Router()

router.use('/', rootRouter)

router.use('/users', usersRouter)
router.use('/todos', todosRouter)
router.use('/posts', postsRouter)
router.use('/products', productsRouter)

export default router