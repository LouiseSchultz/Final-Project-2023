import { bookModel } from "../models/bookModel.js";

// create new book
export const newBook = async(req,res, next) => {

  const book = await bookModel.create(req.body)

  res.status(201).json({
    success: true,
    book
  })
}

export const getBooks = async( req,res) => {
  try {
    const books = await bookModel.find()
    res.send(books)
  } catch (error) {
    res.send(`Bücher können nicht geladen werden`)
  }
}