import express  from "express";
import Book from "../models/booksModel.js";
import data from "../data/data.js";
import User from "../models/userModel.js";

 const seedRouter = express.Router()

 seedRouter.get('/', async (req, res) => {

   await User.remove({})
   const createUsers = await User.insertMany(data.users)
   await Book.remove({})
   const createBooks = await Book.insertMany(data.books)

   res.send({createBooks, createUsers})

 })


 export default seedRouter