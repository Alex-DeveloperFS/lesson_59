const getPostsHandler = (req, res) => {
  res.send("GET posts route")
}

const postPostsHandler = (req, res) => {
  res.send("POST posts route")
}

const getPostByIdHandler = (req, res) => {
  const { postId } = req.params
  res.send(`GET post by id: ${postId}`)
}

const deletePostByIdHandler = (req, res) => {
  const { postId } = req.params
  res.send(`DELETE post by id: ${postId}`)
}

const putPostByIdHandler = (req, res) => {
  const { postId } = req.params
  res.send(`PUT post by id: ${postId}`)
}

export {getPostsHandler, postPostsHandler, getPostByIdHandler, deletePostByIdHandler, putPostByIdHandler}