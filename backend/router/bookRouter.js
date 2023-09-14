import { Router } from 'express'
import { getBooks,  newBook } from '../controller/bookController.js'

export const bookRouter = new Router()

bookRouter
  .get('/books', getBooks)
  //.get('/books/:title', getBookImage)
  .post('/books/new', newBook)
  // .get('/api/books', getBooksApi)
