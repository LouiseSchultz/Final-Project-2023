import { Router } from 'express'
import { getBooks, newBook,getBookImage } from '../controller/bookController.js'

export const bookRouter = new Router()

bookRouter
  .get('/books', getBooks)
  .post('/books/new', newBook)
  .get("/bookImage/:title", getBookImage)