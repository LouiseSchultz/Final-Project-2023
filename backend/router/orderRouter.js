import express from 'express'
import cors from 'cors'
import { createOrder, getUserOrders } from '../controller/orderController.js'



const orderRouter = express.Router()


orderRouter.post('/create', createOrder)
orderRouter.get("/user/:userId", getUserOrders)

export default orderRouter;