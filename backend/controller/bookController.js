import path from 'path';
import { fileURLToPath } from 'url';
import { bookModel } from "../models/bookModel.js";
import axios from 'axios'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

export const getBookById = async (req, res) => {
  try {
    const book = await bookModel.findById(req.params.id)
    res.send(book)
  } catch (error) {
    res.send(`Buch koonte nicht geladen werden ${error.message}` );
  }
}

// // Funktion zum Abrufen von Büchern von der Google Books API
// export const getBooksApi = async (req, res) => {
//   try {
//     const searchTerm = req.query.q; // Der Suchbegriff aus der Anfrage des Frontends

//     // Senden Sie die Anfrage an die Google Books API
//     const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`);
    
//     // Senden Sie die Daten von Google Books API als Antwort an Ihr Frontend
//     res.json(response.data);
//   } catch (error) {
//     console.error('Fehler beim Abrufen der Bücher:', error);
//     res.status(500).json({ error: 'Ein Fehler ist aufgetreten' });
//   }
// };


// export const getBookImage = async (req, res) => {
//   // const id = req.params.id;
//   const title = req.params.title;
//   try {
//     const book = await bookModel.findOne({ title: title });
//     if (!book) {
//        return res.status(404).send("Buch nicht gefunden");
//     }

//     const imagePath = path.join(__dirname, '..', 'images', book.image); // Adjust the path here

//     res.sendFile(imagePath)
//  } catch (error) {
//     res.status(500).send("Es gab einen Fehler " + error.message);
//  }
// }