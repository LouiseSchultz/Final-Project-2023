import path from 'path';
import { fileURLToPath } from 'url';
import { bookModel } from "../models/bookModel.js";
//import axios from 'axios'

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


/*export const searchBooksByTitle = async (req, res) => {
  try {
    const title = req.query.title;
    const books = await bookModel.find({ title: { $regex: title, $options: 'i' } });
    res.send(books);
  } catch (error) {
    res.send("Buch nicht gefunden. " + error.message);
  }
}*/

export const searchBooksByTitle = async (req, res) => {
  try {
    const title = req.params.title; // Récupérez le titre à partir du paramètre de requête 'title'
    
    // Effectuez une recherche dans la base de données pour les livres dont le titre correspond au terme de recherche (en ignorant la casse)
    const bookObj = await bookModel.find({ title: { $regex: new RegExp(title, 'i') } });
    console.log(bookObj)
    // Vérifiez si des livres ont été trouvés
    if (bookObj) {
      res.json(bookObj);
    } else {
      res.json([]);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Une erreur s\'est produite lors de la recherche de livres par titre.' });
  }
};



/*export const getSingleBook = async (req, res) => {
  try {
     const book = await bookModel.findById(req.params.id);
     res.send(book);
  } catch (error) {
     res.send("book could not be found. " + error.message);
  }
}*/

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
