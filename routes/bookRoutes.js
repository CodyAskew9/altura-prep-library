import express  from "express";
import Book from "../models/booksModel.js";



const bookRouter = express.Router()

bookRouter.get('/', async (req, res) => {
    const books = await Book.find()
    res.send(books)
})

bookRouter.get('/isbn/:isbn', async (req, res) => {
    const book = await Book.findOne({isbn:req.params.isbn})
    if(book){
        res.send(book)
    }else {
        res.status(404).send({message: 'book not found'})
    }
})

export default bookRouter