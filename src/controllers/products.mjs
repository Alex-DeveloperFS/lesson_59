const getProductsHandler = (req, res) => {
  res.send("GET products route")
}

const postProductsHandler = (req, res) => {
  res.send("POST products route")
}

const getProductByIdHandler = (req, res) => {
  const { productId } = req.params
  res.send(`GET product by id: ${productId}`)
}

const deleteProductByIdHandler = (req, res) => {
  const { productId } = req.params
  res.send(`DELETE product by id: ${productId}`)
}

const putProductByIdHandler = (req, res) => {
  const { productId } = req.params
  res.send(`PUT product by id: ${productId}`)
}

export {getProductsHandler, postProductsHandler, getProductByIdHandler, deleteProductByIdHandler, putProductByIdHandler}