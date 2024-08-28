const getTodosHandler = (req, res) => {
  res.send("GET todos route")
}

const postTodosHandler = (req, res) => {
  res.send("POST todos route")
}

const getTodoByIdHandler = (req, res) => {
  const { todoId } = req.params
  res.send(`GET todo by id: ${todoId}`)
}

const deleteTodoByIdHandler = (req, res) => {
  const { todoId } = req.params
  res.send(`DELETE todo by id: ${todoId}`)
}

const putTodoByIdHandler = (req, res) => {
  const { todoId } = req.params
  res.send(`PUT todo by id: ${todoId}`)
}

export {getTodosHandler, postTodosHandler, getTodoByIdHandler, deleteTodoByIdHandler, putTodoByIdHandler}