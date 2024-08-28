const getUsersHandler = (req, res) => {
  res.send("GET users route")
}

const postUsersHandler = (req, res) => {
  res.send("POST users route")
}

const getUserByIdHandler = (req, res) => {
  const { userId } = req.params
  res.send(`GET user by id: ${userId}`)
}

const deleteUserByIdHandler = (req, res) => {
  const { userId } = req.params
  res.send(`DELETE user by id: ${userId}`)
}

const putUserByIdHandler = (req, res) => {
  const { userId } = req.params
  res.send(`PUT user by id: ${userId}`)
}

export {getUsersHandler, postUsersHandler, getUserByIdHandler, deleteUserByIdHandler, putUserByIdHandler}