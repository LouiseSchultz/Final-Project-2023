import { Router } from 'express'
import { getBooks,  newBook, getBookById, getBookByCategory } from '../controller/bookController.js'

export const bookRouter = new Router()

bookRouter
  .get('/books/category/:category', getBookByCategory)
  .get('/books/:id', getBookById)
  .get('/books', getBooks)
  //.get('/books/:title', getBookImage)
  .post('/books/new', newBook)
  // .get('/api/books', getBooksApi)