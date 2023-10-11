import express from 'express'
import cors from 'cors'
import { createProduct, getAllProducts } from '../controller/productController.js'

const productRouter = express.Router()


productRouter.post('/create', createProduct)
productRouter.get("/all", getAllProducts)

export default productRouter;