import { Router } from 'express'
import { getBooks, newBook } from '../controller/bookController.js'

export const bookRouter = new Router()

bookRouter
  .get('/books', getBooks)
  .post('/books/new', newBook)