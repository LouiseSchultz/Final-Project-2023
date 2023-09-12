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


// controller für Bild
export const getBookImage = async (req, res) => {
   const id = req.params.id;
   //const title = req.params.title;

   try {
      const books = await bookModel.findById(title);
      const imagePath = books.image;
      res.sendFile(`./${imagePath}`);
   } catch (error) {
      res.send("books could not be found. " + error.message);
   }
}