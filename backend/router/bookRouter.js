import { Router } from 'express'
import { getBooks,  newBook, getBookById } from '../controller/bookController.js'

export const bookRouter = new Router()

bookRouter
  .get('/books', getBooks)
  //.get('/books/:title', getBookImage)
  .post('/books/new', newBook)
  .get('/books/:id', getBookById)
  // .get('/api/books', getBooksApi)